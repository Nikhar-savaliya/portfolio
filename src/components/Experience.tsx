import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      key={"experience"}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      className="mt-8"
    >
      <p className="text-xl font-serif tracking-tight mb-4">
        Academic and professional Experience
      </p>
      <ul className="relative flex items-center space-x-2 pr-12 p-6 py-3 bg-card border-l">
        <li className="text-sm px-6 py-2 rounded">
          <span className="w-3 h-3 bg-muted border absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"></span>
          <p className="text-base text-card-foreground">Freelance Work</p>
          <p className="text-xs text-muted-foreground">
            <Link
              href="https://www.upwork.com/freelancers/nikhars3"
              className="hover:underline"
              target="_blank"
            >
              upwork
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">2022-2023</p>
        </li>
      </ul>
      <ul className="relative flex items-center space-x-2 w-fit md:pr-12 p-6 py-3 bg-card border-l">
        <li className="text-sm px-6 py-2 rounded">
          <span className="w-3 h-3 bg-slate-300  border absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"></span>
          <p className="text-base text-card-foreground">
            B.Tech in Computer Science
          </p>
          <p className="text-xs text-muted-foreground">
            <Link
              href="https://scet.ac.in"
              className="hover:underline"
              target="_blank"
            >
              sarvajanik collage of engineering and technology
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">2021-2025</p>
        </li>
      </ul>
    </motion.div>
  );
};

export default Experience;
