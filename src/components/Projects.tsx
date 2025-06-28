import { ExternalLink, Github } from "lucide-react";
import ProjectMap from "./ProjectMap";

function Projects() {
  return (
    <div className="px-10 py-16 bg-gray-50">
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {ProjectMap.map((project, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-2"
          >
            <div className="overflow-hidden h-60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              <div className="flex space-x-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
