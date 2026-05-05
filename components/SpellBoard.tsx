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

export default function SpellBoard({
  word, guess, activeIndex, submitted, revealed, disabled,
  onGuessChange, onIndexChange, onSubmit,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input whenever the row becomes active
  useEffect(() => {
    if (!submitted && !disabled) {
      // Small delay so DOM is settled, especially on mobile after state updates
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [submitted, disabled, activeIndex]);

  // Handle physical keyboard (desktop)
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
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
      e.preventDefault();
      if (guess.every(g => g !== null)) onSubmit(guess);
      return;
    }
  }, [submitted, disabled, guess, activeIndex, onGuessChange, onIndexChange, onSubmit]);

  // Handle mobile soft keyboard input via onChange
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (submitted || disabled) return;

    const raw = e.target.value;
    // The input is always kept empty — we only care about the last character typed
    if (!raw) return;

    const char = raw.slice(-1).toLowerCase();

    // Clear the input so it's always ready for the next character
    e.target.value = "";

    if (!/^[a-z]$/.test(char)) return;

    const next = [...guess]; next[activeIndex] = char;
    onGuessChange(next);

    if (activeIndex < word.length - 1) {
      onIndexChange(activeIndex + 1);
    } else {
      onSubmit(next);
    }
  }, [submitted, disabled, guess, activeIndex, word.length, onGuessChange, onIndexChange, onSubmit]);

  return (
    <div style={{ position: "relative" }}>
      {/*
        The input sits invisibly over the letter boxes.
        It must NOT be display:none, opacity:0, or readOnly —
        mobile browsers require a real, tappable, writable input to show the keyboard.
        We make it visually invisible by sizing/positioning it over the boxes
        with a transparent background and no border.
      */}
      <input
        ref={inputRef}
        type="text"
        inputMode="text"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        aria-label="Type your spelling"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        disabled={submitted || disabled}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
          cursor: "default",
          zIndex: 2,
          fontSize: "16px", // prevents iOS auto-zoom on focus
          background: "transparent",
          border: "none",
          outline: "none",
          caretColor: "transparent",
        }}
      />

      {/* Letter boxes */}
      <div
        role="group"
        aria-label="Spelling input"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(5px,1.5vw,8px)",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {word.split("").map((letter, i) => (
          <LetterBox
            key={i}
            letter={letter}
            guessed={guess[i]}
            isActive={i === activeIndex && !submitted && !disabled}
            submitted={submitted}
            revealed={revealed}
          />
        ))}
      </div>

      {!submitted && !disabled && (
        <p style={{
          textAlign: "center", marginTop: "0.875rem",
          color: "var(--text-3)", fontSize: "0.75rem", letterSpacing: "0.02em",
        }}>
          Tap the letters then type · Backspace to delete
        </p>
      )}
    </div>
  );
}
