import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: "Name too short" }, { status: 400 });
  }
  // upsert — same name returns existing player
  const player = await prisma.player.upsert({
    where: { name: name.trim() },
    update: {},
    create: { name: name.trim() },
  });
  return NextResponse.json(player);
}

export async function GET() {
  const players = await prisma.player.findMany({ orderBy: { createdAt: "asc" } });
  return NextResponse.json(players);
}
