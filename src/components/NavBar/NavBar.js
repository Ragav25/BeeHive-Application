import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { ThemeContext } from "../../context/ThemeContext";

const NavBar = (props) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav id="top-nav" style={{ background: theme.navc, color: theme.textc }}>
      <Link to="/">
        <div id="back-button">{props.children}</div>
      </Link>

      <h4 id="logo">BEE HIVE</h4>
    </nav>
  );
};

export default NavBar;
