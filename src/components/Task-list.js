import React from "react";
import { Card } from "semantic-ui-react";
import TaskCard from "./Task-card";

export default function TaskList({ tasks, currDriver }) {
  // using map to display a list of tasks and task information
  
  const cards = () => {
    return tasks.map((task, index) => {
      if (currDriver === "") {
        return <TaskCard key={task._id} task={task} />;
      } else if (currDriver === index) {
        return <TaskCard key={task._id} task={task} />;
      }
    });
  };
  return (
    <div>
      <Card.Group>{cards()}</Card.Group>
    </div>
  );
}
