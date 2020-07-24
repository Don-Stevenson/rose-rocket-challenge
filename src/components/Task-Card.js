import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

export default function TaskCard({ task }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="user outline" /> {task.name.first} {task.name.last}
        </Card.Header>
        <Card.Description>
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
          <Icon name="hourglass end" /> End Time: {task.Stop}
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