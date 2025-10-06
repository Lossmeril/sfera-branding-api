import { NextResponse } from "next/server";
import { elementSets } from "@/lib/data";
import { expandAllElementSets } from "@/lib/utils";

export async function GET() {
  // If you want to include expanded lists for each set:
  const expanded = expandAllElementSets(elementSets);
  return NextResponse.json({ elementSets, expanded });
}
