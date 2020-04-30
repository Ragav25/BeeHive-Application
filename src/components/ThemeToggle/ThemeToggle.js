import React from "react";
import Button from "react-bootstrap/Button";
import "./ThemeToggle.css";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { toggleTheme, isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div id="themetoggle">
            <Button
              onClick={toggleTheme}
              style={{ background: theme.buttonc, color: theme.textc }}
            >
              {theme.switchIcon}
            </Button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;
