import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProjectList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

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
            <Card.Header>
              <FontAwesomeIcon icon={faPen} id="edit-icon" />
            </Card.Header>
            <Card.Body key={project.id}>
              <Card.Title>{project.projectName}</Card.Title>

              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={`/project/${project.id}`}>
                <Button
                  style={{ background: theme.buttonc, color: theme.textc }}
                >
                  VIEW
                </Button>
              </Link>

              <Button
                onClick={() => removeProject(project.id)}
                style={{ background: theme.buttonc, color: theme.textc }}
              >
                DELETE
              </Button>
            </Card.Footer>
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
