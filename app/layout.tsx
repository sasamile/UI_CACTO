import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CACTO",
  description: "CACTO",
  icons: {
    icon: "/icons/logo.png",
    shortcut: "/icons/logo.png",
    apple: "/icons/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icons/logo.png" type="image/x-icon" />
        <link rel="icon" href="/icons/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/logo.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors />
      </body>
      {/* </ReactLenis> */}
    </html>
  );
}
