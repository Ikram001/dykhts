"use client";

import { useState, useEffect } from "react";
import { Trophy, CalendarDays, Gamepad2, Flame, CheckCircle2, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

interface DailyRow { rank: number; playerName: string; won: boolean; firstTry: boolean; attemptsUsed: number; streak: number; }
interface ArcadeRow { rank: number; playerName: string; points: number; }

export default function LeaderboardPage() {
  const [tab, setTab]       = useState<"daily" | "arcade">("daily");
  const [daily, setDaily]   = useState<DailyRow[]>([]);
  const [arcade, setArcade] = useState<ArcadeRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [myName, setMyName]   = useState<string | null>(null);

  useEffect(() => { setMyName(localStorage.getItem("playerName")); }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const [d, a] = await Promise.all([
        fetch("/api/daily-leaderboard").then(r => r.json()),
        fetch("/api/scores").then(r => r.json()),
      ]);
      setDaily(Array.isArray(d) ? d : []);
      setArcade(Array.isArray(a) ? a : []);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 560, margin: "0 auto", padding: "clamp(1.5rem,5vw,3rem) 1rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Rankings</p>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", color: "var(--text)", fontWeight: 600 }}>Leaderboard</h1>
          <p style={{ color: "var(--text-3)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
            {tab === "daily" ? new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "All-time practice scores"}
          </p>
        </header>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "4px", background: "var(--surface-lowest)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "3px", marginBottom: "1.5rem" }}>
          {([{ key: "daily", label: "Daily", Icon: CalendarDays }, { key: "arcade", label: "Practice", Icon: Gamepad2 }] as const).map(({ key, label, Icon }) => (
            <button key={key} onClick={() => setTab(key)}
              style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "8px", border: "none", borderRadius: "calc(var(--radius-md) - 2px)", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", cursor: "pointer", transition: "all 0.15s",
                background: tab === key ? "var(--surface-high)" : "transparent",
                color: tab === key ? "var(--primary)" : "var(--text-3)" }}>
              <Icon size={13} /> {label}
            </button>
          ))}
        </div>

        {loading && (
          <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
            <span style={{ width: 24, height: 24, border: "2px solid var(--surface-high)", borderTopColor: "var(--primary)", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
          </div>
        )}

        {!loading && tab === "daily" && <DailyTable rows={daily} myName={myName} />}
        {!loading && tab === "arcade" && <ArcadeTable rows={arcade} myName={myName} />}
      </main>
    </>
  );
}

function DailyTable({ rows, myName }: { rows: DailyRow[]; myName: string | null }) {
  if (rows.length === 0) return <Empty message="No one has played today yet." />;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {rows.map(row => {
        const isMe = row.playerName === myName;
        return (
          <div key={row.rank} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: isMe ? "var(--primary-dim)" : "var(--surface)", border: `1px solid ${isMe ? "rgba(255,179,177,0.25)" : "var(--border)"}`, borderRadius: "var(--radius-md)", padding: "0.75rem 1rem" }}>
            <RankNum rank={row.rank} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {row.playerName}
                {isMe && <span style={{ color: "var(--primary)", marginLeft: 6, fontSize: "0.68rem", fontWeight: 600 }}>you</span>}
              </p>
              <div style={{ display: "flex", gap: "6px", marginTop: "2px", flexWrap: "wrap" }}>
                {row.won ? <MiniTag label="Solved" color="var(--success)" icon={<CheckCircle2 size={10} />} /> : <MiniTag label="Attempted" color="var(--text-3)" />}
                {row.firstTry && <MiniTag label="1st try" color="var(--secondary)" />}
                {row.streak > 1 && <MiniTag label={`${row.streak}d streak`} color="var(--secondary)" icon={<Flame size={10} />} />}
              </div>
            </div>
            <span style={{ fontSize: "0.72rem", color: "var(--text-3)", flexShrink: 0 }}>{row.attemptsUsed} {row.attemptsUsed === 1 ? "try" : "tries"}</span>
          </div>
        );
      })}
    </div>
  );
}

function ArcadeTable({ rows, myName }: { rows: ArcadeRow[]; myName: string | null }) {
  if (rows.length === 0) return <Empty message="No practice scores yet." />;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {rows.map(row => {
        const isMe = row.playerName === myName;
        return (
          <div key={row.rank} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: isMe ? "var(--primary-dim)" : "var(--surface)", border: `1px solid ${isMe ? "rgba(255,179,177,0.25)" : "var(--border)"}`, borderRadius: "var(--radius-md)", padding: "0.75rem 1rem" }}>
            <RankNum rank={row.rank} />
            <p style={{ flex: 1, fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {row.playerName}
              {isMe && <span style={{ color: "var(--primary)", marginLeft: 6, fontSize: "0.68rem", fontWeight: 600 }}>you</span>}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--secondary)", fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: "0.95rem" }}>
              <Star size={12} fill="var(--secondary)" stroke="var(--secondary)" />
              {row.points}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function RankNum({ rank }: { rank: number }) {
  const gold   = rank === 1 ? "#e7c187" : undefined;
  const silver = rank === 2 ? "#9a9a9a" : undefined;
  const bronze = rank === 3 ? "#a0705a" : undefined;
  const color  = gold ?? silver ?? bronze ?? "var(--text-3)";
  return (
    <span style={{ minWidth: 24, fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: "0.85rem", color, flexShrink: 0, textAlign: "center" }}>
      {rank}
    </span>
  );
}

function MiniTag({ label, color, icon }: { label: string; color: string; icon?: React.ReactNode }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "3px", fontSize: "0.68rem", fontWeight: 600, color, background: `${color}18`, borderRadius: 99, padding: "1px 7px" }}>
      {icon}{label}
    </span>
  );
}

function Empty({ message }: { message: string }) {
  return (
    <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <Trophy size={32} style={{ color: "var(--surface-high)", marginBottom: "0.75rem" }} />
      <p style={{ fontSize: "0.85rem", color: "var(--text-3)" }}>{message}</p>
    </div>
  );
}
