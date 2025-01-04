/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-black via-purple-900 to-black"
    >
      <h2 className="text-center text-4xl font-bold text-pink-500 mb-12">
        My Projects
      </h2>
      <div className="container mx-auto px-6 lg:px-20">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-xl shadow-lg bg-gradient-to-b from-purple-800 to-black overflow-hidden"
            >
              {/* Project Image */}
              <img
                src={project.projectImage}
                alt={project.projectName}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Project Details */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-pink-400 mb-2">
                  {project.projectName}
                </h3>
                <div className="text-gray-300 space-y-2">
                  {/* Frontend Code Link */}
                  <a
                    href={project.frontendCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-purple-400 underline hover:text-pink-500 transition-colors duration-300"
                  >
                    Frontend Code
                  </a>
                  <br />
                  {/* Live Site Link */}
                  <a
                    href={project.liveSiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-purple-400 underline hover:text-pink-500 transition-colors duration-300"
                  >
                    Live Site
                  </a>
                  <br />
                  <Link to={`/details/${project.id}`}>View Details</Link>
                </div>
              </div>

              {/* Hover Animation - Card Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900 opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
