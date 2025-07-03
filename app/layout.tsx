import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "../components/navbar";

import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "MyStore",
  description: "Buy the best products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <UserProvider>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
