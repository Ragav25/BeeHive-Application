import React, { useState, createContext, useEffect } from "react";
import uuid from "uuid/v1";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState([], () => {
    const localData = localStorage.getItem("projects");
    return localData ? JSON.parse(localData) : [];
  });
  // { projectName: "To-Do-Application", description: "doing to do app", id: 1 },
  // { projectName: "Portfolio", description: "creating portfolio", id: 2 },

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (projectName, description) => {
    setProjects([
      ...projects,
      { projectName: projectName, description: description, id: Date.now() },
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
