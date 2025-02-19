"use client"

import { Toast } from "./customToast"
import { useAuthSync } from "@/store/useAuth"
import { Button } from "./ui/button"
import { LogIn, User } from "lucide-react"
import { Avatar, AvatarFallback } from "./ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function LoginButton() {
    const { signIn } = useAuthSync()

    const handleLogin = async (provider: string) => {
        try {
            const res = await signIn(provider, { redirect: false })
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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                        <AvatarFallback>
                            <User className="h-6 w-6" />
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <p className="text-sm font-medium leading-none">Welcome</p>
                    <p className="text-xs leading-none text-muted-foreground">Sign in to access your account</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => handleLogin("google")}>
                        <LogIn className="mr-2 h-4 w-4" />
                        <span>Continue with Google</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

