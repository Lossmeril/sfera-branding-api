// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins = [
  "http://localhost:3000", // local dev
  "https://yourfrontend.vercel.app", // production
];

export function middleware(req: NextRequest) {
  const origin = req.headers.get("origin");
  const isAllowedOrigin = origin && allowedOrigins.includes(origin);

  const res = NextResponse.next();

  // Set CORS headers
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set(
    "Access-Control-Allow-Origin",
    isAllowedOrigin ? origin! : "*"
  );
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204, headers: res.headers });
  }

  return res;
}

// Apply this middleware only to API routes
export const config = {
  matcher: "/api/:path*",
};
