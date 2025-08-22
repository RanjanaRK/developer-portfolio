"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex cursor-pointer items-center"
      >
        <Sun
          size={24}
          className="scale-100 opacity-100 transition-transform duration-300 dark:scale-0 dark:opacity-0"
        />

        <MoonStar
          size={24}
          className="absolute scale-0 opacity-0 transition-transform duration-300 dark:scale-100 dark:opacity-100"
        />
      </button>
    </>
  );
};

export default ThemeToggle;
