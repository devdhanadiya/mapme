import type { Metadata } from "next";
import { ChildrenProps } from "@/types";
import { Inter } from "next/font/google"
import "@/styles/main.css"
import Provider from "@/Provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "MapMe",
  description: "A task manager application which helps you in managing your tasks efficiently"
};

export default function RootLayout({ children }: Readonly<ChildrenProps>) {

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Provider>
          <Toaster />
          {children}
        </Provider>
      </body>
    </html>
  );
}
