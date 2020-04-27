import React from "react";
// import InitialPage from "./components/Initial";
// import AddingTask from "./components/seperate_tasks/AddTasks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectComponents from "./components/projectcomponents/ProjectComponents";
import StoriesComponent from "./components/projectcomponents/StoriesComponents";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={ProjectComponents} />
          <Route path="/project/:id" component={StoriesComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
