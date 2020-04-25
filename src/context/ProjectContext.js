import React, { useState, createContext } from "react";
import uuid from "uuid/v1";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState([
    { projectName: "To-Do-Application", description: "doing to do app", id: 1 },
    { projectName: "Portfolio", description: "creating portfolio", id: 2 },
  ]);

  const addProject = (projectName, description) => {
    setProjects([
      ...projects,
      { projectName: projectName, description: description, id: uuid() },
    ]);
  };

  const removeProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, removeProject }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
