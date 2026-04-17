"use client";

import { useEffect, useRef, useCallback } from "react";
import LetterBox from "./LetterBox";

interface Props {
  word: string;
  guess: (string | null)[];
  activeIndex: number;
  submitted: boolean;
  revealed: boolean;
  disabled: boolean;
  onGuessChange: (next: (string | null)[]) => void;
  onIndexChange: (i: number) => void;
  onSubmit: (guess: (string | null)[]) => void;
}

export default function SpellBoard({ word, guess, activeIndex, submitted, revealed, disabled, onGuessChange, onIndexChange, onSubmit }: Props) {
  const hiddenRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!submitted && !disabled) hiddenRef.current?.focus();
  }, [submitted, disabled, activeIndex]);

  const handleKey = useCallback((e: React.KeyboardEvent) => {
    if (submitted || disabled) return;
    const key = e.key.toLowerCase();

    if (key === "backspace") {
      e.preventDefault();
      const idx = guess[activeIndex] !== null ? activeIndex : Math.max(0, activeIndex - 1);
      const next = [...guess]; next[idx] = null;
      onGuessChange(next); onIndexChange(idx);
      return;
    }
    if (key === "enter") {
      if (guess.every(g => g !== null)) onSubmit(guess);
      return;
    }
    if (!/^[a-z]$/.test(key)) return;
    e.preventDefault();

    const next = [...guess]; next[activeIndex] = key;
    onGuessChange(next);

    if (activeIndex < word.length - 1) onIndexChange(activeIndex + 1);
    else onSubmit(next);
  }, [submitted, disabled, guess, activeIndex, word.length, onGuessChange, onIndexChange, onSubmit]);

  return (
    <div>
      <input ref={hiddenRef} onKeyDown={handleKey} readOnly aria-hidden="true" tabIndex={-1}
        style={{ opacity: 0, position: "absolute", pointerEvents: "none", width: 1, height: 1 }} />

      <div role="group" aria-label="Spelling input"
        style={{ display: "flex", flexWrap: "wrap", gap: "clamp(5px,1.5vw,8px)", justifyContent: "center" }}
        onClick={() => hiddenRef.current?.focus()}>
        {word.split("").map((letter, i) => (
          <LetterBox key={i} letter={letter} guessed={guess[i]}
            isActive={i === activeIndex && !submitted && !disabled}
            submitted={submitted} revealed={revealed} />
        ))}
      </div>

      {!submitted && !disabled && (
        <p style={{ textAlign: "center", marginTop: "0.875rem", color: "var(--text-3)", fontSize: "0.75rem", letterSpacing: "0.02em" }}>
          Type · Backspace to delete · Enter to submit
        </p>
      )}
    </div>
  );
}
