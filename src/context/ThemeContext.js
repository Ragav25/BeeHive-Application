import React, { Component, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      navc: "#F9C124",
      bg: "#FCFCFC",
      textc: "#FCFCFC",
      buttonc: "#F9C124",
      cardc: "#FEA539",
      switchIcon: <FontAwesomeIcon icon={faMoon} />,
    },
    dark: {
      navc: "#545454",
      bg: "#433A3A",
      textc: "#F9C124",
      buttonc: "#545454",
      cardc: "#392F2B",
      switchIcon: <FontAwesomeIcon icon={faSun} />,
    },
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
