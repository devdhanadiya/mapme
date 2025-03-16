import { Session } from "next-auth";
import { ReactNode } from "react";

export type SessionType = Session | null

export interface ChildrenProps {
    children: ReactNode
}


export interface IToast {
    type: "success" | "error" | "warning";
    message: string
    t: { id: string, visible: boolean }
}

export interface ProviderProps extends ChildrenProps {
    session: SessionType
}
