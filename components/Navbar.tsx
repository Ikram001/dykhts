"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CalendarDays, Gamepad2, Trophy, X, Menu } from "lucide-react";

const links = [
  { href: "/",             label: "Daily",    Icon: CalendarDays },
  { href: "/practice",    label: "Practice", Icon: Gamepad2 },
  { href: "/leaderboard", label: "Scores",   Icon: Trophy },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(19,19,19,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 52 }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Image src="/logo.png" alt="Spelldle" width={30} height={30} style={{ objectFit: "contain" }} priority />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "var(--text)", letterSpacing: "-0.02em" }}>
              Spelldle
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", gap: "2px" }} className="desktop-nav">
            {links.map(({ href, label, Icon }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} aria-current={active ? "page" : undefined}
                  style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 12px", borderRadius: "var(--radius-md)", fontSize: "0.82rem", fontWeight: 500, color: active ? "var(--primary)" : "var(--text-2)", background: active ? "var(--primary-dim)" : "transparent", transition: "all 0.15s ease" }}>
                  <Icon size={13} strokeWidth={active ? 2.5 : 2} />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="hamburger-btn"
            style={{ display: "none", alignItems: "center", justifyContent: "center", width: 36, height: 36, background: "transparent", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-2)", cursor: "pointer" }}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 48, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(2px)" }}
        />
      )}

      {/* Mobile drawer */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed", top: 52, right: 0, bottom: 0, zIndex: 49,
          width: "min(280px, 80vw)",
          background: "var(--surface)",
          borderLeft: "1px solid var(--border)",
          padding: "1.5rem 1rem",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.22s cubic-bezier(0.4,0,0.2,1)",
          display: "flex", flexDirection: "column", gap: "4px",
        }}
        className="mobile-drawer"
      >
        {links.map(({ href, label, Icon }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href}
              style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", borderRadius: "var(--radius-md)", color: active ? "var(--primary)" : "var(--text-2)", background: active ? "var(--primary-dim)" : "transparent", fontWeight: active ? 600 : 500, fontSize: "0.95rem", transition: "all 0.15s" }}>
              <Icon size={16} strokeWidth={active ? 2.5 : 2} />
              {label}
            </Link>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 520px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
