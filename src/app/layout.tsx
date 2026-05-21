import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Uttam Kumar Acharya — Full Stack Developer",
  description:
    "Full Stack Developer & CSE Student specializing in React, Next.js, Node.js, and microservices architecture. Available for opportunities.",
  keywords: [
    "Uttam Kumar Acharya",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Microservices"
  ],
  authors: [{ name: "Uttam Kumar Acharya" }],
  openGraph: {
    title: "Uttam Kumar Acharya — Full Stack Developer",
    description:
      "Full Stack Developer & CSE Student specializing in React, Next.js, Node.js, and microservices architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body bg-bg text-slate-100 antialiased overflow-x-hidden`}
      >
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000",
              border: "1px solid cyan",
              color: "white"
            },
          }}
        />
      </body>
    </html>
  );
}
