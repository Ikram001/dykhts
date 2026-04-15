import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const words = await prisma.word.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(words);
}

export async function POST(req: NextRequest) {
  try {
    const { word, hint, difficulty } = await req.json();
    if (!word?.trim()) return NextResponse.json({ error: "Word required" }, { status: 400 });

    const created = await prisma.word.create({
      data: { word: word.toLowerCase().trim(), hint: hint || null, difficulty: difficulty || "medium" },
    });
    return NextResponse.json(created, { status: 201 });
  } catch (e: unknown) {
    if ((e as { code?: string }).code === "P2002")
      return NextResponse.json({ error: "Word already exists" }, { status: 409 });
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
