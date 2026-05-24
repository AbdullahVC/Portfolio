import { About, Experiences, Projects, Skills } from "../../Sections";
import "./Main.css";

const Main = () => {
  return (
    <main className="main-container">
      <section id="about" className="main-section" aria-label="Hakkımda">
        <h2 className="sr-only">Hakkımda</h2>
        <About />
      </section>
      <section id="skills" className="main-section" aria-label="Yeteneklerim">
        <h2 className="sr-only">Yeteneklerim</h2>
        <Skills />
      </section>
      <section
        id="experiences"
        className="main-section"
        aria-label="Deneyimlerim">
        <h2 className="sr-only">Deneyimlerim</h2>
        <Experiences />
      </section>
      <section id="projects" className="main-section" aria-label="Projelerim">
        <h2 className="sr-only">Projelerim</h2>
        <Projects />
      </section>
    </main>
  );
};

export default Main;
