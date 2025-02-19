import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthSession } from "./lib/getAuthSession";

export async function middleware(req: NextRequest) {
    try {
        const session = await getAuthSession()
        if (!session) {
            console.warn("Middleware: No session found, redirecting ...")
            return NextResponse.redirect(new URL("/", req.url))
        }
        return NextResponse.next()
    } catch (error) {
        console.error("Middleware Error: ", error)
        return NextResponse.redirect(new URL("/", req.url))
    }
}

export const config = {
    matcher: ["/dashboard/:path*", "/setting/:path*"]
}