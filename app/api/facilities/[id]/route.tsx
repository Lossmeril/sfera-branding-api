import { NextResponse } from "next/server";
import { facilitiesWithElements } from "@/lib/utils";

type tParams = Promise<{ id: string }>;

export async function GET(_request: Request, { params }: { params: tParams }) {
  const facilities = await facilitiesWithElements;
  const paramId = (await params).id;

  const facility = facilities.find((f) => Number(f.id) === Number(paramId));

  if (!facility) {
    return NextResponse.json({ error: "Facility not found" }, { status: 404 });
  }

  return NextResponse.json(facility);
}
