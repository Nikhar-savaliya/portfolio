import Link from "next/link";
import React from "react";
import scetLogo from "@/assets/scet-logo.png";
import upworkLogo from "@/assets/icons/upwork-roundedsquare-1.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      key={"experience"}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
      className="mt-16"
    >
      <p className="text-xl font-cursive mb-4 max-md:text-center ">
        Academic and professional Experience
      </p>
      <ul className="relative flex items-center space-x-2 w-fit pr-12 p-6 py-3 bg-card border-l">
        <li className="w-12 h-12">
          <span className="w-3 h-3 bg-muted border absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"></span>
          <Image src={upworkLogo} alt="upwork logo" className="w-12" />
        </li>
        <div className="text-sm p-1">
          <p className="font-cursive text-base text-card-foreground">
            Freelance Work
          </p>
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
        </div>
      </ul>
      <ul className="relative flex items-center space-x-2 w-fit pr-12 p-6 py-3 bg-card border-l">
        <li className="w-12 h-12">
          <span className="w-3 h-3 bg-muted border absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"></span>
          <Image
            src={scetLogo}
            alt="collage logo"
            className="w-12 dark:bg-foreground rounded-full"
          />
        </li>
        <div className="text-sm p-1">
          <p className="font-cursive text-base text-card-foreground">
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
        </div>
      </ul>
    </motion.div>
  );
};

export default Experience;
