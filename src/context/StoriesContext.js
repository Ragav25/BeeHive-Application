import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const StoriesContext = createContext();

const StoriesContextProvider = (props) => {
  const [stories, setStories] = useState([
    { id: 0, task: "do workout" },
    { id: 1, task: "do chores" },
  ]);

  const addStories = (task) => {
    setStories([...stories, { task: task, id: uuidv4() }]);
  };

  const removeStories = (id) => {
    setStories(stories.filter((task) => task.id !== id));
  };

  return (
    <StoriesContext.Provider value={{ stories, addStories, removeStories }}>
      {props.children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
