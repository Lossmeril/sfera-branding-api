import { NextRequest, NextResponse } from "next/server";
import { elementSets, expandElementSet } from "@/lib/data";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> } | { params: { id: string } }
) {
  const params = await context.params;
  const id = Number(params.id);

  const set = elementSets.find((s) => s.id === id);
  if (!set) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const expanded = expandElementSet(set);
  return NextResponse.json({ ...set, expanded });
}
