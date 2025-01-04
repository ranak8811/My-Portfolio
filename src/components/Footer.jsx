import Lottie from "lottie-react";
import emailLottie from "../assets/lottie/email.json";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-purple-900 to-black text-white py-8 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Section: Footer Information */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            Let&apos;s Connect!
          </h2>
          <p className="text-gray-300 mb-6">
            Thank you for visiting my portfolio. Feel free to connect with me
            through the platforms below or drop an email!
          </p>
          <div className="flex items-center gap-6 text-2xl">
            {/* Social Links */}
            <a
              href="https://github.com/ranak8811"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ranak8811/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ranakrphone@gmail.com"
              className="text-gray-300 hover:text-pink-500 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            © {new Date().getFullYear()}, All Rights Reserved.
          </p>
        </div>

        {/* Right Section: Lottie Animation */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-80">
            <Lottie animationData={emailLottie} loop />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
