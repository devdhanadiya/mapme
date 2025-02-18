"use client"
import { Toast } from "./customToast"
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { LogIn } from "lucide-react"

export default function LoginButton() {
    const handleLogin = async () => {
        try {
            const res = await signIn("google", { redirect: false })
            if (res?.error) {
                Toast.error("Authentication Failed!")
                console.error(res.error)
            }
        } catch (error) {
            console.error("Login Eroor: ", error)
            Toast.error("Authentication Failed!")
        }
    }

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