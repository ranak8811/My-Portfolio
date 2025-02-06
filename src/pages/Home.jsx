import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Education from "../components/Education";
import MySkills from "../components/MySkills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  // console.log(projects.length);
  return (
    <div>
      <header>
        <Banner></Banner>
      </header>

      <section>
        <AboutMe></AboutMe>
      </section>
      <section>
        <MySkills></MySkills>
      </section>
      <section>
        <Education></Education>
      </section>

      <section>
        <Projects projects={projects}></Projects>
      </section>

      <section>
        <ContactMe></ContactMe>
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
