"use client";

import React from "react";
import { motion } from "framer-motion";

import CardItem from "@/components/ui/projectItem";
import { js } from "@/assets/icons/languages";

const blogsData = [
  {
    id: 6,
    name: "Let's dive into the nitty-gritty details of the .git folder!",
    description:"Not everyone knows how git works under the hood, I was one of them. Then I dived deep to understand Git and this is what I have discovered.",
    link:"https://medium.com/@nikhar-savaliya/behind-the-push-talking-about-github-7faf348ef36a",
    image: js,
  },
  {
    id: 5,
    name: "Behind the Push: Talking about GitHub",
    description:"If you have been following my last article “Let's dive into the nitty-gritty details of the .git folder!”, we have discussed local Git…",
    link:"https://medium.com/@nikhar-savaliya/behind-the-push-talking-about-github-7faf348ef36a",
    image: js,
  },
  {
    id: 1,
    name: "JavaScript 'const arr = [ ]' is not an Array!",
    description:
      "you might have seen something like this const arr = [] , in terms of data structures this typical declaration is not array. Lets understand what an array really is.",
    link: "https://medium.com/@nikhar-savaliya/javascript-const-arr-is-not-an-array-d48a788d806f",

    image: js,
  },
  {
    id: 2,
    name: "A Deep dive into JavaScript - JS01",
    description:
      "If I had to Learn Javascript for Web development or Even for DSA, what would I learn? I have created This Blog for those who are looking to brush up their JS skills or just want to learn more about JS.",
    link: "https://medium.com/@nikhar-dev/a-deep-dive-into-javascript-01-9b6ce63944ae",
    image: js,
  },
  {
    id: 3,
    name: "JavaScript Type Mutability and Type Conversion — JS02",
    description:
      "There are 2 Data Types in JavaScript. primitive types are immutable, which means that once the primitive value is created it can not be modified or altered directly.",
    link: "https://medium.com/@nikhar-dev/javascript-type-mutability-and-type-conversion-js02-fc3f2250ee64",
    image: js,
  },
  {
    id: 4,
    link: "https://medium.com/@nikhar-dev/this-is-all-you-need-to-know-about-strings-in-javascript-ed9c6c7e3786",
    name: "This is all you need to know about Strings in JavaScript",
    description:
      "In JavaScript, we can create a string using 2 methods : [1] using string literals , [2] using String class constructor.",
    image: js,
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
      <div className="grid w-full gap-4">
        {blogsData.map((project) => (
          <CardItem {...project} key={project.id} hasImg={false} />
        ))}
      </div>
    </motion.div>
  );
};

export default page;
