import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(req: NextRequest) {
    try {
        const session = await auth()
        if (!session) {
            return NextResponse.redirect(new URL("/", req.url))
        }
        return NextResponse.next()
    } catch (error) {
        console.error(`Middleware error: ${error}`)
        return NextResponse.redirect(new URL("/", req.url))
    }
}

export const config = {
    matcher: ["/dashboard/:path*", "/settings/:path*"]
}