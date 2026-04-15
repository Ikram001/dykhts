import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Do You Know How To Spell?",
  description: "A cute spelling game. Listen, guess, and spell!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
