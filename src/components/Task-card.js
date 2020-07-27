import React, {useContext, useState} from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TaskContext } from "../context/Task-context";
import { flashErrorMessage } from "./Flash-message"
import { Redirect } from "react-router";

export default function TaskCard({ task }) {

  // importing and setting  state from task from Task Context
  const [state, dispatch] = useContext(TaskContext);
  const [redirect, setRedirect] = useState(false);
  
  //NOTE:
  // handling delete task here.
  // I would have preferred to handle it with the other functions in taskform page
  // but I could not find a workable solution to export default another 
  // function with in the TaskForm Function and import it here.
  // would have better to make helper functions and that I could call where I needed
  const deleteTask = async id => {
    try {
      const response = await axios.delete(`http://localhost:3030/rr-api/${task._id}`);
      dispatch({
        type: "DELETE_TASK",
        payload: response.data
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };
  
  // if redirect is true, route to the homepage
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <Card.Content>
        <Card.Header>
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
          <Button basic color="green" as={Link} to={`/tasks/edit/${task._id}`}>
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
