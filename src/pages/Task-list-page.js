import React, { useContext, useEffect } from "react";
import TaskList from "../components/Task-list";
import { TaskContext } from "../context/Task-context";

// test data to make sure that the page is displaying data properly
// ***********************************************
const data = [
  {
    _id: "1",
    driverName: {
      first: "Bill",
      last: "Hobson"
    },
    type: "drop off",
    date: "july 24 2020",
    startTime: "8:00",
    stopTime: "12:00"
  },
  {
    _id: "2",
    driverName: {
      first: "Bruce",
      last: "Wayne"
    },
    type: "pick up",
    date: "july 24 2020",
    startTime: "13:00",
    stopTime: "17:00"
  }
];

const TasksListPage = () => {
  // state handling using useContext
  const [state, dispatch] = useContext(TaskContext);

  // using useEffect to get driver info
  useEffect(() => {
    dispatch({
      type: "FETCH_TASKS",
      payload: data
    });
  }, [dispatch]);

  console.log("in the task list, tasks are ", state.tasks);

  return (
    <div>
      <h1>List of Tasks</h1>
      <TaskList tasks={state.tasks} />
    </div>
  );
};

export default TasksListPage;
