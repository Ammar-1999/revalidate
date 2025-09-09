import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 600;
export async function GET() {
  return NextResponse.json({
    start: "2025-09-01T07:24:31.266Z",
    end: "2025-09-15T07:24:31.266Z",
    now: new Date().toISOString(),
  });
}
