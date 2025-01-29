import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/portfolio.png";
import { Typewriter } from "react-simple-typewriter";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral text-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Start Part: Logo */}
        <div className="flex items-center">
          <img className="w-auto h-10 mr-2" src={logo} alt="" />
          <h1 className="text-2xl font-bold text-pink-500">
            <Typewriter
              words={["Md.", "Anwar", "Hossain"]}
              loop={true}
              cursor
              cursorStyle=">"
              typeSpeed={100}
              deleteSpeed={70}
            />
          </h1>
        </div>

        {/* Middle Part: Nav Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link to={"/"} className="hover:text-secondary">
            Home
          </Link>
          <a href="#about" className="hover:text-secondary">
            About
          </a>
          <a href="#projects" className="hover:text-secondary">
            Projects
          </a>
          <a href="#contact" className="hover:text-secondary">
            Contact
          </a>
        </div>

        {/* End Part: Resume Button */}
        <div className="hidden md:block">
          <a
            href="/Resume_of_Anwar_Hossain.pdf"
            download
            className="btn btn-secondary text-white hover:scale-105 transition-transform"
          >
            Download Resume
          </a>
        </div>

        {/* Hamburger Menu for Mobile/Tablet */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={handleToggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral text-base-100">
          <div className="flex flex-col space-y-4 px-4 py-4 text-lg font-medium">
            <a
              href="#home"
              className="hover:text-secondary"
              onClick={handleToggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-secondary"
              onClick={handleToggleMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-secondary"
              onClick={handleToggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-secondary"
              onClick={handleToggleMenu}
            >
              Contact
            </a>
            <a
              href="/Resume_of_Anwar_Hossain.pdf"
              download
              className="mt-2 inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform text-white"
              onClick={handleToggleMenu}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
