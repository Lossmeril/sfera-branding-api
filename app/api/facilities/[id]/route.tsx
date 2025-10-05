import { NextResponse } from "next/server";
import { facilitiesWithElements } from "@/lib/data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const facility = facilitiesWithElements.find(
    (f) => f.id === Number(params.id)
  );

  if (!facility) {
    return NextResponse.json({ error: "Facility not found" }, { status: 404 });
  }

  return NextResponse.json(facility);
}
