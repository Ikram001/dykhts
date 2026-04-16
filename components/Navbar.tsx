"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CalendarDays, Gamepad2, Trophy } from "lucide-react";

const links = [
  { href: "/",             label: "Daily",    Icon: CalendarDays },
  { href: "/practice",    label: "Practice", Icon: Gamepad2 },
  { href: "/leaderboard", label: "Scores",   Icon: Trophy },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(253,244,238,0.9)",
        backdropFilter: "blur(14px)",
        borderBottom: "1.5px solid var(--border)",
        padding: "0 1.25rem",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <Image src="/logo.png" alt="Spelldle logo" width={32} height={32} style={{ objectFit: "contain" }} priority />
          <span style={{
            fontFamily: "'Fredoka', cursive",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#1a3a6e",
            letterSpacing: "-0.01em",
          }}>
            Spelldle
          </span>
        </Link>

        {/* Nav links */}
        <div style={{ display: "flex", gap: "4px" }}>
          {links.map(({ href, label, Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "6px 12px",
                  borderRadius: "var(--radius-xl)",
                  fontSize: "0.85rem",
                  fontWeight: active ? 700 : 600,
                  color: active ? "var(--accent)" : "var(--text-2)",
                  background: active ? "rgba(240,98,146,0.1)" : "transparent",
                  transition: "all 0.15s ease",
                  textDecoration: "none",
                }}
              >
                <Icon size={14} strokeWidth={active ? 2.5 : 2} />
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
