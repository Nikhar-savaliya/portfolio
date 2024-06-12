"use client";

import { motion } from "framer-motion";
import TechStack from "@/components/techStack";
import Experience from "@/components/Experience";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DownloadCloud } from "lucide-react";

export default function Home() {
  return (
    <motion.div
      key={"home"}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
    >
      <p className="text-muted-foreground">
        I am a programmer and web developer from India, currently pursuing a
        degree in Computer Engineering. Let&apos;s work together to bring your
        ideas to life and surpass your online objectives.
      </p>
      {/* <Link
        className={cn(
          buttonVariants({ variant: "outline" }),
          "mt-6 flex items-center gap-2 w-fit"
        )}
        href={"/Nikhar-savaliya.resume.pdf"}
        download={"resume.nikhar-savaliya.pdf"}
        target="_blank"
      >
        <DownloadCloud width={18} /> Resume
      </Link> */}
      <Experience />
      <TechStack />
    </motion.div>
  );
}
