import React, { useContext } from "react";
import "./ProjectList.css";
import { ProjectContext } from "../../context/ProjectContext";

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);
  return projects.length ? (
    <div className="project-list">
      <ul>
        {projects.map((project) => {
          return (
            <li>
              <div className="project-name">Name: {project.projectName}</div>
              <div className="project-description">
                Description: {project.description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Project Created!!</div>
  );
};

export default ProjectList;
