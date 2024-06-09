"use client";

import { motion } from "framer-motion";
import TechStack from "@/components/techStack";
import Experience from "@/components/Experience";

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

      <Experience />
      <TechStack />
    </motion.div>
  );
}
