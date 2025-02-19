"use client"
import { Toast } from "./customToast"
import { useAuthSync } from "@/store/useAuth"
import { Button } from "./ui/button"
import { LogIn } from "lucide-react"

export default function LoginButton() {
    const { signIn } = useAuthSync()

    const handleLogin = async () => {
        try {
            const res = await signIn("google", { redirect: false })
            if (res?.error) {
                Toast.error("Authentication Failed!")
                console.error(res.error)
            }
        } catch (error) {
            console.error("Login Error: ", error)
            Toast.error("Authentication Failed!")
        }
    }

    return (
        <Button
            size="sm"
            onClick={handleLogin}
            className="w-28 flex items-center justify-center gap-2 transition-all"
        >
            Login <LogIn size={16} />
        </Button>
    );
}