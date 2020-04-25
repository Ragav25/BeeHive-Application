import React, { useContext } from "react";
import "./NavBar.css";
import { ThemeContext } from "../../context/ThemeContext";
import { ProjectContext } from "../../context/ProjectContext";

const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { projects } = useContext(ProjectContext);
  return (
    <nav id="top-nav" style={{ background: theme.navc, color: theme.textc }}>
      <h4 id="logo">BEE HIVE</h4>
      <p>Currently you have {projects.length} Projects</p>
    </nav>
  );
};

export default NavBar;
