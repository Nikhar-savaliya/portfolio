"use client";
import CardItem from "@/components/ui/projectItem";
import React from "react";
import { motion } from "framer-motion";

import pearlLogo from "@/assets/icons/pearl-logo.svg";
import elibLogo from "@/assets/icons/Elib-logo.svg";
import hmsLogo from "@/assets/icons/HMS-logo.svg";
import portfolioLogo from "@/assets/icons/portfolio-logo.svg";
import uifryLogo from "@/assets/icons/Uifry-logo.svg";
import SeverLogo from "@/assets/icons/server-logo.svg";

const ProjectsData = [
  {
    id: 1,
    name: "Multi-threaded Server in Java",
    description: "implemented single & multi-threaded servers in java",
    link: "https://github.com/Nikhar-savaliya/Threaded-servers-in-java",
    image: SeverLogo,
  },
  {
    id: 2,
    name: "Pearl",
    description: "Mean stack blog website inspired by Medium.com",
    link: "https://github.com/Nikhar-savaliya/Pearl",
    image: pearlLogo,
  },
  {
    id: 3,
    name: "eLib",
    description:
      "A full-stack e-library website that provides users with a beautiful UI.",
    link: "https://github.com/Nikhar-savaliya/elib-client",
    image: elibLogo,
  },
  {
    id: 4,
    name: "HMS",
    description: "A hospital management system with a custom admin panel.",
    link: "https://github.com/Nikhar-savaliya/HospitalManagementSystem",
    image: hmsLogo,
  },
  {
    id: 5,
    name: "portfolio",
    description: "Portfolio website built with Next.js and Tailwind CSS.",
    link: "https://github.com/Nikhar-savaliya/portfolio",
    image: portfolioLogo,
  },
  {
    id: 6,
    name: "Uifry",
    description:
      "Landing page in Next.js with tailwind CSS, implementing a Figma Design",
    link: "https://github.com/Nikhar-savaliya/Uifry-Landing-Page",
    image: uifryLogo,
  },
];

const page = () => {
  return (
    <motion.div
      key={"project-page"}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
    >
      <div className="grid w-full md:grid-cols-2 gap-4 lg:grid-cols-3">
        {ProjectsData.map((project) => (
          <CardItem {...project} key={project.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default page;
