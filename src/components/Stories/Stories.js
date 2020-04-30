import React, { useState, useEffect, useContext } from "react";
import "./Stories.css";
import StoriesInputArea from "../StoriesInputArea/StoriesInputArea";
import { StoriesContext } from "../../context/StoriesContext";
import { ThemeContext } from "../../context/ThemeContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectStories = (props) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const { stories, removeStories, findItem } = useContext(StoriesContext);
  const [project, setProject] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchData = await JSON.parse(localStorage.getItem("projects"));

    fetchData.map((existingData) => {
      if (props.match.id === existingData.id) {
        setProject(existingData);
      }
      return "null";
    });
  };

  return (
    <div
      id="stories-display"
      style={{ background: theme.bg, color: theme.textc }}
    >
      <StoriesInputArea name={project.projectName} />
      {stories.map((task) => {
        return (
          <Card
            key={task.id}
            style={{ background: theme.cardc, color: theme.textc }}
          >
            <Card.Body>
              <Card.Text>{task.task}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                onClick={() => removeStories(task.id)}
                style={{ background: theme.buttonc, color: theme.textc }}
              >
                Delete
              </Button>
              <Button
                onClick={() => findItem(task.id)}
                style={{ background: theme.buttonc, color: theme.textc }}
              >
                EDIT
              </Button>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectStories;
