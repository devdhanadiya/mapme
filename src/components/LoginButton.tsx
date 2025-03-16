"use client";

import { useAuthSync } from "@/store/useAuth";
import { LogIn, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toast } from "./customToast";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function LoginButton() {
  const { signIn } = useAuthSync();

  const handleLogin = async () => {
    try {
      const res = await signIn("google", { redirect: false });
      if (res?.error) {
        Toast.error("Authentication Failed!");
      }
    } catch (_error) {
      Toast.error("Authentication Failed!");
    }
  };

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
          <p className="text-xs leading-none text-muted-foreground">
            Sign in to access your account
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleLogin}>
            <LogIn className="mr-2 h-4 w-4" />
            <span>Continue with Google</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
