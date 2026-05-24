import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2 className="project-name">{project.name}</h2>
      <p className="project-description">{project.description}</p>

      {project.technologies && (
        <div className="project-tags">
          {project.technologies.map((tech, index) => (
            <span className="project-tag" key={index}>
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
