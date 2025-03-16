import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  try {
    const sessionToken =
      req.cookies.get("next-auth-session-token")?.value ||
      req.cookies.get("__Secure-next-auth.session-token")?.value;

    if (!sessionToken) {
      if (req.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  } catch (_error) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/setting/:path*", "/api/todo/:path*"],
};
