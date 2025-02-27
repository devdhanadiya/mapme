import { z } from "zod"
import { formSchema } from "@/zod/FormSchema"

export interface EditTodoDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    defaultValues: z.infer<typeof formSchema>
    onSave: (data: z.infer<typeof formSchema>) => void
}

export interface CreateTodoDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSave: (data: z.infer<typeof formSchema>) => void
}

export interface DateTimeProps {
    value: Date | null;
    onChange: (date: Date | null) => void;
}

export interface CardDataProp {
    title: string;
    description: string;
    dueTime: Date
}

export interface AddTodoCardProps {
    onAddTodo?: (data: CardDataProp) => void
}

export interface TodoCardProps {
    id: string
    title: string
    description: string
    dueTime: Date
    onDelete?: (id: string) => void
    onEdit?: (id: string, data: CardDataProp) => void
    onComplete?: (id: string, completed: boolean) => void
}
