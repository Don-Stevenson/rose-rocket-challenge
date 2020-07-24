import React from "react";

export default function TaskList({ tasks }) {
  console.log("tasks are: ", tasks);
  // using map to display a list of tasks and task information
  const tasksList = () => {
    return tasks.map(task => {
      // console.log("task is", task);
      return (
        <li key={task._id}>
          <div>
            Driver: {task.driverName.first} {task.driverName.last}{" "}
          </div>
          <div>Task No: {task._id}</div>
          <div>Type: {task.type}</div>
          <div>Date: {task.date}</div>
          <div>Start time: {task.startTime}</div>
          <div>End Time {task.stopTime}</div>
          <div>   *   </div>
        </li>
      );
    });
  };

  return (
    <div>
      <ul>{tasksList()}</ul>
    </div>
  );
}
