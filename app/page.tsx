"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Volume2, Flame, CheckCircle2, XCircle, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import PlayerModal from "@/components/PlayerModal";
import SpellBoard from "@/components/SpellBoard";

const MAX_TRIES: Record<string, number> = { easy: 5, medium: 4, hard: 3 };

interface WordData {
  word: string;
  hint: string | null;
  difficulty: string;
  length: number;
}

interface DailyData {
  challengeId: number;
  date: string;
  word: WordData;
  entry: { won: boolean; firstTry: boolean; attemptsUsed: number; streak: number } | null;
}

type Phase = "loading" | "playing" | "won" | "lost";

export default function DailyPage() {
  const [player, setPlayer] = useState<{ name: string; id: number } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [daily, setDaily] = useState<DailyData | null>(null);
  const [phase, setPhase] = useState<Phase>("loading");

  const [attempts, setAttempts] = useState<(string | null)[][]>([]);
  const [currentGuess, setCurrentGuess] = useState<(string | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [shakeIdx, setShakeIdx] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [savedEntry, setSavedEntry] = useState<DailyData["entry"]>(null);
  const speakRef = useRef<(w: string) => void>(() => {});

  speakRef.current = (word: string) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.rate = 0.78; u.pitch = 1.05;
    window.speechSynthesis.speak(u);
  };

  useEffect(() => {
    const id = localStorage.getItem("playerId");
    const name = localStorage.getItem("playerName");
    if (id && name) setPlayer({ id: parseInt(id), name });
    else setShowModal(true);
  }, []);

  const fetchDaily = useCallback(async (playerId: number) => {
    setPhase("loading");
    const res = await fetch(`/api/daily?playerId=${playerId}`);
    const data: DailyData = await res.json();
    setDaily(data);
    if (data.entry) {
      setSavedEntry(data.entry);
      setPhase(data.entry.won ? "won" : "lost");
      setRevealed(!data.entry.won);
    } else {
      setCurrentGuess(new Array(data.word.length).fill(null));
      setAttempts([]); setCurrentAttempt(0);
      setPhase("playing");
      setTimeout(() => speakRef.current(data.word.word), 500);
    }
  }, []);

  useEffect(() => { if (player) fetchDaily(player.id); }, [player, fetchDaily]);

  const handleSubmit = useCallback(async (guess: (string | null)[]) => {
    if (!daily || !player || phase !== "playing") return;
    const word = daily.word.word;
    const maxTries = MAX_TRIES[daily.word.difficulty] ?? 4;
    const guessStr = guess.map(g => g ?? "").join("").toLowerCase();
    const correct = guessStr === word.toLowerCase();
    const nextAttempts = [...attempts, guess];
    setAttempts(nextAttempts);

    if (correct) {
      setPhase("won");
      speakRef.current("Correct! Well done!");
      const payload = { playerId: player.id, challengeId: daily.challengeId, won: true, firstTry: nextAttempts.length === 1, attemptsUsed: nextAttempts.length };
      const r = await fetch("/api/daily", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const saved = await r.json();
      setSavedEntry({ won: true, firstTry: payload.firstTry, attemptsUsed: payload.attemptsUsed, streak: saved.streak ?? 1 });
    } else {
      setShakeIdx(nextAttempts.length - 1);
      setTimeout(() => setShakeIdx(null), 600);
      if (nextAttempts.length >= maxTries) {
        setPhase("lost"); setRevealed(true);
        speakRef.current("Better luck tomorrow!");
        await fetch("/api/daily", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ playerId: player.id, challengeId: daily.challengeId, won: false, firstTry: false, attemptsUsed: nextAttempts.length }) });
        setSavedEntry({ won: false, firstTry: false, attemptsUsed: nextAttempts.length, streak: 0 });
      } else {
        setCurrentAttempt(nextAttempts.length);
        setCurrentGuess(new Array(word.length).fill(null));
        setActiveIndex(0);
      }
    }
  }, [daily, player, phase, attempts]);

  const maxTries = daily ? (MAX_TRIES[daily.word.difficulty] ?? 4) : 4;

  return (
    <>
      <Navbar />
      {showModal && <PlayerModal onDone={(name, id) => { setPlayer({ name, id }); setShowModal(false); }} />}

      <main style={{ maxWidth: 620, margin: "0 auto", padding: "clamp(1.25rem,4vw,2.5rem) 1rem" }}>
        <header style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
            Daily Challenge · {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" })}
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,2.6rem)", color: "var(--text)" }}>Today's Word</h1>
          {player && <p style={{ color: "var(--text-2)", fontSize: "0.88rem", marginTop: "0.25rem" }}>Hello, <strong>{player.name}</strong></p>}
        </header>

        {phase === "loading" && (
          <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
            <span style={{ width: 30, height: 30, border: "3px solid var(--accent-dim)", borderTopColor: "var(--accent)", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
          </div>
        )}

        {daily && phase !== "loading" && (
          <div style={{ animation: "fade-up 0.3s ease" }}>
            <div style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "clamp(1.25rem,4vw,2rem)", boxShadow: "var(--shadow-md)", marginBottom: "1rem" }}>
              {/* Controls row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <button onClick={() => speakRef.current(daily.word.word)} aria-label="Listen to word"
                  style={{ display: "flex", alignItems: "center", gap: "7px", background: "var(--accent)", border: "none", borderRadius: "var(--radius-xl)", padding: "9px 20px", color: "white", fontFamily: "'Fredoka', cursive", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", boxShadow: "0 3px 12px rgba(240,98,146,0.28)" }}>
                  <Volume2 size={16} /> Listen
                </button>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <DiffBadge d={daily.word.difficulty} />
                  <TriesDots used={phase === "playing" ? currentAttempt : (savedEntry?.attemptsUsed ?? maxTries)} max={maxTries} />
                </div>
              </div>

              {/* Hint */}
              {daily.word.hint && (
                <p style={{ color: "var(--text-2)", fontSize: "0.875rem", fontStyle: "italic", marginBottom: "1.5rem", borderLeft: "3px solid var(--accent-dim)", paddingLeft: "0.75rem" }}>
                  {daily.word.hint}
                </p>
              )}

              {/* Past attempts */}
              {attempts.map((att, rowIdx) => (
                <div key={rowIdx} style={{ marginBottom: "10px", animation: rowIdx === shakeIdx ? "shake 0.5s ease" : undefined }}>
                  <SpellBoard
                    word={daily.word.word} guess={att} activeIndex={-1}
                    submitted={true} revealed={phase === "lost"} disabled={true}
                    onGuessChange={() => {}} onIndexChange={() => {}} onSubmit={() => {}}
                  />
                </div>
              ))}

              {/* Active input row */}
              {phase === "playing" && (
                <SpellBoard
                  word={daily.word.word} guess={currentGuess}
                  activeIndex={activeIndex} submitted={false} revealed={false} disabled={false}
                  onGuessChange={setCurrentGuess} onIndexChange={setActiveIndex} onSubmit={handleSubmit}
                />
              )}

              {/* Result state */}
              {(phase === "won" || phase === "lost") && (
                <div style={{ textAlign: "center", padding: "1.25rem 0 0.25rem", animation: "fade-up 0.3s ease" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "0.75rem" }}>
                    {phase === "won" ? <CheckCircle2 size={22} color="var(--sage)" /> : <XCircle size={22} color="#ef5350" />}
                    <h2 style={{ fontSize: "1.45rem", color: phase === "won" ? "var(--sage)" : "#ef5350" }}>
                      {phase === "won" ? "Nailed it!" : "Better tomorrow!"}
                    </h2>
                  </div>

                  {phase === "lost" && !revealed && (
                    <button onClick={() => setRevealed(true)} style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "transparent", border: "1.5px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "7px 16px", color: "var(--text-2)", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", marginBottom: "0.75rem" }}>
                      <Eye size={13} /> Show answer
                    </button>
                  )}

                  {phase === "lost" && revealed && (
                    <p style={{ color: "var(--text-2)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>
                      The word was{" "}
                      <strong style={{ fontFamily: "'Fredoka', cursive", fontSize: "1.15rem", color: "var(--text)" }}>{daily.word.word.toUpperCase()}</strong>
                    </p>
                  )}

                  {savedEntry && (
                    <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center", flexWrap: "wrap" }}>
                      {savedEntry.won && savedEntry.firstTry && <StatChip label="First try" icon={<CheckCircle2 size={12} />} color="var(--sage)" />}
                      {savedEntry.streak > 1 && <StatChip label={`${savedEntry.streak} day streak`} icon={<Flame size={12} />} color="var(--amber)" />}
                      <StatChip label={`${savedEntry.attemptsUsed} ${savedEntry.attemptsUsed === 1 ? "attempt" : "attempts"}`} color="var(--text-2)" />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Attempts info */}
            {phase === "playing" && (
              <div style={{ background: "var(--surface2)", border: "1.5px solid var(--border-2)", borderRadius: "var(--radius-md)", padding: "0.875rem 1.25rem", fontSize: "0.85rem", color: "var(--text-2)" }}>
                <strong>{maxTries - currentAttempt}</strong> {maxTries - currentAttempt === 1 ? "attempt" : "attempts"} remaining
                {currentAttempt >= 2 && daily.word.hint && <> · Hint: <em>{daily.word.hint}</em></>}
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}

function DiffBadge({ d }: { d: string }) {
  const map: Record<string, [string, string, string]> = {
    easy:   ["#f0fff4", "#2d9f6a", "#9bdfbc"],
    medium: ["#fffbeb", "#b45309", "#fcd34d"],
    hard:   ["#fff5f5", "#c53030", "#fca5a5"],
  };
  const [bg, color, border] = map[d] ?? map.medium;
  return <span style={{ background: bg, color, border: `1.5px solid ${border}`, borderRadius: "var(--radius-xl)", padding: "3px 11px", fontSize: "0.75rem", fontWeight: 700, textTransform: "capitalize" }}>{d}</span>;
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

function StatChip({ label, icon, color }: { label: string; icon?: React.ReactNode; color: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "var(--surface2)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "4px 11px", fontSize: "0.78rem", fontWeight: 700, color }}>
      {icon}{label}
    </span>
  );
}
