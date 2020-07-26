import React from "react";
import { NavLink, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import TaskListPage from "./pages/Task-list-page";
import TaskFormPage from "./pages/Task-form-page";
import "./timeline.scss";

import Timeline from "react-calendar-timeline";
import moment from "moment";

const groups = [
  { id: 1, title: "group 1" },
  { id: 2, title: "group 2" }
];

const items = [
  {
    id: 1,
    group: 1,
    title: "item 1",
    start_time: moment().add(0, "hour"),
    end_time: moment().add(1, "hour"),
    canMove: true,
    canResize: false,
    canChangeGroup: false,
    itemProps: {
      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      "data-custom-attribute": "Random content",
      "aria-hidden": true,
      onDoubleClick: () => {
        console.log("You clicked double!");
      },
      className: "weekend",
      style: {
        background: "fuchsia"
      }
    }
  },
  {
    id: 2,
    group: 2,
    title: "item 2",
    start_time: moment().add(-0.5, "hour"),
    end_time: moment().add(0.5, "hour")
  },
  {
    id: 3,
    group: 1,
    title: "item 3",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour")
  }
];

const App = () => {
  return (
    <Container>
      <h1> Rose Rocket Dispatch Centre</h1>
      <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Driver's Task List
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
      <h1> Driver Schedule </h1>
      <div>
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, "hour")}
          defaultTimeEnd={moment().add(12, "hour")}
        />
      </div>
      <Route exact path="/" component={TaskListPage} />
      <Route path="/tasks/new" component={TaskFormPage} />
      <Route path="/tasks/edit/:_id" component={TaskFormPage} />
    </Container>
  );
};

export default App;
