import PropTypes from "prop-types";
import "./ExperienceCard.css";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-card-date">
        <span>{experience.duration}</span>
      </div>
      <div className="experience-card-content">
        <h3 className="experience-title">
          {experience.title}
          <span className="experience-company"> · {experience.company}</span>
        </h3>
        <p className="experience-description">{experience.description}</p>
        <div className="experience-tags">
          {experience.technologies.map((tech, index) => (
            <span key={index} className="experience-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ExperienceCard;
