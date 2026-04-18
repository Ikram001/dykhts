import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { name, uuid } = await req.json();

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: "Name too short" }, { status: 400 });
  }
  if (!uuid || typeof uuid !== "string") {
    return NextResponse.json({ error: "Missing uuid" }, { status: 400 });
  }

  const trimmedName = name.trim();

  // Same UUID coming back — just return their existing record
  const existingByUuid = await prisma.player.findUnique({ where: { code: uuid } });
  if (existingByUuid) {
    return NextResponse.json({ id: existingByUuid.id, name: existingByUuid.name });
  }

  // Name taken by a different player — reject
  const existingByName = await prisma.player.findFirst({ where: { name: trimmedName } });
  if (existingByName) {
    return NextResponse.json(
      { error: "That name is already taken. Please choose a different one." },
      { status: 409 }
    );
  }

  // New player, unique name — create
  const player = await prisma.player.create({
    data: { name: trimmedName, code: uuid },
  });

  return NextResponse.json({ id: player.id, name: player.name });
}

export async function GET() {
  const players = await prisma.player.findMany({ orderBy: { createdAt: "asc" } });
  return NextResponse.json(players);
}
