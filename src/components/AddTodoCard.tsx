"use client"

import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useState } from "react"
import { CreateTodoDialog } from "./CreateTodoDialog"
import { AddTodoCardProps } from "@/types/form"
import { CardDataProp } from "@/types/form"

export function AddTodoCard({ onAddTodo }: AddTodoCardProps) {
    const [showDialog, setShowDialog] = useState(false)

    const handleAddTodo = (data: CardDataProp) => {
        if (onAddTodo) {
            onAddTodo(data)
        }
        setShowDialog(false)
    }

    return (
        <>
            <Card
                className="w-full h-full p-4 shadow-md flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-all duration-300 ease-in-out bg-card border-border"
                onClick={() => setShowDialog(true)}
            >
                <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 flex items-center justify-center transition-all duration-300 hover:border-muted-foreground/50 group">
                    <div className="bg-background border border-input rounded-md p-2 transition-transform duration-300 group-hover:scale-110">
                        <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                </div>
            </Card>

            <CreateTodoDialog open={showDialog} onOpenChange={setShowDialog} onSave={handleAddTodo} />
        </>
    )
}

