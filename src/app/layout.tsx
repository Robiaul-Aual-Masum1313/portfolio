import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Rivera | Front-End & MERN Stack Developer Portfolio",
  description:
    "Professional portfolio of a passionate Front-End & MERN Stack Developer skilled in JavaScript, TypeScript, React.js, Next.js, Node.js, Express, and MongoDB. Open for immediate hiring and junior roles.",
  keywords: [
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Portfolio",
    "Fresher Developer",
    "Entry-level Software Engineer",
  ],
  authors: [{ name: "Alex Rivera" }],
  openGraph: {
    title: "Alex Rivera | Front-End & MERN Stack Developer",
    description:
      "Crafting modern, high-performance web applications with React, Next.js, TypeScript, and the MERN stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
