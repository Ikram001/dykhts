"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Volume2, RefreshCw, ChevronRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import PlayerModal from "@/components/PlayerModal";
import SpellBoard from "@/components/SpellBoard";

const MAX_TRIES: Record<string, number> = { easy: 5, medium: 4, hard: 3 };
const POINTS: Record<string, number> = { easy: 5, medium: 10, hard: 20 };

type Difficulty = "easy" | "medium" | "hard";
type Phase = "loading" | "playing" | "won" | "lost";

interface WordData { word: string; hint: string | null; difficulty: string; }

export default function PracticePage() {
  const [player, setPlayer] = useState<{ name: string; id: number } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [word, setWord] = useState<WordData | null>(null);
  const [phase, setPhase] = useState<Phase>("loading");
  const [attempts, setAttempts] = useState<(string | null)[][]>([]);
  const [currentGuess, setCurrentGuess] = useState<(string | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shakeIdx, setShakeIdx] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionWords, setSessionWords] = useState(0);
  const speakRef = useRef<(w: string) => void>(() => {});

  speakRef.current = (w: string) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(w);
    u.rate = 0.78; u.pitch = 1.05;
    window.speechSynthesis.speak(u);
  };

  useEffect(() => {
    const id = localStorage.getItem("playerId");
    const name = localStorage.getItem("playerName");
    if (id && name) setPlayer({ id: parseInt(id), name });
    else setShowModal(true);
  }, []);

  const fetchWord = useCallback(async (diff: Difficulty) => {
    setPhase("loading");
    setAttempts([]); setRevealed(false);
    try {
      const res = await fetch(`/api/words/random?difficulty=${diff}`);
      if (!res.ok) { setPhase("lost"); return; }
      const data = await res.json();
      setWord(data);
      setCurrentGuess(new Array(data.word.length).fill(null));
      setActiveIndex(0);
      setPhase("playing");
      setTimeout(() => speakRef.current(data.word), 400);
    } catch { setPhase("lost"); }
  }, []);

  useEffect(() => { if (player) fetchWord(difficulty); }, [player, difficulty, fetchWord]);

  const handleDifficultyChange = (d: Difficulty) => {
    setDifficulty(d);
    fetchWord(d);
  };

  const handleSubmit = useCallback(async (guess: (string | null)[]) => {
    if (!word || !player || phase !== "playing") return;
    const maxTries = MAX_TRIES[difficulty];
    const guessStr = guess.map(g => g ?? "").join("").toLowerCase();
    const correct = guessStr === word.word.toLowerCase();
    const nextAttempts = [...attempts, guess];
    setAttempts(nextAttempts);

    if (correct) {
      setPhase("won");
      speakRef.current("Correct!");
      const points = POINTS[difficulty] * Math.max(1, maxTries - nextAttempts.length + 1);
      setSessionScore(s => s + points);
      setSessionWords(w => w + 1);
      // Save to arcade leaderboard
      await fetch("/api/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId: player.id, points, difficulty }),
      });
    } else {
      setShakeIdx(nextAttempts.length - 1);
      setTimeout(() => setShakeIdx(null), 600);
      if (nextAttempts.length >= maxTries) {
        setPhase("lost"); setRevealed(true);
        speakRef.current("Out of tries!");
      } else {
        setCurrentGuess(new Array(word.word.length).fill(null));
        setActiveIndex(0);
      }
    }
  }, [word, player, phase, attempts, difficulty]);

  const currentAttempt = attempts.length;
  const maxTries = MAX_TRIES[difficulty];

  return (
    <>
      <Navbar />
      {showModal && <PlayerModal onDone={(name, id) => { setPlayer({ name, id }); setShowModal(false); }} />}

      <main style={{ maxWidth: 620, margin: "0 auto", padding: "clamp(1.25rem,4vw,2.5rem) 1rem" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "1.75rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.35rem" }}>Free Practice</p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,2.6rem)", color: "var(--text)" }}>Practice Mode</h1>
        </header>

        {/* Difficulty picker */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "1.5rem" }}>
          {(["easy", "medium", "hard"] as Difficulty[]).map(d => (
            <button key={d} onClick={() => handleDifficultyChange(d)}
              aria-pressed={difficulty === d}
              style={{
                padding: "8px 20px", border: "2px solid", borderRadius: "var(--radius-xl)",
                fontFamily: "'Fredoka', cursive", fontWeight: 600, fontSize: "0.95rem",
                cursor: "pointer", transition: "all 0.15s ease",
                ...(difficulty === d
                  ? { background: diffColor(d), borderColor: diffBorder(d), color: "white" }
                  : { background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-2)" }),
              }}>
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>

        {/* Session stats */}
        {sessionWords > 0 && (
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "1.25rem" }}>
            <StatPill label={`${sessionWords} solved`} icon={<Star size={12} />} />
            <StatPill label={`${sessionScore} pts`} color="var(--amber)" />
          </div>
        )}

        {/* Game card */}
        {phase === "loading" && (
          <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
            <span style={{ width: 28, height: 28, border: "3px solid var(--accent-dim)", borderTopColor: "var(--accent)", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
          </div>
        )}

        {word && phase !== "loading" && (
          <div style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "clamp(1.25rem,4vw,2rem)", boxShadow: "var(--shadow-md)", animation: "fade-up 0.3s ease" }}>
            {/* Listen + tries */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <button onClick={() => speakRef.current(word.word)} aria-label="Listen"
                style={{ display: "flex", alignItems: "center", gap: "7px", background: "var(--accent)", border: "none", borderRadius: "var(--radius-xl)", padding: "9px 20px", color: "white", fontFamily: "'Fredoka', cursive", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", boxShadow: "0 3px 12px rgba(240,98,146,0.28)" }}>
                <Volume2 size={16} /> Listen
              </button>
              <TriesDots used={currentAttempt} max={maxTries} />
            </div>

            {/* Hint (shows progressively) */}
            {word.hint && currentAttempt >= (difficulty === "easy" ? 2 : difficulty === "medium" ? 1 : 1) && phase === "playing" && (
              <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border-2)", borderRadius: "var(--radius-md)", padding: "0.625rem 1rem", marginBottom: "1.25rem", fontSize: "0.85rem", color: "var(--text-2)", fontStyle: "italic" }}>
                {word.hint}
              </div>
            )}

            {/* Past attempt rows */}
            {attempts.map((att, rowIdx) => (
              <div key={rowIdx} style={{ marginBottom: "10px", animation: rowIdx === shakeIdx ? "shake 0.5s ease" : undefined }}>
                <SpellBoard
                  word={word.word} guess={att} activeIndex={-1}
                  submitted={true} revealed={phase === "lost"} disabled={true}
                  onGuessChange={() => {}} onIndexChange={() => {}} onSubmit={() => {}}
                />
              </div>
            ))}

            {/* Active row */}
            {phase === "playing" && (
              <SpellBoard
                word={word.word} guess={currentGuess}
                activeIndex={activeIndex} submitted={false} revealed={false} disabled={false}
                onGuessChange={setCurrentGuess} onIndexChange={setActiveIndex} onSubmit={handleSubmit}
              />
            )}

            {/* Result */}
            {(phase === "won" || phase === "lost") && (
              <div style={{ textAlign: "center", padding: "1rem 0 0", animation: "fade-up 0.3s ease" }}>
                <p style={{ fontFamily: "'Fredoka', cursive", fontSize: "1.4rem", color: phase === "won" ? "var(--sage)" : "#ef5350", marginBottom: "0.5rem" }}>
                  {phase === "won" ? "Correct!" : "Out of tries!"}
                </p>
                {phase === "lost" && (
                  <p style={{ color: "var(--text-2)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
                    The word was <strong style={{ fontFamily: "'Fredoka', cursive", color: "var(--text)" }}>{word.word.toUpperCase()}</strong>
                  </p>
                )}
                {phase === "won" && (
                  <p style={{ color: "var(--text-3)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                    +{POINTS[difficulty] * Math.max(1, maxTries - attempts.length + 1)} pts
                  </p>
                )}
                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <button onClick={() => fetchWord(difficulty)}
                    style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--accent)", border: "none", borderRadius: "var(--radius-xl)", padding: "10px 22px", color: "white", fontFamily: "'Fredoka', cursive", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}>
                    <RefreshCw size={14} /> New Word
                  </button>
                  <button onClick={() => fetchWord(difficulty)}
                    style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "10px 22px", color: "var(--text-2)", fontFamily: "'Fredoka', cursive", fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}>
                    Skip <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Attempts remaining */}
            {phase === "playing" && (
              <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-3)" }}>
                {maxTries - currentAttempt} {maxTries - currentAttempt === 1 ? "attempt" : "attempts"} left
              </p>
            )}
          </div>
        )}
      </main>
    </>
  );
}

function diffColor(d: Difficulty) {
  return d === "easy" ? "#4caf50" : d === "medium" ? "#ff9800" : "#f44336";
}
function diffBorder(d: Difficulty) {
  return d === "easy" ? "#388e3c" : d === "medium" ? "#e65100" : "#c62828";
}

function TriesDots({ used, max }: { used: number; max: number }) {
  return (
    <div style={{ display: "flex", gap: "4px" }} aria-label={`${used} of ${max} tries used`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: i < used ? "var(--accent)" : "var(--border)", display: "inline-block" }} />
      ))}
    </div>
  );
}

function StatPill({ label, icon, color }: { label: string; icon?: React.ReactNode; color?: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "4px 12px", fontSize: "0.8rem", fontWeight: 700, color: color ?? "var(--text-2)" }}>
      {icon}{label}
    </span>
  );
}
