import { Session } from "next-auth";
import { ReactNode } from "react";

type AuthStatus = "authenticated" | "unauthenticated" | "loading"
type SessionType = Session | null


export interface ChildrenProps {
    children: ReactNode
}

export interface AuthState {
    session: SessionType;
    status: AuthStatus;
    hasShownToast: boolean;
    setSession: (session: SessionType) => void;
    setStatus: (status: AuthStatus) => void;
    setHasShownToast: (value: boolean) => void;
}

export interface IToast {
    type: "success" | "error" | "warning";
    message: string
    t: { id: string, visible: boolean }
}

export interface ProviderProps extends ChildrenProps {
    session: SessionType
}