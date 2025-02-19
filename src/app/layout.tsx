import type { Metadata } from "next";
import { ChildrenProps } from "@/types";
import { Inter } from "next/font/google"
import "@/styles/main.css"
import { ToasterWrapper } from "@/components/customToast";
import { getAuthSession } from "@/lib/getAuthSession";
import Provider from "@/Provider";

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "MapMe",
  description: "A task manager application which helps you in managing your tasks efficiently"
};

export default async function RootLayout({ children }: Readonly<ChildrenProps>) {
  const session = await getAuthSession()
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Provider session={session}>
          <ToasterWrapper />
          {children}
        </Provider>
      </body>
    </html>
  );
}
