"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, Edit, Trash2, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
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
} from "@/components/ui/alert-dialog";
import type { TodoCardProps, CardDataProp } from "@/types/form";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { EditTodoDialog } from "./EditTodoDialog";

export function TodoCard({
  id,
  title,
  description,
  dueTime,
  onDelete,
  onEdit,
  onComplete,
  status = false,
}: TodoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(status);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Update local state when prop changes
  useEffect(() => {
    setIsCompleted(status);
  }, [status]);

  // Check if due date is in the past
  const isPastDue = new Date(dueTime) < new Date() && !isCompleted;

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    if (onComplete) {
      onComplete(id, !isCompleted);
    }
  };

  const handleEdit = (data: CardDataProp) => {
    if (onEdit) {
      onEdit(id, data);
    }
    setShowEditDialog(false);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  // Handle keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleComplete();
    }
  };

  return (
    <>
      <motion.div transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <Card
          ref={cardRef}
          className={cn(
            "w-full h-full p-4 shadow-md relative transition-all duration-300 ease-in-out bg-card border-border",
            isCompleted && "bg-muted/50 border-muted",
            isPastDue && "border-destructive/30",
            isHovered && "shadow-lg",
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="article"
          aria-label={`Todo: ${title}`}
        >
          <CardHeader className="p-0 pb-2 flex flex-row items-start justify-between">
            <div className="flex flex-col">
              <CardTitle
                className={cn(
                  "text-lg font-semibold transition-all duration-200",
                  isCompleted && "line-through text-muted-foreground",
                )}
              >
                {title}
              </CardTitle>
              {isPastDue && (
                <Badge variant="destructive" className="mt-1 self-start text-xs">
                  Past due
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <Checkbox
                checked={isCompleted}
                onCheckedChange={handleComplete}
                className={cn(
                  "h-5 w-5 transition-all duration-200",
                  !isHovered && !isCompleted && "opacity-0 sm:opacity-30 hover:opacity-100",
                )}
                aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
              />
            </div>
          </CardHeader>
          <CardContent className="p-0 space-y-2 mt-2">
            <p
              className={cn(
                "text-sm text-muted-foreground line-clamp-3 transition-all duration-200",
                isCompleted && "line-through opacity-70",
              )}
            >
              {description}
            </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{format(new Date(dueTime), "MMM d, yyyy")}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>{format(new Date(dueTime), "h:mm a")}</span>
              </div>
            </div>

            <motion.div
              className="absolute bottom-3 right-3 flex space-x-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.2 }}
            >
              <button
                type="button"
                onClick={() => setShowEditDialog(true)}
                className="p-1.5 rounded-md bg-muted hover:bg-muted/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Edit todo"
              >
                <Edit className="h-3.5 w-3.5" />
                <span className="sr-only">Edit</span>
              </button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    type="button"
                    className="p-1.5 rounded-md bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-destructive/50"
                    aria-label="Delete todo"
                  >
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
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

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
  );
}
