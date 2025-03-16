import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { updateTodoSchema } from "@/zod/ApiSchema";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();

    const { success, data } = updateTodoSchema.safeParse(body);
    if (!success) {
      return NextResponse.json({ message: "Invalid Inputs" }, { status: 400 });
    }
    const { id, ...updatedData } = data;

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: updatedData,
    });

    return NextResponse.json(
      { message: "Todo updated Successfully", data: updatedTodo },
      { status: 200 },
    );
  } catch (error: unknown) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json({ message: "Todo not found" }, { status: 404 });
      }
    }

    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
