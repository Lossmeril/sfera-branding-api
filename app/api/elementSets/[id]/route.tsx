import { NextRequest, NextResponse } from "next/server";
import type { RouteContext } from "next"; // ✅ use the built-in Next.js type
import { elementSets, expandElementSet } from "@/lib/data";

export async function GET(
  _req: NextRequest,
  context: RouteContext<{ id: string }>
) {
  const { id } = context.params;

  const set = elementSets.find((s) => s.id === Number(id));
  if (!set) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const expanded = expandElementSet(set);
  return NextResponse.json({ ...set, expanded });
}
