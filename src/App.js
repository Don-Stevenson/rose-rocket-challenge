// import React, { useState, useEffect } from "react";
// import "./App.css";


// old page
// database for schedule and tasks

// let schedule = [
//   {
//     driverID: 1,
//     driverName: "Omar D.",
//     tasks: [
//       {
//         id: "",
//         pickup: { location: "Burlington", date: "", time: "" },
//         dropOff: { location: "", date: "", time: "" },
//         other: ""
//       }
//     ]
//   },
//   {
//     driverID: 2,
//     driverName: "Cheryl S.",
//     task: [
//       {
//         id: "",
//         pickup: { location: "", date: "", time: "" },
//         dropOff: { location: "Toronto", date: "", time: "" },
//         other: ""
//       }
//     ]
//   },
//   {
//     driverID: 3,
//     driverName: "Ferdinand R.",
//     task: [
//       {
//         id: "",
//         pickup: { location: "Hamilton", date: "", time: "" },
//         dropOff: { location: "", date: "", time: "" },
//         other: ""
//       }
//     ]
//   }
// ];

// const deleteTask = (driverID, task) => {
//   console.log("in delete task", schedule[driverID]);
// };

// // deleteTask(1)

// const updateTask = (driverID, taskNo, newLocation) => {
//   console.log(
//     "in updatetask",
//     (schedule[driverID].task[taskNo].dropOff.location = newLocation)
//   );
//   return <h3>{(schedule[driverID].task[taskNo].dropOff.location = newLocation)}</h3>;
// };

// // updateTask(1)

// const createTask = (driverID, taskNo, newLocation) => {
//   console.log(
//     "in create task",
//     (schedule[driverID].task[taskNo].dropOff.location = newLocation)
//   );
//   return <h3>{(schedule[driverID].task[taskNo].dropOff.location = newLocation)}</h3>;
// // };

// function App() {
//   return (
//     <div className="App">
//       <h1> Rose Rocket Dispatch Scheduling App </h1>
//       {schedule.map(value => {
//         return (
//           <h2>
//             {" "}
//             {value.driverName} {value.id}
//           </h2>
//         );
//       })}
//       <h3>{updateTask(1, 0, "burlington")}</h3>
//     </div>
//   );
// }

// export default App;

// new page

import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TaskListPage from './pages/Task-list-page';
import TaskFormPage from './pages/Task-form-page';

const App = () => {
  return (
    <Container>
      <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Task List
        </NavLink>
        <NavLink
          className="item"
          activeClassName="active"
          exact
          to="/tasks/new"
        >
          Add Task
        </NavLink>
      </div>
      <Route exact path="/" component={TaskListPage} />
      <Route path="/tasks/new" component={TaskFormPage} />
      <Route path="/tasks/edit/:_id" component={TaskFormPage} />
    </Container>
  );
};

export default App;