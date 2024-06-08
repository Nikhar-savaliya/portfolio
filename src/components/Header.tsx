"use client";
import React from "react";

import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import ButtonShapeTabs from "./Tabs";

const Header: React.FC = () => {
  return (
    <motion.div
      key={"annual"}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="max-w-5xl mx-auto my-10"
    >
      <div className="flex flex-col items-start py-8 border-b">
        <div className="flex items-start gap-4 ">
          <Link href="/">
            <Image
              src={logo}
              alt={"logo image"}
              className="w-12 h-12 rounded"
            />
          </Link>
          <div>
            <p className="text-2xl font-semibold text-primary font-cursive leading-8 tracking-wide">
              Nikhar Savaliya
            </p>
            <p className="text-muted-foreground mb-6">
              web developer & designer
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <motion.a
            href="https://github.com/Nikhar-savaliya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="rounded" />
          </motion.a>
          <motion.a
            href="https://x.com/nikharSavaliya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Twitter className="rounded" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nikharsavaliya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="rounded" />
          </motion.a>
        </div>
      </div>
      <ButtonShapeTabs />
    </motion.div>
  );
};

export default Header;
