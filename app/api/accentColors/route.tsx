import { NextResponse } from "next/server";
import { accentColors } from "@/lib/data";

export async function GET() {
  return NextResponse.json(accentColors);
}
