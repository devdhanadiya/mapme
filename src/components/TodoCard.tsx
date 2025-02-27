"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Edit, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { EditTodoDialog } from "./EditTodoDialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { TodoCardProps } from "@/types/form"
import { CardDataProp } from "@/types/form"
import { format } from "date-fns"

export function TodoCard({ id, title, description, dueTime, onDelete, onEdit, onComplete }: TodoCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)
    const [showEditDialog, setShowEditDialog] = useState(false)

    const handleComplete = () => {
        setIsCompleted(!isCompleted)
        if (onComplete) {
            onComplete(id, !isCompleted)
        }
    }

    const handleEdit = (data: CardDataProp) => {
        if (onEdit) {
            onEdit(id, data)
        }
        setShowEditDialog(false)
    }

    const handleDelete = () => {
        if (onDelete) {
            onDelete(id)
        }
    }

    return (
        <>
            <Card
                className={cn(
                    "w-full h-full p-4 shadow-md relative transition-all duration-300 ease-in-out bg-card border-border",
                    isCompleted && "opacity-70",
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <CardHeader className="p-0 pb-2 flex flex-row items-start justify-between">
                    <CardTitle
                        className={cn(
                            "text-lg font-semibold transition-all duration-200",
                            isCompleted && "line-through text-muted-foreground",
                        )}
                    >
                        {title}
                    </CardTitle>
                    {isHovered && (
                        <div className="flex items-center space-x-1 animate-in fade-in duration-200">
                            <Checkbox
                                checked={isCompleted}
                                onCheckedChange={handleComplete}
                                className="h-5 w-5 transition-opacity duration-200"
                            />
                        </div>
                    )}
                </CardHeader>
                <CardContent className="p-0 space-y-2">
                    <p className={cn("text-sm text-muted-foreground line-clamp-3", isCompleted && "line-through")}>
                        {description}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{format(new Date(dueTime), "PPP p")}</span>
                    </div>

                    {isHovered && (
                        <div className="absolute bottom-3 right-3 flex space-x-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
                            <button
                                onClick={() => setShowEditDialog(true)}
                                className="p-1.5 rounded-md bg-muted hover:bg-muted/80 transition-colors duration-200"
                            >
                                <Edit className="h-3.5 w-3.5" />
                                <span className="sr-only">Edit</span>
                            </button>

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <button className="p-1.5 rounded-md bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors duration-200">
                                        <Trash2 className="h-3.5 w-3.5" />
                                        <span className="sr-only">Delete</span>
                                    </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-card text-card-foreground">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete this todo.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    )}
                </CardContent>
            </Card>

            <EditTodoDialog
                open={showEditDialog}
                onOpenChange={setShowEditDialog}
                defaultValues={{
                    title,
                    description,
                    dueTime: new Date(dueTime),
                }}
                onSave={handleEdit}
            />
        </>
    )
}

