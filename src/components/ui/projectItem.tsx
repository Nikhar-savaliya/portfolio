"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface projectItemProps {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
}

const ProjectItem = (project: projectItemProps) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        bounce: 0.7,
      }}
      key={project.id}
      className="mt-5 text-left hover:border hover:bg-muted/30 p-6 rounded-md"
    >
      <a target="_blank" rel="noopener noreferrer" href={project.link}>
        <Image
          src={project.image}
          width={30}
          height={30}
          className="mb-3 rounded-lg border-muted"
          alt={project.name}
        />
        <div className="mb-1 font-medium text-primary">{project.name}</div>
        <div className="max-w-[300px] text-sm font-normal text-muted-foreground">
          {project.description}
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectItem;
