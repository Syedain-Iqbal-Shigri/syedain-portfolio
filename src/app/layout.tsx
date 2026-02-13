import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syedain-portfolio.vercel.app"),
  title: "Syedain Shigree | Full Stack Developer & Graphic Designer",
  description: "Professional portfolio of Syedain Shigree - Full Stack Developer and Graphic Designer from Skardu, Pakistan. Expert in PHP, Laravel, JavaScript, Python, and Adobe Creative Suite.",
  keywords: ["Syedain Shigree", "Full Stack Developer", "Graphic Designer", "Web Developer", "Laravel", "PHP", "JavaScript", "Python", "UI/UX", "Skardu", "Pakistan", "Freelancer"],
  authors: [{ name: "Syedain Shigree" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon-48x48.svg", sizes: "48x48", type: "image/svg+xml" },
      { url: "/favicon-64x64.svg", sizes: "64x64", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    other: [
      { url: "/android-chrome-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/android-chrome-512x512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Syedain Shigree | Full Stack Developer & Graphic Designer",
    description: "Professional portfolio showcasing web development and graphic design projects. Crafting beautiful digital experiences.",
    url: "https://syedain-portfolio.vercel.app",
    siteName: "Syedain Shigree Portfolio",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Syedain Shigree - Full Stack Developer & Graphic Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syedain Shigree | Full Stack Developer & Graphic Designer",
    description: "Professional portfolio showcasing web development and graphic design projects.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}