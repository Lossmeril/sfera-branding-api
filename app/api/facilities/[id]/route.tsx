import { NextResponse } from "next/server";
import { facilitiesWithElements } from "@/lib/data";

type tParams = Promise<{ id: string }>;

export async function GET(_request: Request, { params }: { params: tParams }) {
  const facility = facilitiesWithElements.find(
    async (f) => f.id === Number((await params).id)
  );

  if (!facility) {
    return NextResponse.json({ error: "Facility not found" }, { status: 404 });
  }

  return NextResponse.json(facility);
}
