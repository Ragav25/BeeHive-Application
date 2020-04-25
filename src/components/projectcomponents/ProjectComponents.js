import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../NavBar/NavBar";
import CreateProjects from "../CreateProjects/CreateProjects";
import ThemeContextProvider from "../../context/ThemeContext";
import ProjectContextProvider from "../../context/ProjectContext";

const ProjectComponents = () => {
  return (
    <>
      <ThemeContextProvider>
        <ProjectContextProvider>
          <NavBar />
          <CreateProjects />
        </ProjectContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default ProjectComponents;
