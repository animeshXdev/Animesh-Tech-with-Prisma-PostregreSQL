import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { BackToTop } from "@/components/BackToTop";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Animesh-Tech Portfolio",
  description: "This is a beautiful, full-featured Portfolio Website built using modern full-stack tools like Next.js, EmailJS, PostgreSQL, Prisma, Zod validation, and ShadCN UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
         <html lang="en" suppressHydrationWarning>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarDemo />
            {children}
            <Footer />
            <BackToTop />
            <Toaster position="top-center" />
            <div className="fixed bottom-4 right-4 z-50">
            <ModeToggle />
          </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
