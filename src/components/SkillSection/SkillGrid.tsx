"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { skills } from "./SkillsData";

const SkillGrid = () => {
  const [filter, setFilter] = useState("all");

  const getFilteredSkills = () => {
    if (filter === "all") return [...skills.frontend, ...skills.backend];
    if (filter === "frontend") return skills.frontend;
    if (filter === "backend") return skills.backend;
    return [];
  };

  return (
    <>
      <div className="mx-auto">
        <div className="mb-6 flex space-x-4">
          <Button
            variant={"link"}
            onClick={() => setFilter("all")}
            className={`transition-colors ${
              filter === "all" ? "underline" : ""
            }`}
          >
            All
          </Button>
          <Button
            variant={"link"}
            onClick={() => setFilter("frontend")}
            className={`transition-all ${
              filter === "frontend" ? "underline" : ""
            }`}
          >
            Frontend
          </Button>
          <Button
            variant={"link"}
            onClick={() => setFilter("backend")}
            className={`transition-colors ${
              filter === "backend" ? "underline" : ""
            }`}
          >
            Backend
          </Button>
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {getFilteredSkills().map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative rounded-lg border px-4 py-2 text-center font-medium shadow transition-all duration-300"
              >
                <div className="absolute inset-0 -z-10 rounded-lg group-hover:bg-[url('/grain.jpg')] group-hover:opacity-5"></div>

                <span className="z-10 transition-opacity duration-300 group-hover:opacity-0">
                  {skill.name}
                </span>
                <motion.div
                  layout
                  className="absolute bottom-2 left-[85px] z-20 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  {skill.logo && (
                    <div className="text-foreground h-6 w-6 fill-current">
                      {skill.logo}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default SkillGrid;
