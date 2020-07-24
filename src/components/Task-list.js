import React from "react";

export default function TaskList({ tasks }) {
  console.log("tasks are: ", tasks);
  // using map to display a list of tasks
  const tasksList = () => {
    return tasks.map(task => {
      console.log("task is", task.task);
      return (
        <li key={task._id}>
          <div>
            Driver: {task.task.driverName.first} {task.task.driverName.last}{" "}
          </div>
          <div>Type: {task.task.type}</div>
          <div>Date: {task.task.date}</div>
          <div>Start time: {task.task.startTime}</div>
          <div>End Time {task.task.stopTime}</div>
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
