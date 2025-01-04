import "../styles/globals.css";
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiC,
} from "react-icons/si";

const skills = [
  {
    name: "Python",
    icon: <FaPython className="text-blue-500 text-4xl" />,
    description: "A versatile programming language.",
  },
  {
    name: "C",
    icon: <SiC className="text-blue-400 text-4xl" />,
    description: "The foundation of programming.",
  },
  {
    name: "C++",
    icon: <SiCplusplus className="text-blue-600 text-4xl" />,
    description: "Object-oriented programming.",
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    description: "Building blocks of the web.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
    description: "Styling websites beautifully.",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-4xl" />,
    description: "Dynamic and interactive web pages.",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-300 text-4xl" />,
    description: "Building dynamic UIs.",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500 text-4xl" />,
    description: "Backend services and hosting.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
    description: "Server-side JavaScript runtime.",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-4xl" />,
    description: "Web framework for Node.js.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-4xl" />,
    description: "NoSQL database for modern apps.",
  },
];

const MySkills = () => {
  const [paused, setPaused] = useState(false);

  const marqueeClasses = (direction) =>
    `flex space-x-6 w-full animate-${direction} ${
      paused ? "pause-marquee" : ""
    }`;

  return (
    <div className="bg-black text-white py-16 px-6 md:px-16" id="skills">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-pink-500 inline-block">
          My Skills
        </h2>
        <p className="text-gray-300 text-lg mt-2">
          A showcase of technologies I’ve worked with.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="space-y-10">
        {/* First Row: Right to Left */}
        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={marqueeClasses("marquee-right")}>
            {skills.slice(0, skills.length / 2).map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Second Row: Left to Right */}
        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={marqueeClasses("marquee-left")}>
            {skills.slice(skills.length / 2).map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => (
  <div className="bg-gradient-to-br from-purple-700 to-pink-500 rounded-lg shadow-lg p-6 w-52 hover:scale-105 hover:shadow-2xl transition transform duration-300">
    <div className="flex flex-col items-center text-center space-y-4">
      {skill.icon}
      <h3 className="text-xl font-semibold">{skill.name}</h3>
      <p className="text-gray-200 text-sm">{skill.description}</p>
    </div>
  </div>
);

export default MySkills;
