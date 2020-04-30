import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [projects, setProjects] = useState(() => {
    const localData = localStorage.getItem("projects");
    return localData ? JSON.parse(localData) : [];
  });

  const [editItem, setEditItem] = useState();
  const [isEdit, setIsEdit] = useState(false);

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
    localStorage.removeItem(id);
  };

  const findItem = (id) => {
    const item = projects.find((project) => project.id === id);

    setEditItem(item);
    setIsEdit({ edit: true });
    console.log(editItem);
  };

  const editProject = (projectName, description, id) => {
    const items = projects.map((project) =>
      project.id === id ? { projectName, description, id } : project
    );
    console.log(items);
    setProjects(items);
    setEditItem();
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        removeProject,
        findItem,
        editProject,
        isEdit,
        editItem,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
