import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const playerId = parseInt(searchParams.get("playerId") || "");

  const date = todayStr();

  let challenge = await prisma.dailyChallenge.findUnique({
    where: { date },
    include: { word: true },
  });

  if (!challenge) {
    // Auto-pick: prefer hard words
    const hardCount = await prisma.word.count({ where: { difficulty: "hard" } });
    let word = null;
    if (hardCount > 0) {
      const skip = Math.floor(Math.random() * hardCount);
      word = await prisma.word.findFirst({ where: { difficulty: "hard" }, skip });
    } else {
      const count = await prisma.word.count();
      if (count === 0) return NextResponse.json({ error: "No words in database" }, { status: 404 });
      word = await prisma.word.findFirst({ skip: Math.floor(Math.random() * count) });
    }
    if (!word) return NextResponse.json({ error: "No words" }, { status: 404 });

    challenge = await prisma.dailyChallenge.create({
      data: { date, wordId: word.id },
      include: { word: true },
    });
  }

  let entry = null;
  if (!isNaN(playerId)) {
    entry = await prisma.dailyEntry.findUnique({
      where: { playerId_challengeId: { playerId, challengeId: challenge.id } },
    });
  }

  return NextResponse.json({
    challengeId: challenge.id,
    date: challenge.date,
    word: {
      id: challenge.word.id,
      word: challenge.word.word,
      hint: challenge.word.hint,
      difficulty: challenge.word.difficulty,
      length: challenge.word.word.length,
    },
    entry,
  });
}

export async function POST(req: NextRequest) {
  const { playerId, challengeId, won, firstTry, attemptsUsed } = await req.json();

  if (!playerId || !challengeId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);

  const yesterdayChallenge = await prisma.dailyChallenge.findUnique({ where: { date: yesterdayStr } });
  let streak = 1;
  if (yesterdayChallenge && won) {
    const prevEntry = await prisma.dailyEntry.findUnique({
      where: { playerId_challengeId: { playerId, challengeId: yesterdayChallenge.id } },
    });
    if (prevEntry?.won) streak = prevEntry.streak + 1;
  }

  const entry = await prisma.dailyEntry.upsert({
    where: { playerId_challengeId: { playerId, challengeId } },
    update: { won, firstTry, attemptsUsed, streak: won ? streak : 0 },
    create: { playerId, challengeId, won, firstTry, attemptsUsed, streak: won ? streak : 0 },
  });

  return NextResponse.json(entry);
}
