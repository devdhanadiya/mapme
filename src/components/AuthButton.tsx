"use client"

import Loader from "./Loader";
import LoginButton from "./LoginButton";
import ProfileButton from "./ProfileButton";
import { useAuthSync } from "@/store/useAuth";
import { Button } from "./ui/button";

export default function AuthButton() {
    const { status } = useAuthSync()
    if (status === "loading") {
        return (
            <Button size="sm" className="w-28 flex items-center justify-center" disabled>
                <Loader size={18} className="animate-spin" />
            </Button>
        )
    }
    if (status === "authenticated") return <ProfileButton />
    return <LoginButton />;
}
