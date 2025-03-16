import { SessionType } from "./index";

type AuthStatus = "authenticated" | "unauthenticated" | "loading"

export interface AuthState {
    session: SessionType;
    status: AuthStatus;
    hasShownToast: boolean;
    setSession: (session: SessionType) => void;
    setStatus: (status: AuthStatus) => void;
    setHasShownToast: (value: boolean) => void;
}

export interface ITodo {
    id: string;
    title: string;
    description: string;
    dueTime: string;
    status: boolean;
}

export type ITodoWithoutId = Omit<ITodo, "id">

export interface TodoStore {
    todos: ITodo[];
    loading: boolean;
    error: string | null;
    success: boolean;
    isFetched: boolean;
    getTodos: () => Promise<void>;
    addTodo: (data: Omit<ITodoWithoutId, "status">) => void;
    editTodo: (id: string, data: Partial<ITodoWithoutId>) => Promise<void>;
    deleteTodo: (id: string) => void;
    completeTodo: (id: string, status: boolean) => void;
}

export interface ApiResponse {
    data?: ITodo[];
    message?: string;
}