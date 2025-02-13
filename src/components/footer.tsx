import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
                <div className="flex-1 space-y-4">
                    <h2 className="font-bold text-xl">MapMe</h2>
                    <p className="text-sm text-muted-foreground">
                        Streamline your workflow and stay organized with a simple, efficient, and secure task management solution.
                    </p>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Features</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <div className="text-muted-foreground transition-colors hover:text-primary hover:cursor-pointer">
                                    Task Management
                                </div>
                            </li>
                            <li>
                                <div className="text-muted-foreground transition-colors hover:text-primary hover:cursor-pointer">
                                    Progress Tracking
                                </div>
                            </li>
                            <li>
                                <div className="text-muted-foreground transition-colors hover:text-primary hover:cursor-pointer">
                                    Secure Authentication
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Developer</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Follow Me</h3>
                        <div className="flex space-x-4">
                            <Link
                                href="https://github.com/devdhanadiya"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href="https://x.com/Dev_Dhanadiya"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="https://linkedin.com/company/https://linkedin.com/in/dev-s-dhanadiya"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container border-t py-6">
                <p className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} - MapMe, All rights reserved.
                </p>
            </div>
        </footer>
    )
}
