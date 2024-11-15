import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

import { FaTools, FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
} from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SignedIn>
            <SidebarProvider
              style={
                {
                  "--sidebar-width": "19rem",
                } as React.CSSProperties
              }
            >
              <AppSidebar />
              <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <div
                    className="flex flex-1 items-center gap-4 justify-between
          "
                  >
                    <Link
                      href="/"
                      className="text-lg font-semibold flex flex-row items-center justify-center gap-3"
                    >
                      <FaTools /> FixItHub
                    </Link>
                    <div className="flex flex-row justify-center items-center gap-2">
                      <Input
                        type="text"
                        placeholder="Search..."
                        size={40}
                        className=" rounded-xl text-sm border-slate-500"
                      />
                      <button className="">
                        <FaSearch color="gray" />
                      </button>
                    </div>
                    <nav className="flex flex-row gap-8 items-center justify-center">
                      <ul className="flex gap-4 items-center justify-center">
                        <li>
                          <Link href="/" className="text-sm ">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link href="/services" className="text-sm ">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/subscription" className="text-sm ">
                            Subscription
                          </Link>
                        </li>
                        <li>
                          <UserButton />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                  {children}
                </div>
              </SidebarInset>
            </SidebarProvider>
          </SignedIn>
          <SignedOut>
            <div className="relative flex h-screen items-center justify-center bg-white flex-col gap-2 --font-geist-sans">
              <h1 className="text-3xl text-black font-bold z-10">
                Welcome to FixItHub
              </h1>
              <SignIn routing="hash" />
            </div>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
