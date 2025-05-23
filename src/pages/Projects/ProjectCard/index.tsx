import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { type Project } from "../../../utils/constants";

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  liveDemoLink,
  isLive,
}: Project) => {
  return (
    <div className=" rounded-lg p-10 w-100 bg-[#312c3c]">
      <img src={image} alt={title} className="w-80 h-auto object-cover" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <br />
        {description.map((desc, index) => (
          <li key={index} className="text-gray-400 mb-2 list-disc">
            {desc}
          </li>
        ))}
      </div>
      <div className="flex flex-wrap mt-4">
        <button className="bg-[#68D391]  px-4 py-2 rounded-lg mt-4 mr-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <FaGithub className="inline mr-2" />
            GitHub
          </a>
        </button>
        {isLive && (
          <button className="bg-[#90CDF4]  px-4 py-2 rounded-lg mt-4">
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <FaExternalLinkAlt className="inline mr-2" />
              Live Demo
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
