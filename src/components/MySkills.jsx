/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { RiMapPinAddFill } from "react-icons/ri";
import {
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiTailwindcss,
  SiC,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: FaPython, color: "text-blue-500" },
  { name: "C", icon: SiC, color: "text-blue-400" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-blue-300" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "More on the way", icon: RiMapPinAddFill, color: "text-white" },
];

const MySkills = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16" id="skills">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-pink-500 inline-block">
          My Skills
        </h2>
        <p className="text-gray-300 text-lg mt-2">
          A showcase of technologies I’ve worked with.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    whileHover={{ scale: 1.1 }}
    className="bg-gradient-to-br from-purple-700 to-pink-500 rounded-lg shadow-lg p-6 flex flex-col items-center text-center space-y-4 transition transform duration-300"
  >
    <skill.icon className={`${skill.color} text-4xl`} />
    <h3 className="text-xl font-semibold">{skill.name}</h3>
  </motion.div>
);

export default MySkills;
