"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Trash2, Lock, ShieldCheck, AlertCircle, CalendarDays, Check } from "lucide-react";

interface Word { id: number; word: string; hint: string | null; difficulty: string; createdAt: string; }
type Difficulty = "easy" | "medium" | "hard";

export default function AdminPage() {
  const [authed, setAuthed]         = useState(false);
  const [adminToken, setAdminToken] = useState("");
  const [user, setUser]             = useState("");
  const [pass, setPass]             = useState("");
  const [loginError, setLoginError] = useState("");
  const [words, setWords]           = useState<Word[]>([]);
  const [loading, setLoading]       = useState(false);
  const [filterDiff, setFilterDiff] = useState<string>("all");

  // Add form
  const [newWord, setNewWord]       = useState("");
  const [newHint, setNewHint]       = useState("");
  const [newDiff, setNewDiff]       = useState<Difficulty>("hard");
  const [addError, setAddError]     = useState("");
  const [addSuccess, setAddSuccess] = useState("");
  const [adding, setAdding]         = useState(false);

  // Daily word picker
  const [todayWord, setTodayWord]     = useState<Word | null>(null);
  const [dailySearch, setDailySearch] = useState("");
  const [settingDaily, setSettingDaily] = useState(false);
  const [dailyMsg, setDailyMsg]       = useState("");

  const fetchWords = useCallback(async (token: string) => {
    setLoading(true);
    const res = await fetch("/api/words");
    const data = await res.json();
    setWords(Array.isArray(data) ? data : []);
    setLoading(false);

    // Fetch today's daily
    const dr = await fetch("/api/admin/daily", { headers: { "x-admin-token": token } });
    if (dr.ok) {
      const dd = await dr.json();
      setTodayWord(dd.challenge?.word ?? null);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate against env-based API
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    });
    if (res.ok) {
      const { token } = await res.json();
      setAdminToken(token);
      setAuthed(true);
      setLoginError("");
      fetchWords(token);
    } else {
      setLoginError("Invalid credentials.");
    }
  };

  useEffect(() => {
    if (authed && adminToken) fetchWords(adminToken);
  }, [authed, adminToken, fetchWords]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddError(""); setAddSuccess("");
    if (!newWord.trim()) { setAddError("Word is required."); return; }
    setAdding(true);
    const res = await fetch("/api/words", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word: newWord.trim(), hint: newHint.trim() || null, difficulty: newDiff }),
    });
    const data = await res.json();
    if (!res.ok) { setAddError(data.error || "Failed to add word."); }
    else { setAddSuccess(`"${data.word}" added!`); setNewWord(""); setNewHint(""); fetchWords(adminToken); }
    setAdding(false);
  };

  const handleDelete = async (id: number, word: string) => {
    if (!confirm(`Delete "${word}"?`)) return;
    await fetch(`/api/words/${id}`, { method: "DELETE" });
    fetchWords(adminToken);
  };

  const handleSetDaily = async (wordId: number) => {
    setSettingDaily(true); setDailyMsg("");
    const res = await fetch("/api/admin/daily", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-token": adminToken },
      body: JSON.stringify({ wordId }),
    });
    if (res.ok) {
      const data = await res.json();
      setTodayWord(data.challenge.word);
      setDailyMsg("Daily word set!");
    } else {
      setDailyMsg("Failed to set daily word.");
    }
    setSettingDaily(false);
    setTimeout(() => setDailyMsg(""), 3000);
  };

  const filtered = filterDiff === "all" ? words : words.filter(w => w.difficulty === filterDiff);
  const searchFiltered = dailySearch
    ? words.filter(w => w.word.toLowerCase().includes(dailySearch.toLowerCase()))
    : filtered;

  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", background: "var(--bg)" }}>
        <form onSubmit={handleLogin} style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "2.5rem", width: "100%", maxWidth: 380, boxShadow: "var(--shadow-md)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.75rem" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(26,58,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Lock size={18} color="var(--primary-container)" />
            </div>
            <div>
              <h1 style={{ fontSize: "1.3rem", color: "var(--text)" }}>Admin Access</h1>
              <p style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>Spelldle word manager</p>
            </div>
          </div>

          <label style={labelStyle}>Username</label>
          <input value={user} onChange={e => setUser(e.target.value)} placeholder="admin" style={inputStyle(false)} autoComplete="username" />

          <label style={{ ...labelStyle, marginTop: "0.875rem" }}>Password</label>
          <input type="password" value={pass} onChange={e => { setPass(e.target.value); setLoginError(""); }} placeholder="••••••••" style={inputStyle(!!loginError)} autoComplete="current-password" />

          {loginError && (
            <p role="alert" style={{ display: "flex", alignItems: "center", gap: "5px", color: "#ef5350", fontSize: "0.82rem", marginTop: "6px" }}>
              <AlertCircle size={13} /> {loginError}
            </p>
          )}

          <button type="submit" style={{ width: "100%", marginTop: "1.5rem", padding: "12px", background: "var(--primary-container)", border: "none", borderRadius: "var(--radius-md)", color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", fontWeight: 600, cursor: "pointer" }}>
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div style={{ background: "var(--surface)", borderBottom: "1.5px solid var(--border)", padding: "0 1.5rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <ShieldCheck size={18} color="var(--primary-container)" />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "var(--text)", fontSize: "1.05rem" }}>Admin Panel</span>
          </div>
          <button onClick={() => { setAuthed(false); setAdminToken(""); }} style={{ background: "transparent", border: "1.5px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "5px 14px", color: "var(--text-2)", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}>
            Sign out
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "clamp(1.25rem,4vw,2rem) 1rem" }}>

        {/* Daily word picker */}
        <div style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
            <CalendarDays size={18} color="var(--primary-container)" />
            <h2 style={{ fontSize: "1.1rem", color: "var(--text)" }}>Today's Daily Word</h2>
          </div>

          {todayWord ? (
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem", padding: "0.75rem 1rem", background: "rgba(26,58,110,0.05)", borderRadius: "var(--radius-md)", border: "1.5px solid rgba(26,58,110,0.15)" }}>
              <Check size={16} color="var(--primary-container)" />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "var(--primary-container)", fontWeight: 700 }}>{todayWord.word}</span>
              <DiffTag d={todayWord.difficulty} />
              {todayWord.hint && <span style={{ color: "var(--text-3)", fontSize: "0.82rem", fontStyle: "italic" }}>{todayWord.hint}</span>}
            </div>
          ) : (
            <div style={{ padding: "0.75rem 1rem", background: "rgba(231,193,135,0.08)", borderRadius: "var(--radius-md)", border: "1px solid rgba(231,193,135,0.3)", marginBottom: "1rem", fontSize: "0.85rem", color: "var(--secondary)" }}>
              No word set — a random hard word will be auto-selected when the first player visits today.
            </div>
          )}

          {dailyMsg && (
            <p style={{ color: dailyMsg.includes("Failed") ? "#ef5350" : "var(--sage)", fontSize: "0.85rem", marginBottom: "0.75rem", fontWeight: 700 }}>{dailyMsg}</p>
          )}

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <input
              value={dailySearch}
              onChange={e => setDailySearch(e.target.value)}
              placeholder="Search word to set as daily..."
              style={{ ...inputStyle(false), flex: 1 }}
            />
          </div>

          {dailySearch && (
            <div style={{ marginTop: "8px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden", maxHeight: 200, overflowY: "auto" }}>
              {words.filter(w => w.word.toLowerCase().includes(dailySearch.toLowerCase())).slice(0, 8).map(w => (
                <button key={w.id} onClick={() => { handleSetDaily(w.id); setDailySearch(""); }}
                  disabled={settingDaily}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "0.6rem 1rem", background: "var(--surface)", border: "none", borderBottom: "1px solid var(--border-2)", cursor: "pointer", textAlign: "left" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--surface2)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--surface)")}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "var(--text)" }}>{w.word}</span>
                  <DiffTag d={w.difficulty} />
                  {w.hint && <span style={{ color: "var(--text-3)", fontSize: "0.78rem" }}>{w.hint}</span>}
                </button>
              ))}
              {words.filter(w => w.word.toLowerCase().includes(dailySearch.toLowerCase())).length === 0 && (
                <p style={{ padding: "0.75rem 1rem", color: "var(--text-3)", fontSize: "0.85rem" }}>No words match.</p>
              )}
            </div>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "clamp(260px,35%,320px) 1fr", gap: "1.5rem", alignItems: "start" }}>
          {/* Add word panel */}
          <div>
            <form onSubmit={handleAdd} style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1.5rem", boxShadow: "var(--shadow-sm)" }}>
              <h2 style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: "1.25rem" }}>Add New Word</h2>

              <label style={labelStyle}>Word <span style={{ color: "#ef5350" }}>*</span></label>
              <input value={newWord} onChange={e => { setNewWord(e.target.value); setAddError(""); }} placeholder="e.g. conscientious" style={inputStyle(!!addError && !newWord)} />

              <label style={{ ...labelStyle, marginTop: "0.875rem" }}>Hint</label>
              <input value={newHint} onChange={e => setNewHint(e.target.value)} placeholder="Optional clue for players" style={inputStyle(false)} />

              <label style={{ ...labelStyle, marginTop: "0.875rem" }}>Difficulty</label>
              <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
                {(["easy", "medium", "hard"] as Difficulty[]).map(d => (
                  <button key={d} type="button" onClick={() => setNewDiff(d)}
                    style={{ flex: 1, padding: "7px 0", border: "1.5px solid", borderRadius: "var(--radius-md)", fontSize: "0.82rem", fontWeight: 700, cursor: "pointer", transition: "all 0.12s",
                      ...(newDiff === d ? { background: diffBg(d), borderColor: diffBorder(d), color: diffText(d) } : { background: "transparent", borderColor: "var(--border)", color: "var(--text-2)" }) }}>
                    {d}
                  </button>
                ))}
              </div>

              {addError && <p role="alert" style={{ color: "#ef5350", fontSize: "0.8rem", marginTop: "0.5rem" }}>{addError}</p>}
              {addSuccess && <p style={{ color: "var(--success)", fontSize: "0.8rem", marginTop: "0.5rem" }}>{addSuccess}</p>}

              <button type="submit" disabled={adding}
                style={{ width: "100%", marginTop: "1.25rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "11px", background: "var(--primary-container)", border: "none", borderRadius: "var(--radius-md)", color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600, cursor: "pointer", opacity: adding ? 0.7 : 1 }}>
                <Plus size={16} /> {adding ? "Adding..." : "Add Word"}
              </button>
            </form>

            <div style={{ marginTop: "1rem", background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1.25rem" }}>
              <h3 style={{ fontSize: "0.82rem", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>Word Bank</h3>
              {["easy", "medium", "hard"].map(d => (
                <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-2)", textTransform: "capitalize" }}>{d}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "var(--text)" }}>{words.filter(w => w.difficulty === d).length}</span>
                </div>
              ))}
              <div style={{ borderTop: "1.5px solid var(--border-2)", paddingTop: "6px", marginTop: "4px", display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-2)" }}>Total</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "var(--primary-container)" }}>{words.length}</span>
              </div>
            </div>
          </div>

          {/* Words list */}
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", color: "var(--text)" }}>All Words</h2>
              <div style={{ display: "flex", gap: "4px" }}>
                {["all", "easy", "medium", "hard"].map(d => (
                  <button key={d} onClick={() => setFilterDiff(d)}
                    style={{ padding: "5px 12px", border: "1.5px solid", borderRadius: "var(--radius-xl)", fontSize: "0.78rem", fontWeight: 700, cursor: "pointer", textTransform: "capitalize", transition: "all 0.12s",
                      ...(filterDiff === d ? { background: "var(--primary-container)", borderColor: "var(--primary-container)", color: "white" } : { background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-2)" }) }}>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
                <span style={{ width: 24, height: 24, border: "3px solid var(--accent-dim)", borderTopColor: "var(--accent)", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", maxHeight: "65vh", overflowY: "auto", paddingRight: "2px" }}>
                {filtered.length === 0 && <p style={{ color: "var(--text-3)", fontSize: "0.9rem", textAlign: "center", padding: "2rem" }}>No words yet.</p>}
                {filtered.map(w => (
                  <div key={w.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "0.6rem 0.875rem" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>{w.word}</span>
                        <DiffTag d={w.difficulty} />
                      </div>
                      {w.hint && <p style={{ fontSize: "0.75rem", color: "var(--text-3)", marginTop: "1px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{w.hint}</p>}
                    </div>
                    <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
                      <button onClick={() => handleSetDaily(w.id)} aria-label={`Set ${w.word} as daily`} title="Set as today's word"
                        style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-3)", cursor: "pointer", transition: "all 0.12s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--primary-container)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--primary-container)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--text-3)"; }}>
                        <CalendarDays size={13} />
                      </button>
                      <button onClick={() => handleDelete(w.id, w.word)} aria-label={`Delete ${w.word}`}
                        style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-3)", cursor: "pointer", transition: "all 0.12s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#ef5350"; (e.currentTarget as HTMLButtonElement).style.color = "#ef5350"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--text-3)"; }}>
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DiffTag({ d }: { d: string }) {
  return <span style={{ fontSize: "0.68rem", fontWeight: 700, background: diffBg(d), color: diffText(d), border: `1px solid ${diffBorder(d)}`, borderRadius: 99, padding: "1px 7px", textTransform: "capitalize" }}>{d}</span>;
}
const labelStyle: React.CSSProperties = { display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-2)", marginBottom: "4px" };
const inputStyle = (err: boolean): React.CSSProperties => ({ width: "100%", padding: "9px 13px", border: `1.5px solid ${err ? "#ef5350" : "var(--border)"}`, borderRadius: "var(--radius-md)", fontSize: "0.9rem", background: "var(--surface-high)", color: "var(--text)" });
function diffBg(d: string) { return d === "easy" ? "#f0fff4" : d === "medium" ? "#fffbeb" : "#fff5f5"; }
function diffText(d: string) { return d === "easy" ? "#2d9f6a" : d === "medium" ? "#b45309" : "#c53030"; }
function diffBorder(d: string) { return d === "easy" ? "#9bdfbc" : d === "medium" ? "#fcd34d" : "#fca5a5"; }
