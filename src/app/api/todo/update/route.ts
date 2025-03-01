import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { updateTodoSchema } from "@/zod/ApiSchema";

export async function PATCH(req: NextRequest) {
    try {
        const { success, data, error } = updateTodoSchema.safeParse(req.body)
        if (!success) {
            console.log(error.message)
            return NextResponse.json({ message: "Invaild Inputs" }, { status: 400 })
        }

        const { id, ...updateFields } = data

        const existingTodo = await prisma.todo.findUnique({
            where: { id }
        })
        if (!existingTodo) {
            return NextResponse.json({ message: "Todo not found" }, { status: 404 })
        }

        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: updateFields
        })

        return NextResponse.json({ message: "Todo updated Successfully", data: updatedTodo }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}