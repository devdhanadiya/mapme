import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prismadb";
import { deleteTodoSchema } from "@/zod/ApiSchema";

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const todoId = searchParams.get("todoId");

    const { success, data } = deleteTodoSchema.safeParse({ todoId });
    if (!success) {
      return NextResponse.json({ message: "Invalid url parameter 'todoId'" }, { status: 400 });
    }

    const result = await prisma.todo.delete({
      where: { id: data.todoId },
    });
    if (!result) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Todo deleted successfully", data: result.id },
      { status: 200 },
    );
  } catch (_error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
