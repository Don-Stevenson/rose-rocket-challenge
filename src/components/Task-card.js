import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';





export default function TaskCard({ task }) {
   
  const deleteTask = async id =>{
    console.log("here in delete task")
  }


  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {
            // NOTE CHANGE TO taskId
          }
          <Icon name="tasks" /> Task No: {task.taskId}
        </Card.Header>
        <Card.Description>
          <p>
            <Icon name="user outline" /> Driver: {task.driverName.first}{" "}
            {task.driverName.last}
          </p>
          <p>
            <Icon name="calendar alternate outline" /> Date: {task.date}
          </p>
          <p>
            <Icon name="location arrow" /> Location: {task.location}
          </p>
          <p>
            <Icon name="shipping fast" /> Type: {task.taskType}
          </p>
          <p>
            <Icon name="hourglass start" /> Start Time: {task.startTime}
          </p>
          <p>
            <Icon name="hourglass end" /> End Time: {task.stopTime}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
        <Button
            basic
            color="green"
            as={Link}
            to={`/tasks/edit/${task._id}`}
          >
            Edit
          </Button>
          <Button basic color="red" onClick={() => deleteTask(task._id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
