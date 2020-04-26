import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProjectList.css";
import { ProjectContext } from "../../context/ProjectContext";
import { ThemeContext } from "../../context/ThemeContext";

const ProjectList = () => {
  const { projects, removeProject } = useContext(ProjectContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return projects.length ? (
    <div id="project-list">
      {projects.map((project) => {
        return (
          <Card
            style={{ background: theme.cardc, color: theme.textc }}
            key={project.id}
          >
            <Card.Body>
              <Card.Title>{project.projectName}</Card.Title>

              <Card.Text>{project.description}</Card.Text>

              <Button
                onClick={() => removeProject(project.id)}
                style={{ background: theme.buttonc, color: theme.textc }}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  ) : (
    <div className="empty">
      <Card
        className="text-center"
        id="empty-card"
        style={{ background: theme.cardc, color: theme.textc }}
      >
        <Card.Header>SORRY!</Card.Header>
        <Card.Body>
          <Card.Title>No Project Created </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectList;
