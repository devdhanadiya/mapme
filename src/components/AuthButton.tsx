"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useAuth } from "@/store/useAuth";
import Loader from "./Loader";
import { LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ProfileButton } from "./ProfileButton";

export default function AuthButton() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <Button size="sm" className="w-28 flex items-center justify-center" disabled>
                <Loader size={18} className="animate-spin" />
            </Button>
        );
    } else if (!isAuthenticated) {
        return <LoginButton />;
    } else {
        return <ProfileButton />;
    }
}

function LoginButton() {
    const { toast } = useToast();
    const handleLogin = async () => {
        try {
            const res = await signIn("google", { redirect: false });
            if (res?.error) {
                toast({
                    title: "Authentication Failed!",
                    description: "We couldn't log you in with Google. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <Button
            size="sm"
            onClick={handleLogin}
            className="w-28 flex items-center justify-center gap-2 transition-all hover:scale-105"
        >
            Login <LogIn size={16} />
        </Button>
    );
}
