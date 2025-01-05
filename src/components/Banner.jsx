import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import profileImg from "../assets/profile.jpeg";

const Banner = () => {
  return (
    <div className="bg-black min-h-[calc(100vh-72px)] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-white">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start space-y-6 w-full md:w-1/2">
        {/* Typewriter Titles */}
        <h1 className="text-4xl md:text-5xl font-bold">
          <Typewriter
            words={["Frontend Developer", "CSE Student"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={70}
          />
        </h1>

        <h2 className="text-4xl font-bold ">
          I&apos;m <span className="text-pink-500">Md. Anwar Hossain</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-md">
          Passionate about creating engaging web experiences and solving
          real-world problems with elegant solutions. I am always exploring new
          technologies to grow as a developer.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/ranak8811"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ranak8811/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/ranaf8811"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaFacebook />
          </a>

          <a
            href="https://x.com/ranak8811"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Download Resume Button */}
        <motion.a
          href="/resume.pdf"
          download
          className="mt-4 inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Download Resume
        </motion.a>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
        <motion.img
          src={profileImg}
          alt="Profile"
          className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-pink-500 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-black to-pink-700 opacity-25 -z-10"></div>
    </div>
  );
};

export default Banner;
