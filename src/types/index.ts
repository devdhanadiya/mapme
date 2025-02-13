import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode
}

export interface AuthState {
    user: any;
    isAuthenticated: boolean;
    isLoading: boolean;
    hasShownToast: boolean;
    setAuth: (user: any) => void;
    clearAuth: () => void;
    setHasShownToast: (value: boolean) => void
}