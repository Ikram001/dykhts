"use client";

interface Props {
  letter: string;
  guessed: string | null;
  isActive: boolean;
  submitted: boolean;
  revealed: boolean;
}

export default function LetterBox({ letter, guessed, isActive, submitted, revealed }: Props) {
  const isCorrect    = submitted && guessed?.toLowerCase() === letter.toLowerCase();
  const isWrong      = submitted && guessed !== null && guessed?.toLowerCase() !== letter.toLowerCase();
  const hasLetter    = guessed !== null || revealed;
  const displayChar  = revealed ? letter : (guessed ?? "");

  let borderColor = "var(--border)";
  if (isWrong)            borderColor = "var(--error)";
  else if (isCorrect)     borderColor = "var(--success)";
  else if (isActive)      borderColor = "var(--primary)";
  else if (hasLetter && !submitted) borderColor = "var(--surface-high)";

  let bg = "var(--surface)";
  if (isWrong)            bg = "var(--error-dim)";
  else if (isCorrect)     bg = "var(--success-dim)";
  else if (isActive)      bg = "var(--primary-dim)";

  let textColor = "var(--text)";
  if (isWrong)    textColor = "var(--error)";
  if (isCorrect)  textColor = "var(--success)";

  return (
    <div
      aria-label={hasLetter ? displayChar.toUpperCase() : "blank"}
      style={{
        width: "clamp(42px, 10vw, 54px)",
        height: "clamp(50px, 12vw, 62px)",
        border: `1.5px solid ${borderColor}`,
        borderRadius: "var(--radius-sm)",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "clamp(1.2rem, 4.5vw, 1.65rem)",
        fontFamily: "'DM Mono', monospace",
        fontWeight: 500,
        color: textColor,
        transition: "border-color 0.15s, background 0.15s, transform 0.12s",
        transform: isActive ? "translateY(-1px)" : "translateY(0)",
        position: "relative",
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      {hasLetter && displayChar ? (
        <span key={displayChar} style={{ animation: "pop-in 0.16s ease" }}>
          {displayChar.toUpperCase()}
        </span>
      ) : (
        <span style={{
          position: "absolute",
          bottom: 9,
          width: "48%",
          height: 1.5,
          borderRadius: 1,
          background: isActive ? "var(--primary)" : "var(--surface-high)",
          transition: "background 0.15s",
        }} />
      )}
    </div>
  );
}
