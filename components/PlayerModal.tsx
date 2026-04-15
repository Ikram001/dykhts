"use client";

import { useState } from "react";
import { User, ArrowRight } from "lucide-react";

interface Props {
  onDone: (name: string, id: number) => void;
}

export default function PlayerModal({ onDone }: Props) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const trimmed = name.trim();
    if (!trimmed || trimmed.length < 2) {
      setError("Name must be at least 2 characters.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }
      localStorage.setItem("playerId", String(data.id));
      localStorage.setItem("playerName", data.name);
      onDone(data.name, data.id);
    } catch {
      setError("Could not connect. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(46,26,14,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        animation: "fade-up 0.25s ease",
      }}
    >
      <div
        style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-lg)",
          padding: "clamp(1.5rem, 5vw, 2.5rem)",
          width: "100%",
          maxWidth: 400,
          boxShadow: "var(--shadow-lg)",
          border: "1.5px solid var(--border)",
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "rgba(240,98,146,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.25rem",
          }}
        >
          <User size={24} color="var(--accent)" />
        </div>

        <h2
          id="modal-title"
          style={{ fontSize: "1.6rem", color: "var(--text)", marginBottom: "0.35rem" }}
        >
          What's your name?
        </h2>
        <p style={{ color: "var(--text-2)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
          Your name will appear on the leaderboard.
        </p>

        <label htmlFor="player-name" style={{ display: "block", fontWeight: 700, fontSize: "0.85rem", color: "var(--text-2)", marginBottom: "6px" }}>
          Your name
        </label>
        <input
          id="player-name"
          autoFocus
          value={name}
          onChange={(e) => { setName(e.target.value); setError(""); }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          maxLength={24}
          placeholder="e.g. Marki"
          style={{
            width: "100%",
            padding: "12px 16px",
            border: `2px solid ${error ? "#ef5350" : "var(--border)"}`,
            borderRadius: "var(--radius-md)",
            fontSize: "1rem",
            background: "var(--surface2)",
            color: "var(--text)",
            transition: "border-color 0.15s",
            marginBottom: error ? "6px" : "1.25rem",
          }}
        />

        {error && (
          <p role="alert" style={{ color: "#ef5350", fontSize: "0.82rem", marginBottom: "1.25rem" }}>
            {error}
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          aria-busy={loading}
          style={{
            width: "100%",
            padding: "13px",
            background: loading ? "var(--accent-dim)" : "var(--accent)",
            border: "none",
            borderRadius: "var(--radius-md)",
            color: "white",
            fontFamily: "'Fredoka', cursive",
            fontSize: "1.1rem",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "opacity 0.15s",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? (
            <span style={{ width: 20, height: 20, border: "2.5px solid white", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
          ) : (
            <>Start Playing <ArrowRight size={18} /></>
          )}
        </button>
      </div>
    </div>
  );
}
