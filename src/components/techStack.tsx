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

const TechStack = () => {
  return (
    <motion.div
      key={"tech-stack"}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
    >
      <TooltipProvider delayDuration="50">
        <h3 className="mt-8 mb-3 pl-1 pb-2 border-b font-semibold text-lg ">
          Languages
        </h3>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=html"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>HTML</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=css"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>CSS</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=js"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>JavaScript</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=ts"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>TypeScript</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=java"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Java</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=py"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Python</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=cpp"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>C++</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* FrameWorks */}
        <h3 className="mt-6 mb-3 pl-1 pb-2 border-b  font-semibold text-lg">
          Frameworks
        </h3>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=react"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>React.js</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=next"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Next.js</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=tailwind"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Tailwind CSS</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=nodejs"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Node.js</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=express"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Express.js</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Databases */}
        <h3 className="mt-6 mb-3 pl-1 pb-2 border-b  font-semibold text-lg">
          Databases
        </h3>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=mongo"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>MongoDB</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=firebase"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Firebase</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=appwrite"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Appwrite</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <Image
                src="https://skillicons.dev/icons?i=postgres"
                height="40"
                width={"40"}
                alt="web tools"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Postgres</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </motion.div>
  );
};

export default TechStack;
