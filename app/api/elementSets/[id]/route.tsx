import { NextResponse } from "next/server";
import { elementSets, expandElementSet } from "@/lib/data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const param = await params;

  const set = elementSets.find((s) => s.id === Number(param.id));
  if (!set) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const expanded = expandElementSet(set);
  return NextResponse.json({ ...set, expanded });
}
