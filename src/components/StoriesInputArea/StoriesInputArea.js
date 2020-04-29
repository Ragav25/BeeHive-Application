import React, { useState, useContext } from "react";
//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./StoriesInputArea.css";
import { StoriesContext } from "../../context/StoriesContext";

const StoriesInputArea = (props) => {
  const { addStories } = useContext(StoriesContext);

  const [task, setTask] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    addStories(task);
    setTask("");
  };

  return (
    <div id="stories-area">
      <h1>{props.name}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>ADD STORIES</Form.Label>
          <Form.Control
            value={task}
            onChange={(e) => setTask(e.target.value)}
            as="textarea"
            rows="5"
            type="text"
            placeholder="Add Stories"
            required
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default StoriesInputArea;
