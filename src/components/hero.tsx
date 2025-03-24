"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthSync } from "@/store/useAuth";
import Link from "next/link";

export default function Hero() {
  const { status, signIn } = useAuthSync();
  const router = useRouter();

  const handleClick = async () => {
    if (status !== "authenticated") {
      await signIn("google");
    }
    router.push("/dashboard");
  };

  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Stay Organized with
          <br />
          MapMe
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Simplify your workflow, track progress, and stay on top of your tasks with an intuitive
          and secure task management solution
          <span className="font-semibold text-white">—because your time matters.</span>
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" onClick={handleClick}>
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          <Link href="/learn-more">Learn More</Link>
        </Button>
      </div>
    </section>
  );
}
