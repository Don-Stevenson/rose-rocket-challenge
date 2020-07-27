// import React, { useContext, useEffect } from "react";
// import Timeline from "react-calendar-timeline";
// import TaskContext from "../context/Task-context"

// import moment from "moment";

// export const groups = [
//     { id: 1, title: "group 1" },
//     { id: 2, title: "group 2" }
//   ];
  
//   export const items = [
//     {
//       id: 1,
//       group: 1,
//       title: "item 1",
//       start_time: moment().add(2, "hour"),
//       end_time: moment().add(7, "hour"),
//       canMove: true,
//       canResize: false,
//       canChangeGroup: false,
//       itemProps: {
//         // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
//         "data-custom-attribute": "Random content",
//         "aria-hidden": true,
//         onDoubleClick: () => {
//           console.log("You clicked double!");
//         },
//         className: "weekend",
//         style: {
//           background: "fuchsia"
//         }
//       }
//     },
//     {
//       id: 2,
//       group: 2,
//       title: "item 2",
//       start_time: moment().add(-0.5, "hour"),
//       end_time: moment().add(0.5, "hour")
//     },
//     {
//       id: 3,
//       group: 1,
//       title: "item 3",
//       start_time: moment().add(2, "hour"),
//       end_time: moment().add(3, "hour")
//     }
//   ];


// export default function taskTimeline({tasks}) {
  

//   const itemsToMap = () => {
//     return tasks.map(task => {
     
//     });
//   };

// }