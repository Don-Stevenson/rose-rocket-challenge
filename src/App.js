import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import TaskListPage from "./pages/Task-list-page";
import TaskFormPage from "./pages/Task-form-page";
import "./timeline.scss";
import "./index.css"

const App = () => {
  return (
     <Container className="container">
      <h1> Rose Rocket Dispatch Centre</h1>
      <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Driver's Task Schedule
        </NavLink>
        <NavLink
          className="item"
          activeClassName="active"
          exact
          to="/tasks/new"
        >
          Add New Driver Task
        </NavLink>
      </div>
      <Route exact path="/" component={TaskListPage} />
      <Route path="/tasks/new" component={TaskFormPage} />
      <Route path="/tasks/edit/:_id" component={TaskFormPage} />
    </Container>
  );
};

export default App;
