import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prismadb";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    scope: "openid email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
                }
            }
        })
    ],
    session: {
        strategy: "database",
    },
    cookies: {
        sessionToken: {
            name: "next-auth-session-token",
            options: {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
            },
        },
    },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account?.access_token) {
                token.accessToken = account.access_token

                await prisma.account.updateMany({
                    where: { provider: "google", userId: user?.id },
                    data: {
                        access_token: account.access_token,
                        refresh_token: account.refresh_token,
                        expires_at: account.expires_at
                    }
                })
            }
            return token;
        },
        async session({ session, user }) {
            session.user.id = user.id;

            const account = await prisma.account.findFirst({
                where: { provider: "google", userId: user.id },
                select: { access_token: true }
            })
            session.accessToken = account?.access_token ?? undefined
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }