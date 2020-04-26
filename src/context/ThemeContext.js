import React, { Component, createContext } from "react";

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
      switchText: "Dark Mode",
    },
    dark: {
      navc: "#545454",
      bg: "#433A3A",
      textc: "#F9C124",
      buttonc: "#545454",
      cardc: "#392F2B",
      switchText: "Light Mode",
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
