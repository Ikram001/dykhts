import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function checkAuth(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  return token === process.env.ADMIN_TOKEN;
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const date = todayStr();
  const challenge = await prisma.dailyChallenge.findUnique({
    where: { date },
    include: { word: true },
  });
  return NextResponse.json({ challenge });
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { wordId } = await req.json();
  if (!wordId) return NextResponse.json({ error: "wordId required" }, { status: 400 });
  const date = todayStr();
  const challenge = await prisma.dailyChallenge.upsert({
    where: { date },
    update: { wordId },
    create: { date, wordId },
    include: { word: true },
  });
  return NextResponse.json({ challenge });
}
