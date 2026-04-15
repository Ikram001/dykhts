"use client";

import { useState, useEffect } from "react";
import { Trophy, CalendarDays, Gamepad2, Flame, CheckCircle2, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

interface DailyRow { rank: number; playerName: string; won: boolean; firstTry: boolean; attemptsUsed: number; streak: number; }
interface ArcadeRow { rank: number; playerName: string; points: number; }

export default function LeaderboardPage() {
  const [tab, setTab] = useState<"daily" | "arcade">("daily");
  const [daily, setDaily] = useState<DailyRow[]>([]);
  const [arcade, setArcade] = useState<ArcadeRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const [d, a] = await Promise.all([
        fetch("/api/daily-leaderboard").then(r => r.json()),
        fetch("/api/scores").then(r => r.json()),
      ]);
      setDaily(Array.isArray(d) ? d : []);
      setArcade(Array.isArray(a) ? a : []);
      setLoading(false);
    };
    fetchAll();
  }, []);

  const myName = typeof window !== "undefined" ? localStorage.getItem("playerName") : null;

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 620, margin: "0 auto", padding: "clamp(1.25rem,4vw,2.5rem) 1rem" }}>
        <header style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,179,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}>
            <Trophy size={24} color="var(--amber)" />
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,2.6rem)", color: "var(--text)" }}>Leaderboard</h1>
          <p style={{ color: "var(--text-2)", fontSize: "0.88rem", marginTop: "0.25rem" }}>
            {tab === "daily"
              ? `Today · ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" })}`
              : "All time · Practice scores"}
          </p>
        </header>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "6px", background: "var(--surface2)", border: "1.5px solid var(--border-2)", borderRadius: "var(--radius-xl)", padding: "4px", marginBottom: "1.5rem" }}>
          {([
            { key: "daily", label: "Daily", Icon: CalendarDays },
            { key: "arcade", label: "Practice", Icon: Gamepad2 },
          ] as const).map(({ key, label, Icon }) => (
            <button key={key} onClick={() => setTab(key)}
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                padding: "9px", border: "none", borderRadius: "var(--radius-lg)",
                fontFamily: "'Fredoka', cursive", fontSize: "0.95rem", fontWeight: 600, cursor: "pointer",
                transition: "all 0.15s ease",
                ...(tab === key
                  ? { background: "var(--surface)", color: "var(--accent)", boxShadow: "var(--shadow-sm)" }
                  : { background: "transparent", color: "var(--text-2)" }),
              }}>
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>

        {loading && (
          <div style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
            <span style={{ width: 28, height: 28, border: "3px solid var(--accent-dim)", borderTopColor: "var(--accent)", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
          </div>
        )}

        {!loading && tab === "daily" && (
          <DailyTable rows={daily} myName={myName} />
        )}
        {!loading && tab === "arcade" && (
          <ArcadeTable rows={arcade} myName={myName} />
        )}
      </main>
    </>
  );
}

function DailyTable({ rows, myName }: { rows: DailyRow[]; myName: string | null }) {
  if (rows.length === 0) return <Empty message="No one has played today yet. Be the first!" />;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {rows.map((row) => {
        const isMe = row.playerName === myName;
        return (
          <div key={row.rank} style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            background: isMe ? "rgba(240,98,146,0.06)" : "var(--surface)",
            border: `1.5px solid ${isMe ? "var(--accent-dim)" : "var(--border)"}`,
            borderRadius: "var(--radius-md)", padding: "0.875rem 1.125rem",
            animation: "fade-up 0.3s ease",
          }}>
            <RankBadge rank={row.rank} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {row.playerName}{isMe && <span style={{ color: "var(--accent)", marginLeft: 6, fontSize: "0.75rem" }}>you</span>}
              </p>
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "3px", flexWrap: "wrap" }}>
                {row.won
                  ? <Tag label="Solved" color="var(--sage)" icon={<CheckCircle2 size={11} />} />
                  : <Tag label="Attempted" color="var(--text-3)" />}
                {row.firstTry && <Tag label="1st try" color="var(--teal)" />}
                {row.streak > 1 && <Tag label={`${row.streak}d streak`} color="var(--amber)" icon={<Flame size={11} />} />}
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>{row.attemptsUsed} {row.attemptsUsed === 1 ? "try" : "tries"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ArcadeTable({ rows, myName }: { rows: ArcadeRow[]; myName: string | null }) {
  if (rows.length === 0) return <Empty message="No practice scores yet. Go earn some!" />;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {rows.map((row) => {
        const isMe = row.playerName === myName;
        return (
          <div key={row.rank} style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            background: isMe ? "rgba(240,98,146,0.06)" : "var(--surface)",
            border: `1.5px solid ${isMe ? "var(--accent-dim)" : "var(--border)"}`,
            borderRadius: "var(--radius-md)", padding: "0.875rem 1.125rem",
          }}>
            <RankBadge rank={row.rank} />
            <p style={{ flex: 1, fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {row.playerName}{isMe && <span style={{ color: "var(--accent)", marginLeft: 6, fontSize: "0.75rem" }}>you</span>}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "var(--amber)", fontFamily: "'Fredoka', cursive", fontWeight: 700, fontSize: "1.05rem" }}>
              <Star size={14} fill="var(--amber)" stroke="var(--amber)" />
              {row.points}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function RankBadge({ rank }: { rank: number }) {
  const colors: Record<number, [string, string]> = {
    1: ["#ffd700", "#7a5700"],
    2: ["#c0c0c0", "#5a5a5a"],
    3: ["#cd7f32", "#5a3010"],
  };
  const [bg, color] = colors[rank] ?? ["var(--surface2)", "var(--text-3)"];
  return (
    <span style={{ minWidth: 30, height: 30, borderRadius: "50%", background: bg, color, fontFamily: "'Fredoka', cursive", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      {rank}
    </span>
  );
}

function Tag({ label, color, icon }: { label: string; color: string; icon?: React.ReactNode }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "3px", fontSize: "0.72rem", fontWeight: 700, color, background: `${color}18`, borderRadius: 99, padding: "2px 8px" }}>
      {icon}{label}
    </span>
  );
}

function Empty({ message }: { message: string }) {
  return (
    <div style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--text-3)" }}>
      <Trophy size={36} style={{ opacity: 0.25, marginBottom: "0.75rem" }} />
      <p style={{ fontSize: "0.9rem" }}>{message}</p>
    </div>
  );
}
