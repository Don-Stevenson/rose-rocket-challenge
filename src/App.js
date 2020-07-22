import React, { useState, useEffect } from "react";
import "./App.css";

// database for schedule and tasks

let schedule = [
  {
    driverID: 1,
    driverName: "Omar D.",
    tasks: [
      {
        id: "",
        pickup: { location: "Burlington", date: "", time: "" },
        dropOff: { location: "", date: "", time: "" },
        other: ""
      }
    ]
  },
  {
    driverID: 2,
    driverName: "Cheryl S.",
    task: [
      {
        id: "",
        pickup: { location: "", date: "", time: "" },
        dropOff: { location: "Toronto", date: "", time: "" },
        other: ""
      }
    ]
  },
  {
    driverID: 3,
    driverName: "Ferdinand R.",
    task: [
      {
        id: "",
        pickup: { location: "Hamilton", date: "", time: "" },
        dropOff: { location: "", date: "", time: "" },
        other: ""
      }
    ]
  }
];

const deleteTask = (driverID, task) => {
  console.log("in delete task", schedule[driverID]);
};

// deleteTask(1)

const updateTask = (driverID, task) => {
  console.log("in update task", schedule[driverID]);
};

// updateTask(1)

const createTask = (driverID, taskNo) => {
  console.log(
    "in create task",
    schedule[driverID].task[taskNo].dropOff.location
  );
  return <h3>{schedule[driverID].task[taskNo].dropOff.location}</h3>;
};

function App() {
  return (
    <div className="App">
      <h1> Rose Rocket Dispatch Scheduling App </h1>
      {schedule.map(value => {
        return (
          <h2>
            {" "}
            {value.driverName} {value.id}
          </h2>
        );
      })}
      <h3>{createTask(1, 0)}</h3>
    </div>
  );
}

export default App;
