import React, { useContext } from "react";
//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./CreateProjects.css";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import ProjectList from "../ProjectList/ProjectList";

const CreateProjects = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div id="project-body" style={{ background: theme.bg, color: theme.textc }}>
      <h2 id="project-heading">WELCOME TO BEE HIVE</h2>

      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Project's Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Project Description"
          />
        </Form.Group>
        <Button
          id="add-button"
          type="submit"
          style={{ background: theme.buttonc, color: theme.textc }}
        >
          ADD PROJECT
        </Button>
      </Form>
      <ThemeToggle />
      <ProjectList />
    </div>
  );
};

export default CreateProjects;
