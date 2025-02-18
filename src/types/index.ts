import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode
}

export interface AuthState {
    hasShownToast: boolean;
    setHasShownToast: (value: boolean) => void
}

export interface IToast {
    type: "success" | "error" | "warning";
    message: string
    t: { id: string, visible: boolean }
}