import SkillGrid from "./SkillGrid";

const Skills = () => {
  return (
    <>
      <div className="mask-image:linear-gradient(to_top,white_90%,transparent_100%) mt-10 transform items-center overflow-hidden rounded-lg p-4 transition-transform duration-500 sm:mt-20 sm:px-8">
        <div className="font-[Iceland] text-4xl sm:text-6xl">
          _Technical Skills
        </div>
        <SkillGrid />
      </div>
    </>
  );
};

export default Skills;
