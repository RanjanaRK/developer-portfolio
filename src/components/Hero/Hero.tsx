"use client";

import { motion } from "motion/react";
import Link from "next/link";
import RippleBg from "./RippleBg";
import { Button } from "../ui/button";

const Hero = () => {
  const fadeSlideIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden rounded-lg p-6 sm:p-20 md:shadow-xl">
        <RippleBg />

        <div className="z-10 flex flex-col items-center justify-center space-y-4">
          <motion.h1
            variants={fadeSlideIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeIn", delay: 1 }}
            className="text-center font-[iceland] text-3xl font-bold text-shadow-lg sm:text-5xl"
          >
            Ranjana Kumari
          </motion.h1>

          <motion.h2
            variants={fadeSlideIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, ease: "easeIn", delay: 1 }}
            className="text-center tracking-widest sm:text-xl"
          >
            Full Stack Developer
          </motion.h2>
          {/* <h2 className="text-xl tracking-widest">
            Building Scalable Web Solutions for Today’s Digital World
          </h2> */}

          <motion.p
            animate="visible"
            variants={fadeSlideIn}
            initial="hidden"
            transition={{ duration: 1.2, ease: "easeIn", delay: 1 }}
            className="text-muted-foreground mx-auto max-w-2xl text-center text-sm text-shadow-lg sm:text-base"
          >
            I merge creativity and technical expertise to craft web applications
            that are fast, intuitive, and built to scale. Explore my work to see
            how I turn ideas into reality.
          </motion.p>
          <motion.div
            animate="visible"
            variants={fadeSlideIn}
            initial="hidden"
            transition={{ duration: 1, ease: "easeIn", delay: 1 }}
            className="flex w-full items-center justify-center gap-4 py-4"
          >
            <Link href="/profile">
              <Button className="gap flex cursor-pointer" size={"sm"}>
                Explore My Work
              </Button>
            </Link>
            <Link href="https://github.com/bekacru/better-fetch">
              <Button className="gap flex" variant="secondary" size={"sm"}>
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
