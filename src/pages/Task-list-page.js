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

  // the following is a work around to return data from the database
  // that can be used in the type of format that can be used with the react calendar.
  // I do not consider this optimal practice in production.
  // I consider this a very make shift solution to a problem that requires a backend structured in this format.
  // More ideally, the backend data structure would already be in the correct format for react calendar.

  // functions that take state and return them in object formats
  // thats react calender can render)
  // *****************************************************************
  const makeCalendarItems = items => {
    let calenderArr = items.reduce((accum, element, index) => {
      const day = parseInt(element.date.slice(0, 2));
      const month = parseInt(element.date.slice(3, 5)) - 1; // month is a zero based index in moment
      const year = parseInt(element.date.slice(6, 10));
      const startHour = parseInt(element.startTime.slice(0, 2));
      const startmin = parseInt(element.startTime.slice(3, 5));
      const stopHour = parseInt(element.stopTime.slice(0, 2));
      const stopMin = parseInt(element.stopTime.slice(3, 5));
      //console.log("day month year", day, month, year)
      // console.log(element.startTime);
      // console.log("stop hour is", stopHour, stopMin);

      accum.push({
        id: element._id,
        group: parseInt(element.taskId),
        title: element.taskType,
        // date: moment().set({ year: 2020, month: 7, date: day }),
        start_time: moment().set({
          year: year,
          month: month,
          date: day,
          hour: startHour,
          minute: startmin
        }),
        end_time: moment().set({
          year: year,
          month: month,
          date: day,
          hour: stopHour,
          minute: stopMin
        }),
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
        title: `${element.taskType} (${element.driverName.first} ${element.driverName.last}`
      });
      return accum;
    }, []);
    return groupArr;
  };

  // call the functions and return them into new arrays of objects
  let calendarItems = makeCalendarItems(state.tasks);
  let calendarGroups = makeCalendarGroups(state.tasks);

  console.log(
    "after calendar items,",
    calendarItems,
    "calendar Groups",
    calendarGroups
  );

  return (
    <div>
      <div className="driver_schedule">
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
