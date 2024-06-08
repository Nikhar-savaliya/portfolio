"use client";
import ProjectItem from "@/components/ui/projectItem";
import React from "react";
import { motion } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    name: "syntaxUI",
    description: "Ready-to-use UI elements designed for rapid development.",
    link: "https://syntaxui.com",
    image: "https://ansubkhan.com/images/projects/syntaxUI.svg",
  },
  {
    id: 2,
    name: "Prettyfolio",
    description: "A curated collection of portfolios for inspiration.",
    link: "https://prettyfolio.com",
    image: "https://ansubkhan.com/images/projects/prettyfolio.png",
  },
  {
    id: 2,
    name: "Enchant",
    description: "A vibrant theme for Visual Studio Code.",
    link: "https://enchant.ansubkhan.com",
    image: "https://ansubkhan.com/images/projects/enchant.png",
  },
  {
    id: 3,
    name: "Ansubkhan.com",
    description: "My personal website, blogs and newsletter.",
    link: "https://ansubkhan.com",
    image: "https://ansubkhan.com/images/projects/portfolio.png",
  },
  {
    id: 4,
    name: "Quote Vault",
    description: "Social media, but for sharing quotes.",
    link: "https://quote-vault.vercel.app",
    image: "https://ansubkhan.com/images/projects/quote-vault.png",
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
      <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3">
        {ProjectsData.map((project) => (
          <ProjectItem {...project} key={project.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default page;
