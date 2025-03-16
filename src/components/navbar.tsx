import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import AuthButton from "./AuthButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">MapMe</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/dashboard" className="text-gray-400 transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link href="/learn-more"
            className="text-gray-400 transition-colors hover:text-primary">
            About Project
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/devdhanadiya" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            <Link href="https://www.linkedin.com/in/dev-s-dhanadiya/" target="_blank">
              Contact
            </Link>
          </Button>
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
