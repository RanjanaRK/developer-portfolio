"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { skills } from "./SkillsData";

const filters = ["all", "frontend", "backend"] as const;

const SkillGrid = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const { theme } = useTheme();

  const getFiltered = () => {
    if (filter === "all") return [...skills.frontend, ...skills.backend];
    return skills[filter];
  };

  return (
    <>
      <div className="mx-auto max-w-2xl py-4">
        <div className="relative mb-6 flex">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              layout
              initial={false}
              animate={{
                color:
                  filter === f
                    ? theme === "dark"
                      ? "#fff"
                      : "#000"
                    : theme === "dark"
                      ? "#99a1af"
                      : "#4a5565",
              }}
              className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {filter === f && (
                <motion.div
                  layoutId="underline"
                  className="bg-foreground absolute right-0 bottom-0 left-0 h-0.5"
                />
              )}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {getFiltered().map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative rounded-lg border px-4 py-2 text-center font-medium shadow"
              >
                <div className="absolute inset-0 -z-10 rounded-lg group-hover:bg-[url('/grain.jpg')] group-hover:opacity-5" />

                <span className="z-10 transition-opacity duration-300 group-hover:opacity-0">
                  {skill.name}
                </span>
                <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {skill.logo && (
                    <div className="text-foreground h-6 w-6 fill-current">
                      {skill.logo}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default SkillGrid;
