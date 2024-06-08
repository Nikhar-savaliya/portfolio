"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      key={"annual"}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
      className="max-w-5xl mx-auto my-10"
    >
      about
    </motion.div>
  );
}
