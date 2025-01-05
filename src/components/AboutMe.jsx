import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16" id="about">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-pink-500 inline-block">
          About Me
        </h2>
        <p className="text-gray-300 text-lg mt-2">
          A journey of passion, learning, and exploration.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Timeline Section */}
        <div className="flex-1 space-y-8">
          {/* Rajshahi University */}
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaGraduationCap className="text-purple-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Rajshahi University</h3>
              <p className="text-gray-400">
                Started my journey at Rajshahi University but didn’t get my
                desired subject. This experience helped me realize my true
                passion for CSE.
              </p>
            </div>
          </motion.div>

          {/* BRAC University */}
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaGraduationCap className="text-pink-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">BRAC University</h3>
              <p className="text-gray-400">
                Joined the CSE department, starting with Python and then
                self-learning C and C++. Participated in BRACU competitive
                programming to sharpen my skills.
              </p>
            </div>
          </motion.div>

          {/* App Development */}
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaLaptopCode className="text-purple-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">App Development</h3>
              <p className="text-gray-400">
                Explored app development using Java and built small projects.
                This gave me a strong foundation in problem-solving and coding.
              </p>
            </div>
          </motion.div>

          {/* Web Development */}
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaCode className="text-pink-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p className="text-gray-400">
                Transitioned to web development due to its growing scope. Gained
                hands-on experience building responsive and functional web
                applications.
              </p>
            </div>
          </motion.div>

          {/* Machine Learning */}
          <motion.div
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FaBrain className="text-purple-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Machine Learning</h3>
              <p className="text-gray-400">
                Currently working on my thesis in machine learning for NLP in
                the medical field, aiming to make impactful contributions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Passion Section */}
        <div className="flex-1">
          <motion.div
            className="p-6 bg-gradient-to-br from-purple-700 to-pink-500 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Why I Love to Learn
            </h3>
            <p className="text-gray-200">
              My journey has been driven by curiosity and a passion for growth.
              Exploring fields like app and web development, competitive
              programming, and machine learning has taught me that continuous
              learning is the key to finding what suits me best.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
