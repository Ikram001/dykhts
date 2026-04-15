import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const scores = await prisma.arcadeScore.groupBy({
    by: ["playerId"],
    _sum: { points: true },
    orderBy: { _sum: { points: "desc" } },
    take: 20,
  });

  const playerIds = scores.map((s) => s.playerId);
  const players = await prisma.player.findMany({ where: { id: { in: playerIds } } });
  const playerMap = Object.fromEntries(players.map((p) => [p.id, p.name]));

  const result = scores.map((s, i) => ({
    rank: i + 1,
    playerName: playerMap[s.playerId] || "Unknown",
    points: s._sum.points ?? 0,
  }));

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const { playerId, points, difficulty } = await req.json();
  if (!playerId || typeof points !== "number")
    return NextResponse.json({ error: "playerId and points required" }, { status: 400 });

  const score = await prisma.arcadeScore.create({
    data: { playerId, points, difficulty: difficulty || "medium" },
  });
  return NextResponse.json(score, { status: 201 });
}
