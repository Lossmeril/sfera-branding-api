import { NextResponse } from "next/server";
import { facilitiesWithElements } from "@/lib/data";

export async function GET() {
  return NextResponse.json(facilitiesWithElements);
}
