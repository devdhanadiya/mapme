import { createTodoSchema } from "@/zod/ApiSchema";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prismadb";
import { getUserId } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const userId = await getUserId(req);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { success, data } = createTodoSchema.safeParse(body);
    if (!success) {
      return NextResponse.json({ message: "Invalid Inputs" }, { status: 400 });
    }

    await prisma.todo.create({ data: { ...data, userId } });
    return NextResponse.json({ message: "Todo created successfully." }, { status: 201 });
  } catch (_error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
