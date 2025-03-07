import api from "@/lib/axios"
import { TodoStore, ITodo, ApiResponse } from "@/types/storeTypes"
import { create } from "zustand"

export const useTodo = create<TodoStore>((set) => ({
    todos: [],
    loading: false,
    error: null,
    success: false,
    isFetched: false,

    getTodos: async () => {
        set({ loading: true, error: null, success: false })

        try {
            const res = await api.get<ApiResponse>(`/api/todo/get`)
            set({
                todos: res.data.data ?? [],
                loading: false,
                success: true,
                isFetched: true
            })
        } catch (error) {
            set({
                todos: [],
                loading: false,
                error: "Failed to fetch todos!",
                isFetched: true
            })
            console.error("GetTodos Error: ", error)
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
        set({ loading: true, error: null })
        try {
            await api.patch(`/api/todo/update?todoId=${id}`, data)
            set((state) => ({
                todos: state.todos.map((todo) => todo.id === id ? { ...todo, ...data } : todo),
                loading: false,
                success: true,
            }))
        } catch (error) {
            console.log("EditTodo Error: ", error)
            set({
                loading: false,
                error: "Failed to update todo!",
            })
        }
    },

    deleteTodo: async (id) => {
        set({ loading: true, error: null })
        try {
            await api.delete(`/api/todo/delete?todoId=${id}`)
            set((state) => ({
                todos: state.todos.filter((todo) => todo.id !== id),
                loading: false,
                success: true
            }))
        } catch (error) {
            console.error("DeleteTodo Error: ", error)
            set({
                loading: false,
                error: "Failed to delete Todo!"
            })
        }
    },
    completeTodo: async (id, status) => {
        set((state) => ({
            ...state,
            todos: state.todos.map(todo => todo.id == id ? { ...todo, status } : todo),
            loading: true,
            error: null
        }))

        try {
            await api.patch(`/api/todo/status`, { id, status })
            set({ loading: false, success: true })
        } catch (error) {
            console.error("Could'nt mark todo as done: ", error)

            set((state) => ({
                ...state,
                loading: false,
                error: "Failed to Marks status of Todo!"
            }))
        }
    }
}))