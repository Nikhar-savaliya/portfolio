import type { Metadata } from "next";
import { Marcellus, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import "./globals.css";

const serif = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--serif",
});
const sans = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhar Savaliya",
  description: "Web Designer & Developer",
  category: "personal portfolio website",
  creator: "Nikhar savaliya",
  keywords:["Next.js", "Tailwind CSS", "Framer Motion","Portfolio"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={cn(sans.className, serif.variable, "max-xl:px-6")}>
        <Header />
        <div className="max-w-5xl mx-auto mb-6">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
