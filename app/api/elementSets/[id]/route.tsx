import { NextRequest, NextResponse } from "next/server";
import { elementSets } from "@/lib/data";

import { expandElementSet } from "@/lib/utils";

type tParams = Promise<{ id: string }>;

export async function GET(_req: NextRequest, context: { params: tParams }) {
  const { id } = await context.params;

  const set = elementSets.find((s) => s.id === Number(id));
  if (!set) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const expanded = expandElementSet(set);
  return NextResponse.json({ ...set, expanded });
}
