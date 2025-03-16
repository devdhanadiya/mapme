import type { Metadata } from "next";
import { ChildrenProps } from "@/types";
import { Inter } from "next/font/google";
import "@/styles/main.css";
import MouseMoveEffect from "@/components/mouse-move-effect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MapMe",
  description: "A task manager application which helps you in managing your tasks efficiently",
};

export default function RootLayout({ children }: Readonly<ChildrenProps>) {
  return (
    <div className={`${inter.className} bg-background text-foreground antialiased dark`}>
      <MouseMoveEffect />
      {children}
    </div>
  );
}
