import React, { useContext, useEffect } from "react";
import TaskList from "../components/Task-list";
import { TaskContext } from "../context/Task-context";
import axios from "axios";
import FlashMessage, { flashErrorMessage } from "../components/Flash-message";

// test data to make sure that the page is displaying data properly
// ***********************************************
// const data = [
//   {
//     _id: "1",
//     driverName: {
//       first: "Bill",
//       last: "Hobson"
//     },
//     type: "drop off",
//     date: "july 24 2020",
//     startTime: "8:00",
//     stopTime: "12:00"
//   },
//   {
//     _id: "2",
//     driverName: {
//       first: "Bruce",
//       last: "Wayne"
//     },
//     type: "pick up",
//     date: "july 24 2020",
//     startTime: "13:00",
//     stopTime: "17:00"
//   }
// ];

const TasksListPage = () => {
  // state handling using useContext
  const [state, dispatch] = useContext(TaskContext);

  // using useEffect to get driver info
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3030/rr-api");
        // console.log("response is", response.data.data);
        dispatch({
          type: "FETCH_TASKS",
          payload: response.data.data || response.data // in case pagination is disabled
        });
      } catch (error) {
        flashErrorMessage(dispatch, error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>List of Tasks</h1>

      {
        // when the message has content, render a flash message
      }
      {state.message.content && <FlashMessage message={state.message} />}
      <TaskList tasks={state.tasks} />
    </div>
  );
};

export default TasksListPage;
