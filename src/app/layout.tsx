import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import Navbar from "@/components/Navbar";
import "./globals.css";

import { cn } from "@/lib/utils"
import Sidebar from "@/components/Chat/Sidebar";
import ChatUI from "@/components/Chat/ChatUI";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Echo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "flex font-sans bg-neutral-100 h-screen w-screen overflow-hidden border-box",
        fontSans.variable
      )}>
        <main className="w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
