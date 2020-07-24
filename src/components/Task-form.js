import React, { useContext, useState } from "react";
import { Form, Grid, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import classnames from "classnames";
import { TaskContext } from "../context/Task-context";
import { flashErrorMessage } from './Flash-message';

export default function TaskForm() {

  //handling states using useContext on TaskConext 
  const [state, dispatch] = useContext(TaskContext);
  const { register, errors, handleSubmit } = useForm();
  // console login data for the time being
  const [redirect, setRedirect] = useState(false);

  // function that sends data to the server or returns an error if there is a problem
  const createTask = async data => {
    try {
      const response = await axios.post('http://localhost:3030/rr-api', data);
      dispatch({
        type: 'CREATE_TASK',
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  // handling the onSubmit to wait for create task to run
  const onSubmit = async data => {
    await createTask(data);
  };

  // if redirect is true, route to the homepage
  if (redirect) {
    return <Redirect to="/" />;
  }



  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <h1 style={{ marginTop: "1em" }}>Add New Driver's Task</h1>
        <Form onSubmit={handleSubmit(onSubmit)} loading={state.loading}>
          <Form.Group widths="equal">
            <Form.Field className={classnames({ error: errors.taskId })}>
              <label htmlFor="taskId">
                Task Id
                <input
                  id="taskId"
                  name="taskId"
                  type="text"
                  placeholder="Enter Task Id"
                  ref={register({ required: true, minLength: 2 })}
                />
              </label>
              <span className="error">
                {errors.taskId &&
                  errors.taskId.type === "required" &&
                  "Task Id Required"}
              </span>
              <span className="error">
                {errors.taskId &&
                  errors.taskId.type === "minLength" &&
                  "Must be more than 2 characters"}
              </span>
            </Form.Field>

            <Form.Field className={classnames({ error: errors.date })}>
              <label htmlFor="date">
                Date
                <input
                  id="date"
                  name="date"
                  type="text"
                  placeholder="dd/mm/yyy"
                  ref={register({ required: true, minLength: 2 })}
                />
              </label>
              <span className="error">
                {errors.date &&
                  errors.date.type === "required" &&
                  "date Required"}
              </span>
              <span className="error">
                {errors.date &&
                  errors.date === "minLength" &&
                  "Must be 2 or more characters"}
              </span>
            </Form.Field>
          </Form.Group>

          <Form.Field className={classnames({ error: errors.taskType })}>
              <label htmlFor="taskType">
                Task Type
                <input
                  id="taskType"
                  name="taskType"
                  type="text"
                  placeholder="Pick Up, Drop Off or Other"
                  ref={register({ required: true, minLength: 2 })}
                />
              </label>
              <span className="error">
                {errors.taskType &&
                  errors.taskType.type === "required" &&
                  "Task Type Required"}
              </span>
              <span className="error">
                {errors.taskType &&
                  errors.taskType === "minLength" &&
                  "Must be 2 or more characters"}
              </span>
            </Form.Field>

          <Form.Field className={classnames({ error: errors.driverName })}>
            <label htmlFor="driverName.first">
              Driver First Name
              <input
                id="driverName.first"
                name="driverName.first"
                type="text"
                placeholder="First Name"
                ref={register({ required: true, minLength: 2 })}
              />
            </label>
            <span className="error">
              {errors.driverName &&
                errors.driverName.first.type === "required" &&
                "First Name Required"}
            </span>
            <span className="error">
              {errors.driverName &&
                errors.driverName.first.type === "minLength" &&
                "Must be 2 or more characters"}
            </span>
          </Form.Field>
          <Form.Field className={classnames({ error: errors.driverName })}>
            <label htmlFor="driverName.last">
              Driver Last Name
              <input
                id="driverName.last"
                name="driverName.last"
                type="text"
                placeholder="Last Name"
                ref={register({ required: true, minLength: 2 })}
              />
            </label>
            <span className="error">
              {errors.driverName &&
                errors.driverName.last.type === "required" &&
                "Last Name Required"}
            </span>
            <span className="error">
              {errors.driverName &&
                errors.driverName.last.type === "minLength" &&
                "Must be 2 or more characters"}
            </span>
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field className={classnames({ error: errors.startTime })}>
              <label htmlFor="startTime">
                Task Start Time
                <input
                  id="startTime"
                  name="startTime"
                  type="text"
                  placeholder="24hr Clock: e.g. 13:00"
                  ref={register({ required: true, minLength: 2 })}
                />
              </label>
              <span className="error">
                {errors.startTime &&
                  errors.startTime.type === "required" &&
                  "Task Type Required"}
              </span>
              <span className="error">
                {errors.startTime &&
                  errors.startTime === "minLength" &&
                  "Must be 2 or more characters"}
              </span>
            </Form.Field>

            <Form.Field className={classnames({ error: errors.stopTime })}>
              <label htmlFor="stopTime">
                Task Stop Time
                <input
                  id="stopTime"
                  name="stopTime"
                  type="text"
                  placeholder="24hr Clock: e.g. 19:00"
                  ref={register({ required: true, minLength: 2 })}
                />
              </label>
              <span className="error">
                {errors.stopTime &&
                  errors.stopTime.type === "required" &&
                  "Task Type Required"}
              </span>
              <span className="error">
                {errors.stopTime &&
                  errors.stopTime === "minLength" &&
                  "Must be 2 or more characters"}
              </span>
            </Form.Field>
          </Form.Group>

          <Button primary type="submit">
            Save
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
