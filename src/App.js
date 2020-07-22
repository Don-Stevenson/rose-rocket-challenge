import React, { useState, useEffect } from "react";
import "./App.css";

// database for schedule and tasks

let schedule = [
  {
    id: 1,
    driverName: "Omar D.",
    tasks: [
      { id: "",
        pickup: { location: "", date: "", time: "" },
        dropOff: { location: "", date: "", time: "" },
        other: ""
      }
    ]
  },
  {
    id: 2,
    driverName: "Cheryl S.",
    task: [
      { 
        id: "",
        pickup: { location: "", date: "", time: "" },
        dropOff: { location: "", date: "", time: "" },
        other: ""
      }
    ]
  },
  {
    id: 3,
    driverName: "Ferdinand R.",
    task: [
      { 
        id: "",
        pickup: { location: "", date: "", time: "" },
        dropOff: { location: "", date: "", time: "" },
        other: ""
      }
    ]
  }
];

console.log("schedule are: ", schedule);

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
    </div>
  );
}

export default App;
