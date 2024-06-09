"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <motion.section
      key={"project-page"}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
      className="flex flex-col gap-2 items-center justify-center max-w-6xl mt-36 mb-24 px-4 mx-auto"
    >
      <Badge
        variant="default"
        className="flex items-center rounded-full gap-x-1.5 bg-emerald-800 text-emerald-200 hover:bg-emerald-800 hover:text-emerald-200"
      >
        <p>Open for full-time jobs or freelance</p>
      </Badge>

      <p className="font-serif text-3xl md:text-4xl max-w-xl font-bold text-center text-foreground">
        Feel free to contact me anytime!
      </p>
      <p className="max-w-md text-xs md:text-sm pt-1 pb-6 text-center tracking-wide text-muted-foreground">
        I am eagerly searching for fresh opportunities to level up my skills. If
        you`re interested, let`s have a chat!
      </p>
      <Link href="mailto:nikhar663@gmail.com" target="_blank">
        <div title="Mail To: nikhar663@gmail.com">
          <Button variant="default" className="flex items-center gap-2">
            <Mail width={18} />
            Get in Touch
          </Button>
        </div>
      </Link>
    </motion.section>
  );
};

export default page;
