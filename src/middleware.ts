import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only act on the /login route
  if (pathname === "/login") {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET });

    if (token) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/((?!_next/static|_next/image|favicon.ico|.well-known/workflow/).*)",
  ],
};
