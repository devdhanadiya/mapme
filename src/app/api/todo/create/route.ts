import { createTodoSchema } from "@/zod/ApiSchema";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { success, data, error } = createTodoSchema.safeParse(body)
        if (!success) {
            console.log(error.format())
            return NextResponse.json({ message: "Invalid Inputs" }, { status: 400 })
        }
        const result = await prisma.todo.create({ data: { ...data } })
        if (!result) {
            return NextResponse.json({ message: "Unable to create todo." }, { status: 400 })
        }

        return NextResponse.json({ message: "Todo created successfully." }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}