"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Props { onDone: (name: string, id: number) => void; }

export default function PlayerModal({ onDone }: Props) {
  const [name, setName]       = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const handleSubmit = async () => {
    const trimmed = name.trim();
    if (!trimmed || trimmed.length < 2) { setError("Name must be at least 2 characters."); return; }
    setLoading(true); setError("");
    try {
      const res  = await fetch("/api/players", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: trimmed }) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Something went wrong."); return; }
      localStorage.setItem("playerId", String(data.id));
      localStorage.setItem("playerName", data.name);
      onDone(data.name, data.id);
    } catch { setError("Could not connect. Try again."); }
    finally { setLoading(false); }
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="modal-title" style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(0,0,0,0.75)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "1rem", animation: "fade-up 0.2s ease",
    }}>
      <div style={{
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)", padding: "clamp(1.5rem,5vw,2.25rem)",
        width: "100%", maxWidth: 380, boxShadow: "var(--shadow-lg)",
      }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
          Welcome to Spelldle
        </p>
        <h2 id="modal-title" style={{ fontSize: "1.5rem", color: "var(--text)", marginBottom: "0.35rem" }}>
          What's your name?
        </h2>
        <p style={{ color: "var(--text-2)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
          Your name will appear on the leaderboard.
        </p>

        <label htmlFor="player-name" style={labelStyle}>Your name</label>
        <input
          id="player-name" autoFocus value={name} maxLength={24}
          onChange={e => { setName(e.target.value); setError(""); }}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
          placeholder="e.g. Marki"
          style={inputStyle(!!error)}
        />
        {error && <p role="alert" style={{ color: "var(--error)", fontSize: "0.8rem", marginTop: "6px", marginBottom: "0.5rem" }}>{error}</p>}

        <button onClick={handleSubmit} disabled={loading} aria-busy={loading}
          style={{ width: "100%", marginTop: "1.25rem", padding: "12px", background: "var(--primary-container)", border: "none", borderRadius: "var(--radius-md)", color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", opacity: loading ? 0.6 : 1, transition: "opacity 0.15s" }}>
          {loading
            ? <span style={{ width: 18, height: 18, border: "2px solid white", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
            : <> Start Playing <ArrowRight size={16} /></>}
        </button>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = { display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-2)", marginBottom: "6px" };
const inputStyle = (err: boolean): React.CSSProperties => ({
  width: "100%", padding: "10px 14px",
  border: `1px solid ${err ? "var(--error)" : "var(--border)"}`,
  borderRadius: "var(--radius-md)", fontSize: "0.95rem",
  background: "var(--surface-high)", color: "var(--text)",
  transition: "border-color 0.15s",
});
