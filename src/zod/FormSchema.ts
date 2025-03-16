import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Title is required").max(25, "Title cannot exceed 25 characters"),
  description: z.string().max(400, "Description cannot exceed 100 words"),
  dueTime: z.date({ required_error: "Due time is required" }),
});
