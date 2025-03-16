"use client";

import { useEffect, useCallback } from "react";
import { useTodo } from "@/store/useTodo";
import { CardDataProp } from "@/types/form";
import { DateParser } from "@/util/dateFormatter";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Toast } from "./customToast";
import { AddTodoCard } from "./AddTodoCard";
import { TodoCard } from "./TodoCard";

export default function CardSection() {
  const {
    todos,
    addTodo,
    editTodo,
    getTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    isFetched,
  } = useTodo();

  useEffect(() => {
    if (!todos.length && !isFetched) {
      getTodos();
    }
  }, [getTodos, todos.length, isFetched]);

  const handleAddTodo = useCallback(
    async (data: CardDataProp) => {
      addTodo({
        ...data,
        dueTime: DateParser(data.dueTime),
      });
      Toast.success("Created Todo!");
    },
    [addTodo],
  );

  const handleEditTodo = useCallback(
    async (id: string, todo: CardDataProp) => {
      await editTodo(id, {
        title: todo.title,
        description: todo.description,
        dueTime: DateParser(todo.dueTime),
      });
      Toast.success("Edited Todo!");
    },
    [editTodo],
  );

  const handleCompleteTodo = useCallback(
    (id: string, status: boolean) => {
      completeTodo(id, status);
      Toast.success(`Marked Todo as ${status ? "completed" : "incomplete"}!`);
    },
    [completeTodo],
  );

  const handleDeleteTodo = useCallback(
    (id: string) => {
      deleteTodo(id);
      Toast.success("Deleted Todo!");
    },
    [deleteTodo],
  );

  // Render loading skeletons
  if (loading && !todos.length) {
    return (
      <div className="relative w-full h-full p-4 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_) => (
            <div key={Math.random()} className="w-full">
              <Skeleton className="h-[180px] w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="relative w-full h-full p-4 overflow-y-auto custom-scrollbar">
        <Alert variant="destructive" className="animate-in fade-in-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  // Empty state
  if (isFetched && todos.length === 0) {
    return (
      <div className="relative w-full h-full p-4 overflow-y-auto custom-scrollbar">
        <motion.div
          className="flex flex-col items-center justify-center h-[50vh] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2">No todos yet</h3>
          <p className="text-muted-foreground mb-6">Create your first todo to get started</p>
          <div className="w-full max-w-sm">
            <AddTodoCard onAddTodo={handleAddTodo} />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full p-4 overflow-y-auto custom-scrollbar">
      {loading && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-primary/10 text-primary rounded-full p-2 flex items-center">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            <span className="text-xs font-medium">Updating...</span>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key="todo-grid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
              },
            },
            exit: {
              opacity: 0,
              transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
              },
            },
          }}
        >
          <AnimatePresence mode="popLayout">
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                className="h-full"
              >
                <TodoCard
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  dueTime={new Date(todo.dueTime)}
                  status={todo.status}
                  onEdit={handleEditTodo}
                  onDelete={handleDeleteTodo}
                  onComplete={() => handleCompleteTodo(todo.id, !todo.status)}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 25,
              delay: 0.1,
            }}
            className="h-full"
          >
            <AddTodoCard onAddTodo={handleAddTodo} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
