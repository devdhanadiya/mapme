"use client"

import { useEffect, useState } from "react"
import { TodoCard } from "./TodoCard"
import { AddTodoCard } from "./AddTodoCard"
import { useTodo } from "@/store/useTodo"
import { CardDataProp } from "@/types/form"
import { DateParser } from "@/util/dateFormatter"
import { Toast } from "./customToast"

export default function CardSection() {
    const { todos, addTodo, editTodo, getTodos, completeTodo, deleteTodo, isFetched } = useTodo()

    useEffect(() => {
        if (!todos.length) {
            getTodos()
        }
    }, [getTodos, todos.length])

    const handleAddTodo = async (data: CardDataProp) => {
        addTodo({
            ...data,
            dueTime: DateParser(data.dueTime),
        })
        Toast.success("Created Todo!")
    }

    const handleEditTodo = async (id: string, todo: CardDataProp) => {
        await editTodo(id, {
            title: todo.title,
            description: todo.description,
            dueTime: DateParser(todo.dueTime)
        })
        Toast.success("Edited Todo!")
    }

    const handleCompleteTodo = (id: string, status: boolean) => {
        completeTodo(id, status)
        Toast.success(`Marked Todo as ${status ? "completed" : "incomplete"}!`)
    }

    const handleDeleteTodo = (id: string) => {
        deleteTodo(id)
        Toast.success("Deleted Todo!")
    }

    return (
        <div className="w-full h-full p-4 overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        className={`transition-all duration-300 "opacity-100 scale-100`}
                    >
                        <TodoCard
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            dueTime={new Date(todo.dueTime)}
                            onEdit={handleEditTodo}
                            onDelete={handleDeleteTodo}
                            onComplete={() => handleCompleteTodo(todo.id, !todo.status)}
                        />
                    </div>
                ))}
                <div className="transition-all duration-300 animate-in fade-in-50">
                    <AddTodoCard onAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}

