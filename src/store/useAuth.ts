import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Toast } from "@/components/customToast";
import { AuthState } from "@/types";

const useHydrated = () => {
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => setHydrated(true), []);
    return hydrated;
};

export const useAuth = create<AuthState>()(
    persist(
        (set) => ({
            hasShownToast: false,
            setHasShownToast: (value) => set({ hasShownToast: value }),
        }),
        {
            name: "auth-storage",
        }
    )
);

export const useSyncAuth = () => {
    const { data: session, status } = useSession();
    const hasShownToast = useAuth((state) => state.hasShownToast);
    const setHasShownToast = useAuth((state) => state.setHasShownToast);

    const hydrated = useHydrated();

    useEffect(() => {
        if (!hydrated || status === "loading") return;

        if (session?.user) {
            if (!hasShownToast) {
                Toast.success("Login Successful!");
                setHasShownToast(true);
            }
        } else {
            setHasShownToast(false);
        }
    }, [session, status, hasShownToast, setHasShownToast, hydrated]);

    return { signIn, signOut };
};
