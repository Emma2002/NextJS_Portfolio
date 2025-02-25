"use client"
import ProjectCard from "./ProjectCard";
import { universityProjects, otherProjects, ProjectProps } from "./ProjectDetails";
import { useState } from "react";


const ProjectGrid = () => {
  const [filter, setFilter] = useState("university");

  return (
    <>
      <div className="mb-10 flex justify-center gap-16 md:mb-16 lg:mb-20">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] cursor-pointer transition-all duration-300 px-6 py-3 rounded-lg border-2 ${
            filter === "university"
              ? "bg-[#e4ded7] text-[#2a2a2a] border-[#e4ded7]"
              : "text-[#e4ded7]/30 hover:text-[#e4ded7] hover:border-[#e4ded7] hover:bg-[#2a2a2a] border-transparent"
          }`}
          onClick={() => setFilter("university")}
        >
          University Projects
        </h4>
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] cursor-pointer transition-all duration-300 px-6 py-3 rounded-lg border-2 ${
            filter === "other"
              ? "bg-[#e4ded7] text-[#2a2a2a] border-[#e4ded7]"
              : "text-[#e4ded7]/30 hover:text-[#e4ded7] hover:border-[#e4ded7] hover:bg-[#2a2a2a] border-transparent"
          }`}
          onClick={() => setFilter("other")}
        >
          Other
        </h4>
      </div>

      <div className="flex justify-center items-center h-full">
        <div className="grid w-[80%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {filter === "university" &&
            universityProjects.map((project: ProjectProps) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          {filter === "other" &&
            otherProjects.map((project: ProjectProps) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProjectGrid;
