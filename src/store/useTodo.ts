import api from "@/lib/axios";
import { TodoStore, ApiResponse, ITodo, ITodoWithoutId } from "@/types/storeTypes";
import { create } from "zustand";
import { isAxiosError } from "axios";

export const useTodo = create<TodoStore>((set) => ({
    todos: [],
    loading: false,
    error: null,
    success: false,
    isFetched: false,

    getTodos: async () => {
        set({ loading: true, error: null, success: false });

        try {
            const res = await api.get<ApiResponse>("/api/todo/get");
            set({
                todos: res.data.data ?? [],
                loading: false,
                success: true,
                isFetched: true,
            });
        } catch (error) {
            if (isAxiosError(error) && error.response?.status === 404) {
                set({
                    todos: [],
                    loading: false,
                    success: true,
                    isFetched: true,
                });
            } else {
                set({
                    todos: [],
                    loading: false,
                    error: "Failed to fetch todos!",
                    isFetched: true,
                });
                console.error("GetTodos Error: ", error);
            }
        }
    },

    addTodo: async (data) => {
        set({ loading: true, error: null, success: false })
        try {
            await api.post<Omit<ApiResponse, "data">>("/api/todo/create", data)
            await useTodo.getState().getTodos()
            set({ loading: false, success: true })
        } catch (error) {
            console.error("AddTodo Error:", error);
            set({
                loading: false,
                error: "Failed to add todo!",
            });

        }
    },


    editTodo: async (id, data) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, ...data } : todo
            ),
            loading: true,
            error: null,
        }));

        try {
            await api.patch("/api/todo/update", { id, ...data });
            set({ loading: false, success: true });
        } catch (error) {
            console.error("EditTodo Error: ", error);
            set({ loading: false, error: "Failed to update todo!" });
        }
    },

    deleteTodo: async (id) => {
        const prevTodos = useTodo.getState().todos;
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
            loading: true,
            error: null,
        }));

        try {
            await api.delete(`/api/todo/delete?todoId=${id}`);
            set({ loading: false, success: true });
        } catch (error) {
            console.error("DeleteTodo Error: ", error);
            set({ todos: prevTodos, loading: false, error: "Failed to delete todo!" });
        }
    },

    completeTodo: async (id, status) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, status } : todo
            ),
            loading: true,
            error: null,
        }));

        try {
            await api.patch("/api/todo/update", { id, status });
            set({ loading: false, success: true });
        } catch (error) {
            console.error("Could'nt mark todo as done: ", error);
            set({ loading: false, error: "Failed to mark status of Todo!" });
        }
    },
}));
