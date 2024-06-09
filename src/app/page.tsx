"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TechStack from "@/components/techStack";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <motion.div
      key={"annual"}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
    >
      <p className="text-muted-foreground text-balance">
        I am a programmer and web developer from India, currently pursuing a
        degree in Computer Engineering. Let's work together to bring your ideas
        to life and surpass your online objectives.
      </p>

      <Experience />
      <TechStack />
    </motion.div>
  );
}
