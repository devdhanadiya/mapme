import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { getUserId } from "@/lib/auth";

export async function GET(req: NextRequest) {
    try {
        const userId = await getUserId(req)
        if (!userId) {
            return NextResponse.json({ message: "Invalid userId" }, { status: 400 })
        }

        const todos = await prisma.todo.findMany({
            where: { userId },
            select: {
                id: true,
                title: true,
                description: true,
                dueTime: true,
                status: true,
            }
        })
        if (todos.length === 0) {      //Because on fail findMany returns an empty array which returns true
            return NextResponse.json({ message: "No Todos found" }, { status: 404 })
        }

        return NextResponse.json({ data: todos }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}