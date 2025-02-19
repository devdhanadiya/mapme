"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function AuthLoader() {
    return (
        <Avatar className="h-10 w-10 relative">
            <AvatarFallback className="bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
            </AvatarFallback>
        </Avatar>
    )
}

