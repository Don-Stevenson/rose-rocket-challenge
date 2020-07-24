import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

export default function TaskCard({ task }) {
 // console.log("in task card, task is ", task[0])
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="tasks" /> Task No: {task._id}
        </Card.Header>
        <Card.Description>
          <p>
        <Icon name="user outline" /> Driver: {task.driverName.first} {task.driverName.last}
          </p>
          <p>
            <Icon name="calendar alternate outline" /> Date: {task.date}
          </p>
          <p>
            <Icon name="shipping fast" /> Type: {task.type}
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
          <Button basic color="green">
            Edit
          </Button>
          <Button basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}