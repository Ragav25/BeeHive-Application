import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const StoriesContext = createContext();

const StoriesContextProvider = (props) => {
  const [stories, setStories] = useState(() => {
    const storiesData = localStorage.getItem(props.match.id);
    return storiesData ? JSON.parse(storiesData) : [];
  });

  useEffect(() => {
    localStorage.setItem(props.match.id, JSON.stringify(stories));
  }, [stories]);

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
