import { projects } from "../../../data/projects";
import ProjectCard from "../../Elements/ProjectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <div className="projects-item-container">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
      <div style={{ height: "300px" }}></div>
    </section>
  );
};

export default Projects;
