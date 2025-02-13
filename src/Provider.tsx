"use client"

import { ChildrenProps } from "@/types";
import { SessionProvider } from "next-auth/react";
import { useSyncAuth } from "@/store/useAuth"

function AuthSync() {
    useSyncAuth()
    return null;
}

export default function Provider({ children }: ChildrenProps) {
    return (
        <SessionProvider>
            <AuthSync />
            {children}
        </SessionProvider>
    )
}