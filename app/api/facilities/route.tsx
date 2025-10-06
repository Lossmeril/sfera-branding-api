import { NextResponse } from "next/server";
import { facilitiesWithElements } from "@/lib/utils";

export async function GET() {
  return NextResponse.json(facilitiesWithElements);
}
