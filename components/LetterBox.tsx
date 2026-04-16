"use client";

interface LetterBoxProps {
  letter: string;
  guessed: string | null;   // what user typed at this position
  isActive: boolean;
  submitted: boolean;       // row was submitted (show correct/wrong colors)
  revealed: boolean;        // admin forced full reveal
}

export default function LetterBox({ letter, guessed, isActive, submitted, revealed }: LetterBoxProps) {
  const isCorrect = submitted && guessed?.toLowerCase() === letter.toLowerCase();
  const isWrong   = submitted && guessed !== null && guessed?.toLowerCase() !== letter.toLowerCase();

  // Show the letter if: user has typed it (live), submitted, or revealed
  const hasLetter = guessed !== null || revealed;
  const displayLetter = revealed ? letter : (guessed ?? "");

  return (
    <div
      aria-label={hasLetter ? displayLetter.toUpperCase() : "blank"}
      style={{
        width: "clamp(44px, 11vw, 58px)",
        height: "clamp(52px, 13vw, 68px)",
        border: `2.5px solid ${
          isWrong   ? "#ef5350" :
          isCorrect ? "var(--sage)" :
          isActive  ? "var(--accent)" :
          hasLetter && !submitted ? "#c8a8f0" :   // typed but not yet submitted
          "var(--border)"
        }`,
        borderRadius: "var(--radius-sm)",
        background:
          isWrong   ? "#fff5f5" :
          isCorrect ? "#f1fff3" :
          isActive  ? "rgba(240,98,146,0.06)" :
          hasLetter && !submitted ? "rgba(200,168,240,0.08)" :
          "var(--surface)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "clamp(1.4rem, 5vw, 1.9rem)",
        fontFamily: "'Fredoka', cursive",
        fontWeight: 600,
        color:
          isWrong   ? "#ef5350" :
          isCorrect ? "#388e3c" :
          "var(--text)",
        transition: "border-color 0.18s ease, background 0.18s ease, transform 0.15s ease",
        transform: isActive ? "translateY(-2px)" : "translateY(0)",
        boxShadow: isActive ? "0 4px 14px rgba(240,98,146,0.18)" : "var(--shadow-sm)",
        position: "relative",
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      {hasLetter && displayLetter ? (
        <span
          key={displayLetter} // re-trigger animation on change
          style={{ animation: "pop-in 0.18s cubic-bezier(0.175,0.885,0.32,1.275)" }}
        >
          {displayLetter.toUpperCase()}
        </span>
      ) : (
        /* underscore dash shown when empty */
        <span
          style={{
            position: "absolute",
            bottom: 10,
            width: "52%",
            height: 2.5,
            borderRadius: 2,
            background: isActive ? "var(--accent)" : "var(--border)",
            transition: "background 0.15s",
          }}
        />
      )}
    </div>
  );
}
