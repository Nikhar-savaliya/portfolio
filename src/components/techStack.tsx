"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { motion } from "framer-motion";

import React from "react";
import { cpp, css, html, java, js, py, ts } from "@/assets/icons/languages";
import { express, next, node, react } from "@/assets/icons/frameworks";
import { firebase, mongodb, postgresql } from "@/assets/icons/databases";
import { git, postman, vscode } from "@/assets/icons/tools";

const languages = [
  { text: "HTML", icon: html },
  { text: "CSS", icon: css },
  { text: "JavaScript", icon: js },
  { text: "TypeScript", icon: ts },
  { text: "Java", icon: java },
  { text: "Python", icon: py },
  { text: "C++", icon: cpp },
];

const frameworks = [
  { text: "React.js", icon: react },
  { text: "Next.js", icon: next },
  { text: "Node.js", icon: node },
  { text: "Express.js", icon: express },
];
const databases = [
  { text: "MongoDB", icon: mongodb },
  { text: "Firebase", icon: firebase },
  { text: "Postgresql", icon: postgresql },
];
const tools = [
  { text: "VScode", icon: vscode },
  { text: "Git", icon: git },
  { text: "Postman", icon: postman },
];

const TechStack = () => {
  return (
    <motion.div
      key={"tech-stack"}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, delay: 0.25 }}
    >
      <TooltipProvider delayDuration={50}>
        <div className="grid  xl:grid-cols-2 gap-8">
          <div>
            <h3 className="mt-6 mb-3 pl-1 pb-2  text-xl font-serif tracking-tight border-b ">
              Languages
            </h3>
            <div className="flex gap-2 flex-wrap">
              {languages.map((lang) => {
                return (
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src={lang.icon}
                        height="40"
                        width={"40"}
                        alt="web tools"
                        className="rounded-md border"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{lang.text}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>

          <div>
            {/* FrameWorks */}
            <h3 className="mt-6 mb-3 pl-1 pb-2 text-xl font-serif tracking-tight border-b">
              Frameworks
            </h3>
            <div className="flex gap-2">
              {frameworks.map((lang) => {
                return (
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src={lang.icon}
                        height="40"
                        width={"40"}
                        alt="web tools"
                        className="rounded-md border"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{lang.text}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
          <div>
            {/* Databases */}
            <h3 className="mt-6 mb-3 pl-1 pb-2 text-xl font-serif tracking-tight border-b">
              Databases
            </h3>
            <div className="flex gap-2">
              {databases.map((lang) => {
                return (
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src={lang.icon}
                        height="40"
                        width={"40"}
                        alt="web tools"
                        className="rounded-md border"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{lang.text}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
          <div>
            {/* Tools */}
            <h3 className="mt-6 mb-3 pl-1 pb-2 text-xl font-serif tracking-tight border-b">
              Tools
            </h3>
            <div className="flex gap-2">
              {tools.map((lang) => {
                return (
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src={lang.icon}
                        height="40"
                        width={"40"}
                        alt="web tools"
                        className="rounded-md border"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{lang.text}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
      </TooltipProvider>
    </motion.div>
  );
};

export default TechStack;
