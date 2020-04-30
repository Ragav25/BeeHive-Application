import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar/NavBar";
import ThemeContextProvider from "../../context/ThemeContext";
import Stories from "../Stories/Stories";
import StoriesComponentProvider from "../../context/StoriesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

const StoriesComponent = ({ match }) => {
  return (
    <>
      <ThemeContextProvider>
        <StoriesComponentProvider match={match.params}>
          <NavBar>
            <Button className="btn-arrow-left">
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Button>
          </NavBar>
          <Stories match={match.params} />
        </StoriesComponentProvider>
      </ThemeContextProvider>
    </>
  );
};

export default StoriesComponent;
