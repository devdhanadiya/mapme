"use client"

import { Button } from "@/components/ui/button";
import Loader from "./Loader";
import LoginButton from "./LoginButton";
import ProfileButton from "./ProfileButton";
import { useSession } from "next-auth/react";

export default function AuthButton() {
    const { status } = useSession()
    if (status === 'loading') {
        return (
            <Button size="sm" className="w-28 flex items-center justify-center" disabled>
                <Loader size={18} className="animate-spin" />
            </Button>
        )
    }
    return status === "authenticated" ? <ProfileButton /> : <LoginButton />;
}
