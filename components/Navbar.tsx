"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Gamepad2, Trophy } from "lucide-react";

const links = [
  { href: "/",           label: "Daily",     Icon: CalendarDays },
  { href: "/practice",  label: "Practice",  Icon: Gamepad2 },
  { href: "/leaderboard", label: "Scores",  Icon: Trophy },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(253,244,238,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1.5px solid var(--border)",
        padding: "0 1.5rem",
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
        <Link
          href="/"
          style={{
            fontFamily: "'Fredoka', cursive",
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "var(--accent)",
            letterSpacing: "-0.01em",
          }}
        >
          spell<span style={{ color: "var(--text-2)" }}>.it</span>
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
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-xl)",
                  fontSize: "0.875rem",
                  fontWeight: active ? 700 : 600,
                  color: active ? "var(--accent)" : "var(--text-2)",
                  background: active ? "rgba(240,98,146,0.1)" : "transparent",
                  transition: "all 0.15s ease",
                }}
              >
                <Icon size={15} strokeWidth={active ? 2.5 : 2} />
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
