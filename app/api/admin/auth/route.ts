import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { user, pass } = await req.json();

  const validUser = process.env.ADMIN_USER;
  const validPass = process.env.ADMIN_PASS;
  const token     = process.env.ADMIN_TOKEN;

  if (!validUser || !validPass || !token) {
    return NextResponse.json({ error: "Admin not configured" }, { status: 503 });
  }

  if (user === validUser && pass === validPass) {
    return NextResponse.json({ token });
  }

  // Delay to slow brute force
  await new Promise(r => setTimeout(r, 800));
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
