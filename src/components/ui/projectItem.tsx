"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface cardItemProps {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
  hasImg?: boolean;
}

const CardItem = (project: cardItemProps) => {
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
      className="text-left border bg-muted/40 p-4 rounded-md"
    >
      <a target="_blank" rel="noopener noreferrer" href={project.link}>
        {project.hasImg ?? (
          <Image
            src={project.image}
            width={30}
            height={30}
            className="mb-3 rounded-lg border-muted"
            alt={project.name}
          />
        )}
        <div className="mb-1 font-medium text-primary">{project.name}</div>
        <div className="text-sm font-normal text-muted-foreground line-clamp-2">
          {project.description}
        </div>
      </a>
    </motion.div>
  );
};

export default CardItem;
