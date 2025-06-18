import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <>
      <div className="mask-image:linear-gradient(to_top,white_90%,transparent_100%) mt-10 transform items-center overflow-hidden rounded-lg px-4 transition-transform duration-500 sm:mt-20 sm:px-8">
        <div className="font-[Iceland] text-4xl sm:text-6xl">_Projects</div>
        <div className="py-4 text-sm text-gray-600 sm:text-base dark:text-gray-400">
          See how I transformed concepts into engaging digital experiences.
        </div>
        <ProjectCard />
      </div>
    </>
  );
};

export default ProjectsSection;
