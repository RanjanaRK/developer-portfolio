"use client";
import { motion } from "motion/react";
import { Element } from "react-scroll";
import AboutSection from "./AboutSection/AboutSection";
import Contact from "./Contact/Contact";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Skills from "./SkillSection/Skills";

const SectionWrapper = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <Element name="about">
            <AboutSection />
          </Element>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <Element name="skills">
            <Skills />
          </Element>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <Element name="projects">
            <ProjectsSection />
          </Element>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
        >
          <Element name="contact">
            <Contact />
          </Element>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper;
