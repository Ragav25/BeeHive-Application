import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../NavBar/NavBar";
import ThemeContextProvider from "../../context/ThemeContext";
import Stories from "../Stories/Stories";
import StoriesComponentProvider from "../../context/StoriesContext";

const StoriesComponent = ({ match }) => {
  return (
    <>
      <ThemeContextProvider>
        <StoriesComponentProvider>
          <NavBar />
          <Stories match={match.params} />
        </StoriesComponentProvider>
      </ThemeContextProvider>
    </>
  );
};

export default StoriesComponent;
