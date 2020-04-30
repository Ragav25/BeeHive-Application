import React, { useState, useContext, useEffect } from "react";
//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./StoriesInputArea.css";
import { StoriesContext } from "../../context/StoriesContext";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const StoriesInputArea = (props) => {
  const { addStories, editItem, editTask } = useContext(StoriesContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

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
    <div id="stories-body">
      <ThemeToggle id="themetoggle" />
      <div id="stories-area">
        <h1>
          <span>PROJECT:</span> {props.name}
        </h1>
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
          <Button
            type="submit"
            style={{ background: theme.buttonc, color: theme.textc }}
          >
            {" "}
            {editItem ? "EDIT" : "ADD"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StoriesInputArea;
