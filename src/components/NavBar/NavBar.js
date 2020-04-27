import React, { useContext } from "react";
import "./NavBar.css";
import { ThemeContext } from "../../context/ThemeContext";

const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav id="top-nav" style={{ background: theme.navc, color: theme.textc }}>
      <h4 id="logo">BEE HIVE</h4>
    </nav>
  );
};

export default NavBar;
