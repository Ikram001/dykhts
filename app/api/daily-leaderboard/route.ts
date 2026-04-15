import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const date = new Date().toISOString().slice(0, 10);
  const challenge = await prisma.dailyChallenge.findUnique({ where: { date } });
  if (!challenge) return NextResponse.json([]);

  const entries = await prisma.dailyEntry.findMany({
    where: { challengeId: challenge.id },
    include: { player: true },
    orderBy: [
      { won: "desc" },
      { firstTry: "desc" },
      { attemptsUsed: "asc" },
      { createdAt: "asc" },
    ],
  });

  const result = entries.map((e, i) => ({
    rank: i + 1,
    playerName: e.player.name,
    won: e.won,
    firstTry: e.firstTry,
    attemptsUsed: e.attemptsUsed,
    streak: e.streak,
  }));

  return NextResponse.json(result);
}
