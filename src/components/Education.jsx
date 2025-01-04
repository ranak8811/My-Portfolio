const Education = () => {
  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-b from-black via-purple-900 to-black"
    >
      <h2 className="text-center text-4xl font-bold text-pink-500 mb-12">
        Education
      </h2>
      <div className="container mx-auto px-6 lg:px-20">
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute hidden lg:block w-1 bg-purple-500 top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>

          {/* Rajshahi University */}
          <div className="timeline-item flex flex-col lg:flex-row items-center lg:items-start mb-12">
            <div className="timeline-content lg:w-1/2 text-center lg:text-right pr-6">
              <h3 className="text-xl text-pink-400 font-semibold">
                Rajshahi University
              </h3>
              <p className="text-sm text-gray-300">
                Admitted:{" "}
                <span className="text-pink-500">January 2022 (First Week)</span>
              </p>
              <p className="text-gray-400 italic">Moved to BRAC University</p>
            </div>
            <div className="timeline-point bg-pink-500 w-6 h-6 rounded-full border-4 border-black z-10 mx-auto lg:mx-0"></div>
            <div className="timeline-connector lg:w-1/2"></div>
          </div>

          {/* BRAC University */}
          <div className="timeline-item flex flex-col lg:flex-row items-center lg:items-start mb-12">
            <div className="timeline-connector lg:w-1/2"></div>
            <div className="timeline-point bg-pink-500 w-6 h-6 rounded-full border-4 border-black z-10 mx-auto lg:mx-0"></div>
            <div className="timeline-content lg:w-1/2 text-center lg:text-left pl-6">
              <h3 className="text-xl text-pink-400 font-semibold">
                BRAC University
              </h3>
              <p className="text-sm text-gray-300">
                Joined:{" "}
                <span className="text-pink-500">January 2022 (Last Week)</span>
              </p>
              <p className="text-sm text-gray-300">
                Expected Graduation:{" "}
                <span className="text-pink-500">Fall 2025</span>
              </p>
              <p className="text-gray-400 italic">
                Learned courses like Data Structures, Algorithms, AI,
                Networking, Computer Graphics, Databases, Software Engineering,
                and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
