import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const StoriesContext = createContext();

const StoriesContextProvider = (props) => {
  const [stories, setStories] = useState(() => {
    const storiesData = localStorage.getItem(props.match.id);
    return storiesData ? JSON.parse(storiesData) : [];
  });

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem(props.match.id, JSON.stringify(stories));
  }, [stories]);

  const addStories = (task) => {
    setStories([...stories, { task: task, id: uuidv4() }]);
  };

  const removeStories = (id) => {
    setStories(stories.filter((task) => task.id !== id));
  };

  const findItem = (id) => {
    const item = stories.find((story) => story.id === id);

    setEditItem(item);
  };

  const editTask = (task, id) => {
    console.log(task, id);
    const newTask = stories.map((story) =>
      story.id === id ? { task, id } : story
    );

    setStories(newTask);
    setEditItem(null);
  };

  return (
    <StoriesContext.Provider
      value={{
        stories,
        addStories,
        removeStories,
        findItem,
        editItem,
        editTask,
      }}
    >
      {props.children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
