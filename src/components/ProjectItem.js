import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologyElements = technologies.map((technology) => (
    <span key={technology}>{technology}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologyElements}</div>
        {/* render a <span> for each technology in the technologies array */}
    </div>
  );
}

export default ProjectItem;
