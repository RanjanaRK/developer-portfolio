"use client";

import { projectsData } from "@/lib/data/projectData";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

const ProjectCard = () => {
  return (
    <>
      <div className="relative h-screen md:h-[700px]">
        <ScrollArea className="h-full w-full overflow-hidden rounded-2xl border bg-gray-200/20 dark:bg-gray-900/20">
          {projectsData.map((project) => {
            return (
              <Card
                key={project.id}
                className="bg-background mb-16 px-8 pb-0 shadow sm:sticky md:px-10 md:pt-12"
                style={{
                  top: `calc( ${project.id * 10}px)`,
                }}
              >
                <div className="absolute inset-0 -z-10 rounded-xl bg-[url('/grain.jpg')] opacity-5"></div>

                <div className="">
                  <div className="relative">
                    <h3 className="text-foreground mt-2 font-serif text-2xl md:text-4xl">
                      {project.name}
                    </h3>
                    <hr className="booreground mt-4 border-t-2 border-gray-300 dark:border-gray-800" />
                    <p className="mt-4 text-sm text-gray-600 sm:text-base dark:text-gray-400">
                      {project.description}
                    </p>
                    <ul className="mt-4 flex flex-row flex-wrap gap-4 text-white/50">
                      {project.tech.map((tech, index) => (
                        <li
                          className="rounded-lg bg-black/10 p-2 text-sm text-gray-600 sm:text-base dark:bg-white/10 dark:text-gray-400"
                          key={index}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="my-8 flex flex-row items-center justify-start gap-4">
                      <Link
                        href="/"
                        target="_blank"
                        className="dark:bg-foreground dark:hover:bg-foreground/80 text-background inline-flex h-12 w-2/3 cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-600/80 font-semibold transition-all duration-300 hover:bg-gray-600/45 md:w-2/5"
                      >
                        <span>Source Code</span>
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src={project.projectImage}
                      alt={project.name}
                      height={250}
                      width={250}
                      className="w-full overflow-hidden rounded-t-lg sm:-mb-0 sm:rounded-tl-lg"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
          <div className="grid w-full place-items-center">
            <Link
              href={"/"}
              className="hover:text-muted-foreground py-2 lowercase hover:underline"
            >
              See more
            </Link>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default ProjectCard;
