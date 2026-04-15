import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const difficulty = searchParams.get("difficulty");

  const where = difficulty ? { difficulty } : {};
  const count = await prisma.word.count({ where });

  if (count === 0) return NextResponse.json({ error: "No words found" }, { status: 404 });

  const skip = Math.floor(Math.random() * count);
  const word = await prisma.word.findFirst({ where, skip });
  return NextResponse.json(word);
}
