import React from "react";
import "./App.css";
// import InitialPage from "./components/Initial";
import AddingTask from "./components/seperate_tasks/AddTasks";

class App extends React.Component {
  render() {
    return (
      <>
        <AddingTask />
      </>
    );
  }
}

export default App;
