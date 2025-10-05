import { NextResponse } from "next/server";
import { elementSets, expandElementSet } from "@/lib/data";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const set = elementSets.find((s) => s.id === Number(id));
  if (!set) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const expanded = expandElementSet(set);
  return NextResponse.json({ ...set, expanded });
}
