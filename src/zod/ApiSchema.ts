import { z } from "zod"

export const createTodoSchema = z.object({
    title: z.string({ required_error: "Title Required" }).min(1, "Title is required").max(50, "Title cannot exceed 50 characters"),
    description: z.string({ required_error: "Description Required" }).max(400, "Description cannot exceed 400 words"),
    dueTime: z.string({ required_error: "Due time is required" })
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid Date Format",
        })
        .transform((val) => new Date(val)),
})

export const deleteTodoSchema = z.object({
    todoId: z.string().uuid("Invalid Todo id.")
})

export const updateTodoSchema = createTodoSchema.
    partial()
    .extend({
        id: z.string({ required_error: "id required" }).uuid("Invalid Todo id."),
        status: z.boolean({ required_error: "status required", invalid_type_error: "Invalid status format" }).optional()
    })
