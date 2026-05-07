"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Volume2, Flame, CheckCircle2, XCircle, Eye, Trophy, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import PlayerModal from "@/components/PlayerModal";
import SpellBoard from "@/components/SpellBoard";

const MAX_TRIES: Record<string, number> = { easy: 5, medium: 4, hard: 3 };

interface WordData { word: string; hint: string | null; difficulty: string; length: number; }
interface DailyData {
  challengeId: number; date: string; word: WordData;
  entry: { won: boolean; firstTry: boolean; attemptsUsed: number; streak: number } | null;
}
type Phase = "loading" | "playing" | "won" | "lost";

export default function DailyPage() {
  const [player, setPlayer]         = useState<{ name: string; id: number } | null>(null);
  const [showModal, setShowModal]   = useState(false);
  const [daily, setDaily]           = useState<DailyData | null>(null);
  const [phase, setPhase]           = useState<Phase>("loading");
  const [attempts, setAttempts]     = useState<(string | null)[][]>([]);
  const [currentGuess, setCurrentGuess] = useState<(string | null)[]>([]);
  const [activeIndex, setActiveIndex]   = useState(0);
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [shakeIdx, setShakeIdx]     = useState<number | null>(null);
  const [revealed, setRevealed]     = useState(false);
  const [savedEntry, setSavedEntry] = useState<DailyData["entry"]>(null);
  const speakRef = useRef<(w: string) => void>(() => {});

  speakRef.current = (word: string) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.rate = 0.78; u.pitch = 1.0;
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
      // NO auto-play — user clicks Listen
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
      const payload = { playerId: player.id, challengeId: daily.challengeId, won: true, firstTry: nextAttempts.length === 1, attemptsUsed: nextAttempts.length };
      const r = await fetch("/api/daily", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const saved = await r.json();
      setSavedEntry({ won: true, firstTry: payload.firstTry, attemptsUsed: payload.attemptsUsed, streak: saved.streak ?? 1 });
    } else {
      setShakeIdx(nextAttempts.length - 1);
      setTimeout(() => setShakeIdx(null), 600);
      if (nextAttempts.length >= maxTries) {
        setPhase("lost"); setRevealed(true);
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

      <main style={{ maxWidth: 560, margin: "0 auto", padding: "clamp(1.5rem,5vw,3rem) 1rem" }}>
        {/* Header */}
        <header style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </p>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", color: "var(--text)", fontWeight: 600 }}>Daily Challenge</h1>
          {player && (
            <p style={{ color: "var(--text-3)", fontSize: "0.82rem", marginTop: "0.25rem" }}>
              Playing as <span style={{ color: "var(--secondary)" }}>{player.name}</span>
            </p>
          )}
        </header>

        {phase === "loading" && (
          <div style={{ display: "flex", justifyContent: "center", padding: "5rem" }}>
            <span style={{ width: 24, height: 24, border: "2px solid var(--surface-high)", borderTopColor: "var(--primary)", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
          </div>
        )}

        {daily && phase !== "loading" && (
          <div style={{ animation: "fade-up 0.25s ease" }}>
            {/* Game card */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "clamp(1.25rem,4vw,1.75rem)", marginBottom: "0.75rem" }}>

              {/* Top bar */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <button onClick={() => speakRef.current(daily.word.word)} aria-label="Listen to word"
                  style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--primary-container)", border: "none", borderRadius: "var(--radius-md)", padding: "8px 18px", color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" }}>
                  <Volume2 size={14} /> Listen
                </button>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>{daily.word.length} letters</span>
                  <TriesDots used={phase === "playing" ? currentAttempt : (savedEntry?.attemptsUsed ?? maxTries)} max={maxTries} />
                </div>
              </div>

              {/* Hint shown after first wrong attempt */}
              {daily.word.hint && phase === "playing" && currentAttempt >= 1 && (
                <p style={{ color: "var(--text-3)", fontSize: "0.8rem", marginBottom: "1.25rem", borderLeft: "2px solid var(--surface-high)", paddingLeft: "0.75rem", fontStyle: "italic" }}>
                  {daily.word.hint}
                </p>
              )}

              {/* Past attempt rows */}
              {attempts.map((att, rowIdx) => (
                <div key={rowIdx} style={{ marginBottom: "8px", animation: rowIdx === shakeIdx ? "shake 0.5s ease" : undefined }}>
                  <SpellBoard word={daily.word.word} guess={att} activeIndex={-1}
                    submitted={true} revealed={phase === "lost"} disabled={true}
                    onGuessChange={() => {}} onIndexChange={() => {}} onSubmit={() => {}} />
                </div>
              ))}

              {/* Active input */}
              {phase === "playing" && (
                <SpellBoard word={daily.word.word} guess={currentGuess}
                  activeIndex={activeIndex} submitted={false} revealed={false} disabled={false}
                  onGuessChange={setCurrentGuess} onIndexChange={setActiveIndex} onSubmit={handleSubmit} />
              )}

              {/* Result */}
              {(phase === "won" || phase === "lost") && (
                <div style={{ textAlign: "center", paddingTop: "1.25rem", animation: "fade-up 0.25s ease" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "0.75rem" }}>
                    {phase === "won"
                      ? <CheckCircle2 size={20} color="var(--success)" />
                      : <XCircle size={20} color="var(--error)" />}
                    <h2 style={{ fontSize: "1.3rem", color: phase === "won" ? "var(--success)" : "var(--error)", fontWeight: 600 }}>
                      {phase === "won" ? "Correct" : "Better tomorrow"}
                    </h2>
                  </div>

                  {phase === "lost" && !revealed && (
                    <button onClick={() => setRevealed(true)}
                      style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "transparent", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "6px 14px", color: "var(--text-2)", fontSize: "0.8rem", fontWeight: 500, cursor: "pointer", marginBottom: "0.75rem" }}>
                      <Eye size={12} /> Show answer
                    </button>
                  )}

                  {phase === "lost" && revealed && (
                    <p style={{ color: "var(--text-2)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
                      The word was{" "}
                      <span style={{ fontFamily: "'DM Mono', monospace", color: "var(--text)", fontWeight: 500 }}>{daily.word.word.toUpperCase()}</span>
                    </p>
                  )}

                  {savedEntry && (
                    <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "0.25rem", marginBottom: "1.25rem" }}>
                      {savedEntry.won && savedEntry.firstTry && <Chip label="First try" icon={<CheckCircle2 size={11} />} color="var(--success)" />}
                      {savedEntry.streak > 1 && <Chip label={`${savedEntry.streak} day streak`} icon={<Flame size={11} />} color="var(--secondary)" />}
                      <Chip label={`${savedEntry.attemptsUsed} ${savedEntry.attemptsUsed === 1 ? "attempt" : "attempts"}`} color="var(--text-3)" />
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="/leaderboard"
                      style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--primary-container)", border: "none", borderRadius: "var(--radius-md)", padding: "10px 20px", color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", textDecoration: "none" }}>
                      <Trophy size={14} /> View Leaderboard
                    </a>
                    <a href="/practice"
                      style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "transparent", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "10px 20px", color: "var(--text-2)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", textDecoration: "none" }}>
                      <Gamepad2 size={14} /> Practice More
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Remaining attempts bar */}
            {phase === "playing" && (
              <div style={{ padding: "0.625rem 1rem", fontSize: "0.78rem", color: "var(--text-3)" }}>
                <span>{maxTries - currentAttempt} {maxTries - currentAttempt === 1 ? "attempt" : "attempts"} left</span>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}

function TriesDots({ used, max }: { used: number; max: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }} aria-label={`${used} of ${max} tries used`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i < used ? "var(--primary)" : "var(--surface-high)", display: "inline-block", transition: "background 0.2s" }} />
      ))}
    </div>
  );
}

function Chip({ label, icon, color }: { label: string; icon?: React.ReactNode; color: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", background: `${color}18`, border: `1px solid ${color}30`, borderRadius: "var(--radius-xl)", padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600, color }}>
      {icon}{label}
    </span>
  );
}
