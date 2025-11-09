const ProjectCard = ({ image, title, description, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
