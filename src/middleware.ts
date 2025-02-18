import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { Toast } from "@/components/customToast";

export async function middleware(req: NextRequest) {
    try {
        const sessionToken = req.cookies.get("next-auth-session-token")?.value;

        if (!sessionToken) {
            console.warn("Middleware: No session cookie found, redirecting...");
            Toast.error("User not Authorized")
            return NextResponse.redirect(new URL("/", req.url));
        }

        const token = await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET,
            secureCookie: process.env.NODE_ENV === "production",
        });

        if (!token) {
            console.warn("Middleware: No valid session token, redirecting...");
            Toast.error("User not Authorized")
            return NextResponse.redirect(new URL("/", req.url));
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Middleware error: ", error);
        Toast.error("User not Authorized")
        return NextResponse.redirect(new URL("/", req.url));
    }
}

// 🔹 Ensure middleware protects these routes
export const config = {
    matcher: ["/dashboard/:path*", "/settings/:path*"],
    runtime: "nodejs",
};
