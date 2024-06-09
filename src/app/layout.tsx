import type { Metadata } from "next";
import { Bitter, Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const sofia = Bitter({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--serif",
});
const prime = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhar Savaliya",
  description: "Web Designer & Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={cn(prime.className, sofia.variable, "max-xl:px-6")}>
        <Header />
        <div className="max-w-5xl mx-auto mb-6">{children}</div>
      </body>
    </html>
  );
}
