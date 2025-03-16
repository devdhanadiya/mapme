import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export const getAuthSession = () => getServerSession(authOptions);

export async function getUserId(_req: NextRequest) {
  const session = await getAuthSession();
  return session?.user.id ?? null;
}
