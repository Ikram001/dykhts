import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spelldle — Do You Know How To Spell?",
  description: "A daily spelling challenge. Listen to the word, spell it out, beat the leaderboard.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
