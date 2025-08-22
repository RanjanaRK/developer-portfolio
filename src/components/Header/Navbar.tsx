"use client";

import { Code, Contact, Layers, UserRound } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-scroll";
import ThemeToggle from "../ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import ResumeButton from "./ResumeButton";
import ProgressiveBlur from "../magicui/progressive-blur";

const Navbar = () => {
  const { theme } = useTheme();
  const { push } = useRouter();

  const themeNotify = () => {
    if (theme === "dark") {
      toast("light", {
        duration: 800,
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#333",
        },
      });
    }
    if (theme === "light") {
      toast("dark", {
        duration: 800,

        style: {
          background: "#000",
          color: "#fff",
          padding: "12px",
          borderRadius: "10px",
        },
      });
    }
  };

  const menuLinks = [
    { name: "about", icon: <UserRound size={24} /> },
    { name: "skills", icon: <Layers size={24} /> },
    { name: "projects", icon: <Code size={24} /> },
    { name: "contact", icon: <Contact size={24} /> },
  ];

  return (
    <>
      <header className="flex justify-center shadow">
        <div className="fixed bottom-4 z-50 mx-auto flex shrink items-center justify-between rounded-xl border bg-transparent p-0.5 shadow-xl backdrop-blur-xl sm:gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <div onClick={() => push("/")}>
                    <h1 className="group relative flex cursor-pointer items-center justify-center rounded-full p-3 transition-all duration-300">
                      <span className="absolute inset-0 scale-0 transform rounded-full bg-gradient-to-tr from-white via-[#f7fbff] to-[#5191c2] opacity-0 transition-all duration-300 group-hover:opacity-20 hover:scale-125 dark:hover:bg-gradient-to-tr dark:hover:from-[#0c2b44] dark:hover:via-[#1f3b70] dark:hover:to-[#32659d]"></span>
                      <div className="h-full w-full">
                        <Image
                          src="/images/Rlogo.png"
                          alt=""
                          height={26}
                          width={26}
                          priority
                          className="relative z-30 h-full w-full rounded-full transition-transform duration-300 hover:scale-125"
                        />
                      </div>
                    </h1>
                  </div>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {menuLinks.map((items) => (
            <TooltipProvider key={items.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Link
                      to={items.name}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      <h1 className="group relative flex cursor-pointer items-center justify-center rounded-full p-3 transition-all duration-300">
                        <span className="absolute inset-0 scale-0 transform rounded-full bg-gradient-to-tr from-white via-[#f7fbff] to-[#5191c2] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-20 dark:bg-gradient-to-tr dark:from-[#09203f] dark:via-[#537895] dark:to-[#a1c4fd]"></span>
                        <span className="relative z-10 transition-transform duration-300 group-hover:scale-125">
                          <span className="h-4 w-4 sm:h-5 sm:w-5">
                            {items.icon}
                          </span>
                        </span>
                      </h1>
                    </Link>
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{items.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}

          <div className="dark:bg-woodsmoke-800/5 bg-woodsmoke-800/90 h-6 w-px border"></div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <h1 className="group relative flex items-center justify-center rounded-full p-3 transition-all duration-300">
                  <span className="absolute inset-0 scale-0 transform rounded-full bg-gradient-to-tr from-white via-[#f7fbff] to-[#5191c2] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-20 dark:bg-gradient-to-tr dark:from-[#09203f] dark:via-[#537895] dark:to-[#a1c4fd]"></span>
                  <span className="relative z-10 h-6 w-6 transition-transform duration-300 group-hover:scale-125">
                    <ResumeButton />
                  </span>
                </h1>
              </TooltipTrigger>
              <TooltipContent>
                <p>Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <h1 className="group relative flex items-center justify-center rounded-full p-3 transition-all duration-300">
                  <span className="absolute inset-0 scale-0 transform rounded-full bg-gradient-to-tr from-white via-[#f7fbff] to-[#5191c2] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-20 dark:bg-gradient-to-tr dark:from-[#09203f] dark:via-[#537895] dark:to-[#a1c4fd]"></span>
                  <span className="relative z-10 h-6 w-6 transition-transform duration-300 group-hover:scale-125">
                    <div onClick={themeNotify}>
                      <ThemeToggle />
                    </div>
                  </span>
                </h1>
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <ProgressiveBlur
          position="top"
          className="fixed"
          height="10%"
        />
        <ProgressiveBlur
          position="bottom"
          className="fixed"
          height="18%"
        />
      </header>

      <Toaster position="top-center" />
    </>
  );
};

export default Navbar;
