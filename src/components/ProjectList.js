import React from "react";
import About from "./About";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectItems = projects.map((project) => (
    <ProjectItem 
      key={project.id}
      name={project.name}
      About={project.about}
      technologies={project.technologies}
    />
  ));
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
