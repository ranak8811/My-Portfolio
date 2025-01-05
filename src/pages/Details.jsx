import { useLoaderData, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Details = () => {
  const { id } = useParams();
  const projects = useLoaderData();

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <h2 className="text-center text-pink-500">Project not found!</h2>;
  }

  const {
    projectImage,
    projectName,
    projectFeatures,
    projectDescription,
    frontendCodeLink,
    backendCodeLink,
    liveSiteLink,
  } = project;

  return (
    <section className="min-h-[calc(100vh-72px)] bg-gradient-to-b from-black via-purple-900 to-black text-white py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section: Project Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={projectImage}
            alt={projectName}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Right Section: Project Details */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Project Name */}
          <h1 className="text-4xl font-bold text-pink-500">{projectName}</h1>

          {/* Project Description */}
          <p className="text-gray-300 text-lg leading-relaxed">
            {projectDescription}
          </p>

          {/* Project Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400">Features:</h2>
            <ul className="list-disc list-inside space-y-2">
              {projectFeatures.map((feature, index) => (
                <li key={index} className="text-gray-300 text-base">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400">Links:</h2>
            <div className="flex gap-4 flex-wrap">
              <a
                href={frontendCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-pink-500 hover:bg-pink-700 transition-all duration-300 text-white rounded-lg shadow-md"
              >
                Frontend Code
              </a>
              <a
                href={backendCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-purple-500 hover:bg-purple-700 transition-all duration-300 text-white rounded-lg shadow-md"
              >
                Backend Code
              </a>
              <a
                href={liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-black border border-pink-500 hover:bg-pink-500 hover:text-black transition-all duration-300 text-white rounded-lg shadow-md"
              >
                Live Site
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Details;
