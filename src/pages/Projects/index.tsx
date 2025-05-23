import ProjectCard from "./ProjectCard";
import { projects } from "../../utils/constants";
const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl w-50 lg:text-4xl xl:text-6xl lg:w-full font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10 place-items-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
            isLive={project.isLive}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
