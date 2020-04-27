import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState(() => {
    const localData = localStorage.getItem("projects");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (projectName, description) => {
    setProjects([
      ...projects,
      { projectName: projectName, description: description, id: uuidv4() },
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