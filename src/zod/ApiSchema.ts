import { z } from "zod"

export const createTodoSchema = z.object({
    title: z.string({ required_error: "Title Required" }).min(1, "Title is required").max(50, "Title cannot exceed 25 characters"),
    description: z.string({ required_error: "Description Required" }).max(400, "Description cannot exceed 100 words"),
    dueTime: z.string({ required_error: "Due time is required" })
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid Date Format",
        })
        .transform((val) => new Date(val)),
    status: z.boolean({ invalid_type_error: "Invalid Type", required_error: "Status Required" }).default(false),
    userId: z.string({ required_error: "User id Required" }).uuid("Invalid user id"),
})

export const getTodoSchema = z.object({
    userId: z.string({ required_error: "User id Required" }).uuid("Invalid user id"),
})

export const deleteTodoSchema = z.object({
    todoId: z.string().uuid("Invalid Todo id.")
})

export const updateTodoSchema = createTodoSchema
    .partial()
    .extend({
        id: z.string({ required_error: "todo id required" }).uuid("Invaild Todo id.")
    })