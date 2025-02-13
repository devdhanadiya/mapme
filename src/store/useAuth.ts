"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { AuthState } from "@/types"
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

export const useAuth = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: true,
            hasShownToast: false,
            setAuth: (user) => set({ user, isAuthenticated: true, isLoading: false }),
            clearAuth: () => set({ user: null, isAuthenticated: false, isLoading: false }),
            setHasShownToast: (value) => set({ hasShownToast: value })
        }), {
        name: "auth-storage",
        partialize: (state) => ({ hasShownToast: state.hasShownToast })
    }
    ))

export const useSyncAuth = () => {
    const { data: session, status } = useSession();
    const setAuth = useAuth((state) => state.setAuth)
    const clearAuth = useAuth((state) => state.clearAuth)
    const hasShownToast = useAuth((state) => state.hasShownToast)
    const setHasShownToast = useAuth((state) => state.setHasShownToast)
    const { toast } = useToast()

    useEffect(() => {
        if (status === "loading") return;
        if (session?.user) {
            setAuth(session.user)
            if (!hasShownToast) {
                toast({
                    title: "Authentication Successful!",
                    description: "You are logged in successfully.",
                })
                setHasShownToast(true)
            }
        } else {
            clearAuth()
            setHasShownToast(false)
        }
    }, [session, status, setAuth, clearAuth, hasShownToast, setHasShownToast])
    return { signIn, signOut }
}