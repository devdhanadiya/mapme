"use client"

import LoginButton from "./LoginButton";
import ProfileButton from "./ProfileButton";
import { useAuthSync } from "@/store/useAuth";
import { Button } from "./ui/button";
import AuthLoader from "./AuthLoader";

export default function AuthButton() {
    const { status } = useAuthSync()
    if (status === "loading") {
        return (
            <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                <AuthLoader />
            </Button>
        )
    }
    if (status === "authenticated") return <ProfileButton />
    return <LoginButton />;
}
