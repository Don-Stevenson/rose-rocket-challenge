import React, { useContext, useEffect } from "react";
import TaskList from "../components/Task-list";
import { TaskContext } from "../context/Task-context";
import axios from "axios";
import FlashMessage, { flashErrorMessage } from "../components/Flash-message";
import Timeline from "react-calendar-timeline";
import moment from "moment";

//import { items, groups } from "../components/Task-timeLineList";

export default function TasksListPage() {
  // state handling using useContext
  const [state, dispatch] = useContext(TaskContext);

  // using useEffect to get task info
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
  // this is a work around to return data from the database
  // that can be used in the type of format that can be used with the table
  // this is NOT an acceptable practice in production.
  // I consider this a very make shift solution to a problem that requires a backend structured in this format.
  // Unfortunately,I ran out of time to find a working solution with the db I built

  const makeCalendarItems = items => {
    let calenderArr = items.reduce((accum, element, index) => {
      accum.push({
        id: element._id,
        group: parseInt(element.taskId),
        title: element.taskType,
        start_time: moment().add(0, "hour"),
        end_time: moment().add(1, "hour"),
        canMove: true,
        canResize: false,
        canChangeGroup: false,
        itemProps: {
          //  these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          "data-custom-attribute": "Random content",
          "aria-hidden": true,
          onDoubleClick: () => {
            console.log("You clicked double!");
          },
          className: "weekend",
          style: {
            background: "fuchsia"
         }
        }
      });
      return accum;
    }, []);
    return calenderArr;
  };

  const makeCalendarGroups = items => {
    let groupArr = items.reduce((accum, element, index) => {
      accum.push({
        id: parseInt(element.taskId),
        title: element.taskType
      });
      return accum;
    }, []);
    return groupArr;
  };

  // console.log("here in task list page", state.tasks);
  // console.log("state is", state);
  let calendarItems = makeCalendarItems(state.tasks);
  let calendarGroups = makeCalendarGroups(state.tasks);

  // console.log("after calendar items", calendarItems, calendarGroups);

  return (
    <div>
      <div>
        <h1> Driver Schedule </h1>
        {
          // console.log("state.tasks", state.tasks)
        }
        <Timeline
          groups={calendarGroups}
          items={calendarItems}
          defaultTimeStart={moment().add(-12, "hour")}
          defaultTimeEnd={moment().add(12, "hour")}
        />
      </div>
      <h1>List of Driver's Tasks</h1>

      {
        // when the message has content, render a flash message
      }
      {state.message.content && <FlashMessage message={state.message} />}
      <TaskList tasks={state.tasks} />
    </div>
  );
}
