import { NextResponse } from "next/server";
import { elementSets /*, expandAllElementSets*/ } from "@/lib/data";

export async function GET() {
  // If you want to include expanded lists for each set:
  // const expanded = expandAllElementSets(elementSets);
  // return NextResponse.json({ elementSets, expanded });

  return NextResponse.json(elementSets);
}
