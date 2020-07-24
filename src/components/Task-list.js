import React from 'react';
import { Card } from 'semantic-ui-react';
import TaskCard from './Task-card';

export default function TaskList({ tasks }) {
  // console.log("tasks are: ", tasks);
  // using map to display a list of tasks and task information
  console.log("in tasklist", tasks)
  const cards = () => {
    return tasks.map(task => {
      console.log("task is", task)
      return <TaskCard key={task._id} task={task} />;
    });
  };
  return (
    <div>
       return <Card.Group>{cards()}</Card.Group>;
    </div>
  );
}
