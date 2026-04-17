"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Volume2, RefreshCw, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PlayerModal from "@/components/PlayerModal";
import SpellBoard from "@/components/SpellBoard";

const MAX_TRIES: Record<string, number> = { easy: 5, medium: 4, hard: 3 };
const POINTS:    Record<string, number> = { easy: 5, medium: 10, hard: 20 };

type Difficulty = "easy" | "medium" | "hard";
type Phase = "loading" | "ready" | "playing" | "won" | "lost";

interface WordData { id: number; word: string; hint: string | null; difficulty: string; }

export default function PracticePage() {
  const [player, setPlayer]             = useState<{ name: string; id: number } | null>(null);
  const [showModal, setShowModal]       = useState(false);
  const [difficulty, setDifficulty]     = useState<Difficulty>("medium");
  const [word, setWord]                 = useState<WordData | null>(null);
  const [phase, setPhase]               = useState<Phase>("loading");

  // Each attempt is a complete array of guessed letters for that row
  const [pastAttempts, setPastAttempts] = useState<string[][]>([]);
  const [currentGuess, setCurrentGuess] = useState<(string | null)[]>([]);
  const [activeIndex, setActiveIndex]   = useState(0);

  const [shakeRowIdx, setShakeRowIdx]   = useState<number | null>(null);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionWords, setSessionWords] = useState(0);
  const speakRef = useRef<(w: string) => void>(() => {});

  speakRef.current = (w: string) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(w);
    u.rate = 0.78; u.pitch = 1.0;
    window.speechSynthesis.speak(u);
  };

  useEffect(() => {
    const id   = localStorage.getItem("playerId");
    const name = localStorage.getItem("playerName");
    if (id && name) setPlayer({ id: parseInt(id), name });
    else setShowModal(true);
  }, []);

  const fetchWord = useCallback(async (diff: Difficulty) => {
    setPhase("loading");
    setPastAttempts([]);
    setCurrentGuess([]);
    setActiveIndex(0);
    setShakeRowIdx(null);

    try {
      const res = await fetch(`/api/words/random?difficulty=${diff}`);
      if (!res.ok) throw new Error("No words found");
      const data: WordData = await res.json();
      setWord(data);
      setCurrentGuess(new Array(data.word.length).fill(null));
      setPhase("ready");
    } catch {
      setPhase("lost");
    }
  }, []);

  // Load first word once player is set
  useEffect(() => { if (player) fetchWord(difficulty); }, [player]); // eslint-disable-line

  const handleDifficultyChange = (d: Difficulty) => {
    setDifficulty(d);
    fetchWord(d);
  };

  const handleSubmit = useCallback(async (guess: (string | null)[]) => {
    if (!word || !player || (phase !== "playing" && phase !== "ready")) return;

    const maxTries   = MAX_TRIES[difficulty];
    const guessedStr = guess.map(g => g ?? "").join("").toLowerCase();
    const correct    = guessedStr === word.word.toLowerCase();
    const filledGuess = guess.map(g => g ?? "") as string[];
    const newPastAttempts = [...pastAttempts, filledGuess];

    setPastAttempts(newPastAttempts);

    if (correct) {
      setPhase("won");
      const bonus  = Math.max(1, maxTries - pastAttempts.length);
      const points = POINTS[difficulty] * bonus;
      setSessionScore(s => s + points);
      setSessionWords(w => w + 1);
      await fetch("/api/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId: player.id, points, difficulty }),
      });
    } else {
      // Wrong guess
      const wrongRowIdx = newPastAttempts.length - 1;
      setShakeRowIdx(wrongRowIdx);
      setTimeout(() => setShakeRowIdx(null), 600);

      if (newPastAttempts.length >= maxTries) {
        // Out of attempts
        setPhase("lost");
      } else {
        // More attempts remaining — reset current row
        setCurrentGuess(new Array(word.word.length).fill(null));
        setActiveIndex(0);
        setPhase("playing");
      }
    }
  }, [word, player, phase, pastAttempts, difficulty]);

  const handleStart = () => {
    setPhase("playing");
  };

  const maxTries        = MAX_TRIES[difficulty];
  const attemptsUsed    = pastAttempts.length;
  const attemptsLeft    = maxTries - attemptsUsed;
  const showHint        = word?.hint && attemptsUsed >= (difficulty === "easy" ? 2 : 1);

  return (
    <>
      <Navbar />
      {showModal && <PlayerModal onDone={(name, id) => { setPlayer({ name, id }); setShowModal(false); }} />}

      <main style={{ maxWidth: 560, margin: "0 auto", padding: "clamp(1.25rem,4vw,2.5rem) 1rem" }}>
        {/* Header */}
        <header style={{ marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Free Practice</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <h1 style={{ fontSize: "clamp(1.5rem,4vw,2rem)", color: "var(--text)", fontWeight: 600 }}>Practice Mode</h1>
            {sessionWords > 0 && (
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>{sessionWords} solved</span>
                <span style={{ fontSize: "0.75rem", color: "var(--secondary)", fontFamily: "'DM Mono', monospace" }}>{sessionScore} pts</span>
              </div>
            )}
          </div>
        </header>

        {/* Difficulty selector */}
        <div style={{ display: "flex", gap: "4px", background: "var(--surface-lowest)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "3px", marginBottom: "1.25rem" }}>
          {(["easy", "medium", "hard"] as Difficulty[]).map(d => {
            const active = difficulty === d;
            return (
              <button key={d} onClick={() => handleDifficultyChange(d)} aria-pressed={active}
                style={{ flex: 1, padding: "7px 4px", border: "none", borderRadius: "calc(var(--radius-md) - 2px)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.8rem", cursor: "pointer", transition: "all 0.15s",
                  background: active ? "var(--surface-high)" : "transparent",
                  color: active ? diffColor(d) : "var(--text-3)" }}>
                {d.charAt(0).toUpperCase() + d.slice(1)}
                <span style={{ display: "block", fontSize: "0.65rem", fontWeight: 400, opacity: 0.7, marginTop: "1px" }}>
                  {MAX_TRIES[d]} tries
                </span>
              </button>
            );
          })}
        </div>

        {/* Loading spinner */}
        {phase === "loading" && (
          <div style={{ display: "flex", justifyContent: "center", padding: "5rem" }}>
            <span style={{ width: 24, height: 24, border: "2px solid var(--surface-high)", borderTopColor: "var(--primary)", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
          </div>
        )}

        {/* Game card */}
        {word && phase !== "loading" && (
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "clamp(1.1rem,3vw,1.6rem)", animation: "fade-up 0.2s ease" }}>

            {/* Top controls row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", gap: "0.5rem", flexWrap: "wrap" }}>
              <button onClick={() => speakRef.current(word.word)} aria-label="Listen to word"
                style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--primary-container)", border: "none", borderRadius: "var(--radius-md)", padding: "8px 16px", color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}>
                <Volume2 size={13} /> Listen
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>{word.word.length} letters</span>
                <TriesDots used={attemptsUsed} max={maxTries} />
              </div>
            </div>

            {/* Progressive hint */}
            {showHint && (phase === "playing" || phase === "ready") && (
              <p style={{ fontSize: "0.78rem", color: "var(--text-3)", marginBottom: "1rem", paddingLeft: "0.75rem", borderLeft: "2px solid var(--surface-high)", fontStyle: "italic" }}>
                {word.hint}
              </p>
            )}

            {/* Past submitted attempt rows */}
            {pastAttempts.map((att, rowIdx) => {
              const isWrongRow = rowIdx === (phase === "won" ? -1 : pastAttempts.length - 1)
                && phase !== "won";
              return (
                <div key={rowIdx} style={{ marginBottom: "8px", animation: rowIdx === shakeRowIdx ? "shake 0.5s ease" : undefined }}>
                  <SpellBoard
                    word={word.word}
                    guess={att.map(c => c || null)}
                    activeIndex={-1}
                    submitted={true}
                    revealed={phase === "lost"}
                    disabled={true}
                    onGuessChange={() => {}} onIndexChange={() => {}} onSubmit={() => {}}
                  />
                </div>
              );
            })}

            {/* Current input row — only shown while playing/ready */}
            {(phase === "playing" || phase === "ready") && (
              <>
                {phase === "ready" ? (
                  /* Word preview before user starts — show blank boxes and a Start button */
                  <div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(5px,1.5vw,8px)", justifyContent: "center", marginBottom: "1.25rem" }}>
                      {word.word.split("").map((_, i) => (
                        <div key={i} style={{ width: "clamp(42px,10vw,54px)", height: "clamp(50px,12vw,62px)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)", background: "var(--surface)", position: "relative", flexShrink: 0 }}>
                          <span style={{ position: "absolute", bottom: 9, left: "50%", transform: "translateX(-50%)", width: "48%", height: 1.5, borderRadius: 1, background: "var(--surface-high)" }} />
                        </div>
                      ))}
                    </div>
                    <button onClick={handleStart}
                      style={{ width: "100%", padding: "11px", background: "var(--primary-container)", border: "none", borderRadius: "var(--radius-md)", color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer" }}>
                      Start Spelling
                    </button>
                  </div>
                ) : (
                  <SpellBoard
                    word={word.word}
                    guess={currentGuess}
                    activeIndex={activeIndex}
                    submitted={false}
                    revealed={false}
                    disabled={false}
                    onGuessChange={setCurrentGuess}
                    onIndexChange={setActiveIndex}
                    onSubmit={handleSubmit}
                  />
                )}
              </>
            )}

            {/* Result panel */}
            {(phase === "won" || phase === "lost") && (
              <div style={{ textAlign: "center", paddingTop: "1.25rem", animation: "fade-up 0.2s ease" }}>
                <p style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.35rem",
                  color: phase === "won" ? "var(--success)" : "var(--error)" }}>
                  {phase === "won" ? "Correct" : "Out of tries"}
                </p>

                {phase === "won" && (() => {
                  const bonus  = Math.max(1, maxTries - (pastAttempts.length - 1));
                  const points = POINTS[difficulty] * bonus;
                  return <p style={{ fontSize: "0.78rem", color: "var(--secondary)", marginBottom: "0.875rem", fontFamily: "'DM Mono', monospace" }}>+{points} pts</p>;
                })()}

                {phase === "lost" && (
                  <p style={{ fontSize: "0.875rem", color: "var(--text-2)", marginBottom: "0.875rem" }}>
                    The word was{" "}
                    <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, color: "var(--text)", letterSpacing: "0.05em" }}>
                      {word.word.toUpperCase()}
                    </span>
                  </p>
                )}

                <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button onClick={() => fetchWord(difficulty)}
                    style={{ display: "flex", alignItems: "center", gap: "5px", background: "var(--primary-container)", border: "none", borderRadius: "var(--radius-md)", padding: "9px 20px", color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" }}>
                    <RefreshCw size={13} /> New Word
                  </button>
                  <button onClick={() => fetchWord(difficulty)}
                    style={{ display: "flex", alignItems: "center", gap: "5px", background: "transparent", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "9px 20px", color: "var(--text-2)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer" }}>
                    Skip <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            )}

            {/* Attempts remaining footer */}
            {(phase === "playing" || phase === "ready") && (
              <p style={{ textAlign: "center", marginTop: "0.875rem", fontSize: "0.72rem", color: attemptsLeft <= 1 ? "var(--error)" : "var(--text-3)" }}>
                {attemptsLeft} {attemptsLeft === 1 ? "attempt" : "attempts"} remaining
              </p>
            )}
          </div>
        )}
      </main>
    </>
  );
}

function diffColor(d: Difficulty) {
  return d === "easy" ? "var(--success)" : d === "medium" ? "var(--secondary)" : "var(--error)";
}

function TriesDots({ used, max }: { used: number; max: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }} aria-label={`${used} of ${max} tries used`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: i < used ? "var(--primary)" : "var(--surface-high)", display: "inline-block", transition: "background 0.2s" }} />
      ))}
    </div>
  );
}
