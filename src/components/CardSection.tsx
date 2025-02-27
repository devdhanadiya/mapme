"use client"

import { useState } from "react"
import { TodoCard } from "./TodoCard"
import { AddTodoCard } from "./AddTodoCard"
import { CardDataProp } from "@/types/form"

// Sample data for demonstration
const initialTodos = [
    {
        id: "1",
        title: "Complete Project",
        description: "Finish the dashboard implementation with all required features.",
        dueTime: new Date(),
    },
    {
        id: "2",
        title: "Team Meeting",
        description: "Weekly sync with the development team to discuss progress.",
        dueTime: new Date(),
    },
]

export default function CardSection() {
    const [todos, setTodos] = useState(initialTodos)

    const handleAddTodo = (data: CardDataProp) => {
        const newTodo = {
            id: Date.now().toString(),
            ...data,
        }
        setTodos((prevTodos) => [...prevTodos, newTodo])
    }

    const handleEditTodo = (id: string, data: CardDataProp) => {
        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, ...data } : todo)))
    }

    const handleDeleteTodo = (id: string) => {
        setTodos((prevTodos) => {
            const todoToDelete = prevTodos.find((todo) => todo.id === id)
            if (!todoToDelete) return prevTodos

            setTimeout(() => {
                setTodos((current) => current.filter((todo) => todo.id !== id))
            }, 200)

            return prevTodos.map((todo) => (todo.id === id ? { ...todo, isDeleting: true } : todo))
        })
    }

    const handleCompleteTodo = (id: string, completed: boolean) => {
        console.log(`Todo ${id} marked as ${completed ? "completed" : "incomplete"}`)
        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)))
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
                            onComplete={handleCompleteTodo}
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

