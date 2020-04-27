import React, { useState, useEffect, useContext } from "react";
import "./Stories.css";
import StoriesInputArea from "../StoriesInputArea/StoriesInputArea";
import { StoriesContext } from "../../context/StoriesContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectStories = (props) => {
  const { stories } = useContext(StoriesContext);
  const [project, setProject] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchData = await JSON.parse(localStorage.getItem("projects"));

    fetchData.map((existingData) => {
      console.log("id getting ", existingData.id);
      if (props.match.id === existingData.id) {
        setProject(existingData);
      }
      return "null";
    });

    const indexSearch = fetchData.findIndex(
      (data) => props.match.id === data.id
    );

    console.log(indexSearch);
  };

  return (
    <div id="stories-display">
      <StoriesInputArea name={project.projectName} />
      {stories.map((task) => {
        return (
          <Card key={task.id}>
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body>
              <Card.Text>{task.task}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button>Delete</Button>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectStories;
