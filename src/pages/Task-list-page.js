import React, { useContext, useEffect } from "react";
import TaskList from "../components/Task-list";
import { TaskContext } from "../context/Task-context";
import axios from "axios";
import FlashMessage, { flashErrorMessage } from "../components/Flash-message";
import Timeline from "react-calendar-timeline";
import moment from "moment";
import SimpleSelect from "../components/Driver-listMenu";
import CsvDownload from "react-json-to-csv";
// import CreateCSV from "../components/Csv-Maker"
// import createDriverCSV from "../helpers/createDriverCSV"
// import makeCalendarGroups from "../helpers/createCalendarGroups";

export default function TasksListPage() {
  // state handling using useContext
  const [state, dispatch] = useContext(TaskContext);

  // using useEffect to get task info and dispatch that json data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3030/rr-api");

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
  // thats react calender can render
  // *****************************************************************
  const makeCalendarItems = items => {
    const calenderArr = items.reduce((accum, element) => {
      const day = parseInt(element.date.slice(3, 5));
      const month = parseInt(element.date.slice(0, 2)) - 1; // month is a zero based index in moment
      const year = parseInt(element.date.slice(6, 10));
      const startHour = parseInt(element.startTime.slice(0, 2));
      const startmin = parseInt(element.startTime.slice(3, 5));
      const stopHour = parseInt(element.stopTime.slice(0, 2));
      const stopMin = parseInt(element.stopTime.slice(3, 5));

      accum.push({
        id: element._id,
        group: parseInt(element.taskId),
        title: element.taskType,
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
        canMove: false,
        canResize: false,
        canChangeGroup: false,
        itemProps: {
          //  these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          "data-custom-attribute": "Random content",
          "aria-hidden": true,
          onDoubleClick: () => {
            console.log("You clicked double!");
            // insert logic here about how to return the card for the task that was click upon

            // return (
            //   <TaskList tasks={state.tasks.filter(driverFirstName === event.Selected)} />
            // )
          },
          className: "weekend",
          style: {
            background: "#ceb1beff"
          }
        }
      });
      return accum;
    }, []);
    return calenderArr;
  };


  const makeCalendarGroups = items => {
    let groupArr = items.reduce((accum, element) => {
      accum.push({
        id: parseInt(element.taskId),
        title: `${element.taskType} (${element.driverFirstName} ${element.driverLastName})`
      });
      return accum;
    }, []);
    return groupArr;
  };

  // call the functions and return them into new arrays of objects
  const calendarItems = makeCalendarItems(state.tasks);
  const calendarGroups = makeCalendarGroups(state.tasks);
  
  return (
    <div>
      <div className="driver_schedule">
        <h2> Driver Schedule </h2>
        {/* <SimpleSelect tasks={state.tasks}></SimpleSelect> */}

        <Timeline
          groups={calendarGroups}
          items={calendarItems}
          defaultTimeStart={moment().add(-12, "hour")}
          defaultTimeEnd={moment().add(12, "hour")}
        />
        <h4> Schedule can be moved left to right, with zoom in and out</h4>
        <p> shift + mousewheel = move timeline left/right </p>
        <p> alt + mousewheel = zoom in/out</p>
        <p> ctrl + mousewheel = zoom in/out 10× faster</p>
      </div>
      <h2>List of Driver's Tasks</h2>

      {
        // when the message has content, render a flash message
      }
      {state.message.content && <FlashMessage message={state.message} />}
      <p> </p>
      <TaskList tasks={state.tasks} />

      <div className="CSVfile">
        <p> Complete Driver Schedule in CSV format</p>
        <CsvDownload data={state.tasks} />
        {/* <CreateCSV tasks={state.tasks} /> */}
      </div>
    </div>
  );
}
