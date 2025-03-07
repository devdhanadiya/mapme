import { NextRequest } from "next/server";
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"

export const getAuthSession = () => getServerSession(authOptions);

export async function getUserId(req: NextRequest) {
    const session = await getAuthSession()
    if (!session?.user.id) {
        console.log("Auth: Unauthorized")
        return null;
    }
    return session.user.id
}