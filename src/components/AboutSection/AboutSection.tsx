"use client";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const AboutSection = () => {
  const fadeSlideIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <div className="mask-image:linear-gradient(to_top,white_90%,transparent_100%) bg-background/20 relative mt-10 transform items-center overflow-hidden rounded-lg p-4 transition-transform duration-500 sm:mt-20 sm:px-8 dark:bg-gray-900/20">
        <div className="absolute inset-0 -z-10 rounded-xl bg-[url(/grain.jpg)] opacity-[4%]"></div>

        <div className="space-y-3 py-4">
          <div className="font-[Iceland] text-4xl sm:text-6xl">_About Me</div>

          <div className="flex flex-col-reverse justify-between gap-6 sm:flex-row">
            <motion.div
              className="flex flex-col gap-2 text-sm leading-7 text-gray-600 sm:w-2/3 sm:text-base dark:text-gray-400"
              variants={fadeSlideIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.4, ease: "easeIn" }}
            >
              <span className="">
                Hello 👋🏼 — I&apos;m a
                <span className="font-bold"> fullstack developer </span>
                passionate about building intuitive and scalable applications. I
                specialize in Next.js, Tailwind CSS, Fastify, and Prisma,
                ensuring clean architecture and optimized performance. My
                expertise includes relational databases, schema validation, and
                dynamic UI effects.
                <span>
                  I enjoy solving complex problems with well-structured, modular
                  code. Through personal projects, I continuously refine my
                  skills and explore new technologies.
                </span>
              </span>
            </motion.div>

            <motion.div
              className="rounded-lg sm:px-2"
              variants={fadeSlideIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.4, ease: "easeIn" }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src="/images/ppic.jpeg"
                  alt="image"
                  loading="lazy"
                  height={200}
                  width={190}
                  className="h-auto w-auto rounded-lg border-2 sm:h-auto sm:w-[270px] md:h-auto md:w-[300px]"
                />

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="absolute top-2 right-2 hidden h-3 w-3 items-center justify-center sm:flex">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-600 opacity-75"></span>
                        <span className="relative inline-flex h-full w-full rounded-full bg-lime-600"></span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Actively Seeking Job Opportunities</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
