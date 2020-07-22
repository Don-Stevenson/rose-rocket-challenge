import React, { useState, useEffect } from "react";
import "./App.css";


// my database for drivers and tasks

let drivers = [
  {
    id: 1,
    name: "Omar D.",
    tasks: [
      {
        pickup: { location: "", time: "" },
        dropOff: { location: "", time: "" },
        other: ""
      }
    ]
  },
  {
    id: 2,
    name: "Cheryl S.",
    task: [
      {
        pickup: { location: "", time: "" },
        dropOff: { location: "", time: "" },
        other: ""
      }
    ]
  },
  {
    id: 3,
    name: "Fatima R.",
    task: [
      {
        pickup: { location: "", time: "" },
        dropOff: { location: "", time: "" },
        other: ""
      }
    ]
  }
];

console.log("drivers are: ", drivers)

function App() {
  return (
    <div className="App">
      <h1> Rose Rocket Dispatch Scheduling App </h1>
      {drivers.map(value => {
        return (
          <h2>
            {" "}
        {value.name} {value.id}
          </h2>
        );
      })}
    </div>
  );
}

export default App;
