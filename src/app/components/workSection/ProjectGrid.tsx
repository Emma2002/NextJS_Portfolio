import ProjectCard from "./ProjectCard";
import { universityProjects, designProjects, ProjectProps } from "./ProjectDetails";
import { useState } from "react";

const ProjectGrid = () => {
  const [filter, setFilter] = useState(true);

  return (
    <>
      <div className="mb-10 flex justify-center gap-16 text-[#e4ded7] md:mb-16 lg:mb-20  ">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setFilter(true)}
        >
          University Projects
        </h4>{" "}
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]/30" : "text-[#e4ded7]"
          }`}
          onClick={() => setFilter(false)}
        >
          Design
        </h4>
      </div>

      {filter ? (
        <div className="flex justify-center items-center h-full">
          <div className="grid w-[80%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
            {universityProjects.map((project: ProjectProps) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-6 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {designProjects.map((project: ProjectProps) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
        </div>
      )}
    </>
  );
};

export default ProjectGrid;
