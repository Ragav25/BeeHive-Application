import React, { useState, useContext, useEffect } from "react";
//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./StoriesInputArea.css";
import { StoriesContext } from "../../context/StoriesContext";

const StoriesInputArea = (props) => {
  const { addStories, editItem, editTask } = useContext(StoriesContext);

  const [task, setTask] = useState("");

  useEffect(() => {
    if (editItem) {
      setTask(editItem.task);
    } else {
      setTask("");
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addStories(task);
      setTask("");
    } else {
      editTask(task, editItem.id);
    }
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
        <Button type="submit"> {editItem ? "EDIT" : "ADD"}</Button>
      </Form>
    </div>
  );
};

export default StoriesInputArea;
