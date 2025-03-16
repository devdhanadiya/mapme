"use client"

import { useState, useEffect } from "react"
import { Github, Globe, Mail, MapPin, Calendar, Database, Layout, Lock, Zap, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function LearnMore() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="dark min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pb-16 pt-24">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    <span className="text-primary">📌 MapMe</span> - Task Manager
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    A sleek and efficient task management application designed to help users stay organized and boost
                                    productivity.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    Get Started
                                </Button>
                                <Button size="lg" variant="outline">
                                    View on GitHub
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background"></div>
                                <Image
                                    src="/home.png?height=400&width=600"
                                    alt="MapMe Dashboard Preview"
                                    className="object-cover"
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-16 md:px-6">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">✨ Features</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Discover what makes MapMe the perfect tool for managing your tasks
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-12">
                    <Card className="bg-card text-card-foreground">
                        <CardHeader className="flex flex-row items-center gap-2 pb-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <CardTitle className="text-xl">Task Management</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Create, edit, and organize your tasks effortlessly with intuitive controls.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card text-card-foreground">
                        <CardHeader className="flex flex-row items-center gap-2 pb-2">
                            <Lock className="h-5 w-5 text-primary" />
                            <CardTitle className="text-xl">User Authentication</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Secure login with Google OAuth ensures your data stays protected.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card text-card-foreground">
                        <CardHeader className="flex flex-row items-center gap-2 pb-2">
                            <Zap className="h-5 w-5 text-primary" />
                            <CardTitle className="text-xl">Real-time State</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Powered by Zustand for smooth user experience and real-time updates.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card text-card-foreground">
                        <CardHeader className="flex flex-row items-center gap-2 pb-2">
                            <Database className="h-5 w-5 text-primary" />
                            <CardTitle className="text-xl">Database Integration</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Uses Prisma with PostgreSQL for reliable and efficient data storage.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card text-card-foreground">
                        <CardHeader className="flex flex-row items-center gap-2 pb-2">
                            <Layout className="h-5 w-5 text-primary" />
                            <CardTitle className="text-xl">Modern UI</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Beautiful design with ShadCN UI and Tailwind CSS for a delightful experience.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card text-card-foreground">
                        <CardHeader className="flex flex-row items-center gap-2 pb-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            <CardTitle className="text-xl">Task Planning</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Plan your tasks with deadlines and priorities to stay on track.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="container mx-auto px-4 py-16 md:px-6 bg-muted/50">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">🛠️ Tech Stack</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Built with modern technologies for optimal performance
                    </p>
                </div>

                <Tabs defaultValue="frontend" className="mx-auto max-w-4xl mt-12">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="frontend">Frontend</TabsTrigger>
                        <TabsTrigger value="backend">Backend</TabsTrigger>
                        <TabsTrigger value="other">Other</TabsTrigger>
                    </TabsList>
                    <TabsContent value="frontend" className="mt-6 space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Next.js</CardTitle>
                                    <CardDescription>React framework for production</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Provides server-side rendering, static site generation, and API routes for a complete solution.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>TypeScript</CardTitle>
                                    <CardDescription>Typed JavaScript</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Adds static type definitions to enhance code quality and developer experience.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Tailwind CSS</CardTitle>
                                    <CardDescription>Utility-first CSS framework</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Enables rapid UI development with utility classes for consistent styling.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>ShadCN UI</CardTitle>
                                    <CardDescription>UI component library</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Provides beautifully designed, accessible components that integrate with Tailwind CSS.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="backend" className="mt-6 space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Next.js API Routes</CardTitle>
                                    <CardDescription>Serverless functions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Enables building API endpoints directly within the Next.js application.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>PostgreSQL</CardTitle>
                                    <CardDescription>Relational database</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Powerful, open-source relational database system for data storage.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Prisma</CardTitle>
                                    <CardDescription>Next-generation ORM</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Simplifies database access with a type-safe query builder and migrations.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>NextAuth.js</CardTitle>
                                    <CardDescription>Authentication for Next.js</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Provides authentication solution with support for Google OAuth and more.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="other" className="mt-6 space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Zustand</CardTitle>
                                    <CardDescription>State management</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Small, fast and scalable state-management solution with a simple API.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>pnpm</CardTitle>
                                    <CardDescription>Package manager</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Fast, disk space efficient package manager for JavaScript projects.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>

            {/* About the Creator */}
            <section className="container mx-auto px-4 py-16 md:px-6">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About the Creator</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Meet the mind behind MapMe
                    </p>
                </div>

                <div className="mx-auto max-w-2xl mt-12">
                    <Card className="overflow-hidden">
                        <div className="aspect-video relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
                            <Image
                                src="/dev.jpg?height=300&width=600"
                                alt="Dev Dhanadiya"
                                width={300}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl">Dev Dhanadiya</CardTitle>
                            <CardDescription>Full Stack Developer & Creator of MapMe</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p>
                                Dev Dhanadiya is a passionate developer focused on creating intuitive and efficient web applications.
                                With expertise in modern JavaScript frameworks and a keen eye for design, Dev created MapMe to help
                                users organize their tasks and boost productivity.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="outline" size="sm" className="gap-1">
                                    <Link href="https://github.com/devdhanadiya">
                                        <Github className="h-4 w-4" />
                                        <span>GitHub</span>
                                    </Link>
                                </Button>
                                <Button variant="outline" size="sm" className="gap-1">
                                    <Link href="https://www.linkedin.com/in/dev-s-dhanadiya/">
                                        <Mail className="h-4 w-4" />
                                        <span>Contact</span>
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Setup & Installation */}
            <section className="container mx-auto px-4 py-16 md:px-6 bg-muted/50">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">⚙️ Setup & Installation</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Get started with MapMe in a few simple steps
                    </p>
                </div>

                <div className="mx-auto max-w-3xl mt-12 space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                1
                            </div>
                            <h3 className="text-xl font-bold">Clone the repository</h3>
                        </div>
                        <div className="ml-10 rounded-md bg-card p-4">
                            <pre className="text-sm text-muted-foreground">
                                <code>git clone https://github.com/your-username/mapme.git</code>
                            </pre>
                            <pre className="text-sm text-muted-foreground">
                                <code>cd mapme</code>
                            </pre>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                2
                            </div>
                            <h3 className="text-xl font-bold">Install dependencies</h3>
                        </div>
                        <div className="ml-10 rounded-md bg-card p-4">
                            <pre className="text-sm text-muted-foreground">
                                <code>pnpm install</code>
                            </pre>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                3
                            </div>
                            <h3 className="text-xl font-bold">Setup environment variables</h3>
                        </div>
                        <div className="ml-10 rounded-md bg-card p-4">
                            <p className="text-sm text-muted-foreground mb-2">Create a .env file in the root directory and add:</p>
                            <pre className="text-sm text-muted-foreground">
                                <code>DATABASE_URL=</code>
                            </pre>
                            <pre className="text-sm text-muted-foreground">
                                <code>GOOGLE_CLIENT_ID=</code>
                            </pre>
                            <pre className="text-sm text-muted-foreground">
                                <code>GOOGLE_CLIENT_SECRET=</code>
                            </pre>
                            <pre className="text-sm text-muted-foreground">
                                <code>NEXTAUTH_URL=</code>
                            </pre>
                            <pre className="text-sm text-muted-foreground">
                                <code>NEXTAUTH_SECRET=</code>
                            </pre>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                4
                            </div>
                            <h3 className="text-xl font-bold">Run database migrations</h3>
                        </div>
                        <div className="ml-10 rounded-md bg-card p-4">
                            <pre className="text-sm text-muted-foreground">
                                <code>pnpm prisma migrate dev</code>
                            </pre>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                5
                            </div>
                            <h3 className="text-xl font-bold">Start the development server</h3>
                        </div>
                        <div className="ml-10 rounded-md bg-card p-4">
                            <pre className="text-sm text-muted-foreground">
                                <code>pnpm dev</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deployment */}
            <section className="container mx-auto px-4 py-16 md:px-6">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">🚀 Deployment</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Take your MapMe application to production
                    </p>
                </div>

                <div className="mx-auto max-w-3xl mt-12">
                    <Card>
                        <CardHeader>
                            <CardTitle>Deploy on Vercel</CardTitle>
                            <CardDescription>The easiest way to deploy your Next.js app</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                MapMe can be deployed on platforms like Vercel. Ensure environment variables are configured correctly
                                before deploying.
                            </p>
                            <Button className="gap-2">
                                <span>Deploy to Vercel</span>
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                                </svg>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-card">
                <div className="container mx-auto px-4 py-10 md:px-6">
                    <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                            © 2023 MapMe. Created by Dev Dhanadiya. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="icon">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Globe className="h-4 w-4" />
                                <span className="sr-only">Website</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Mail className="h-4 w-4" />
                                <span className="sr-only">Email</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

