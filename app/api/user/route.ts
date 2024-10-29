import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  console.log(session);
  return NextResponse.json({
    userId: session?.user?.id,
    name: session?.user?.name,
    email: session?.user?.email,
  });
}
