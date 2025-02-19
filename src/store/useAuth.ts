"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useEffect, useState } from "react";
import { Toast } from "@/components/customToast";
import { AuthState } from "@/types";

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            session: null,
            status: "loading",
            hasShownToast: false,
            setSession: (session) => set({ session }),
            setStatus: (status) => set({ status }),
            setHasShownToast: (value) => set({ hasShownToast: value }),
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
);

export const useAuthSync = () => {
    const { data: session, status } = useSession();
    const { setSession, setStatus, setHasShownToast, hasShownToast } = useAuthStore();
    const [isHydrated, setIsHydrated] = useState<boolean>(false)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    useEffect(() => {
        if (!isHydrated) return;

        if (status === 'authenticated' && session) {
            if (!hasShownToast) {
                Toast.success("Login Successful!")
                setHasShownToast(true)
            }
            setSession(session)
            setStatus(status)
        }

        if (status === 'unauthenticated') {
            setStatus(status)
            setHasShownToast(false)
        }
    }, [session, status, isHydrated, hasShownToast, setSession, setStatus, setHasShownToast]);

    return {
        session: useAuthStore((state) => state.session),
        status: useAuthStore((state) => state.status),
        signIn,
        signOut,
    };
};
