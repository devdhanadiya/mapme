import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { getTodoSchema } from "@/zod/ApiSchema";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const userId = searchParams.get("userId")

        const { success, data, error } = getTodoSchema.safeParse({ userId })
        if (!success) {
            console.log(error.message)
            return NextResponse.json({ message: "Invaild url parameter 'userId'", }, { status: 400 })
        }

        const result = await prisma.todo.findMany({
            where: {
                userId: data.userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                dueTime: true,
                status: true,
                userId: true,
                user: true
            }
        })
        if (result.length === 0) {      //Because on fail findMany returns an empty array which returns true
            return NextResponse.json({ message: "No Todos found" }, { status: 404 })
        }

        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}