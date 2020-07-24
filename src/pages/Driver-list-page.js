import React, { useContext, useEffect } from "react";
import DriverList from "../components/Driver-list";
import { DriverContext } from "../context/Driver-context";

// test data to make sure that the page is displaying data properly
// ***********************************************
const data = [
  {
    _id: "1",
    name: {
      first: "Bill",
      last: "Doe"
    },
    task: {
      type: "drop off",
      date: "july 24 2020",
      startTime: "8:00",
      stopTime: "12:00"
    }
  },
  {
    _id: "2",
    name: {
      first: "Bruce",
      last: "Wayne"
    },
    task: {
      type: "pick up",
      date: "july 24 2020",
      startTime: "13:00",
      stopTime: "17:00"
    }
  }
];

const DriversListPage = () => {
  // state handling using useContext
  const [state, dispatch] = useContext(DriverContext);

  // using useEffect to get driver info
  useEffect(() => {
    dispatch({
      type: "FETCH_DRIVERS",
      payload: data
    });
  }, [dispatch]);

  return (
    <div>
      <h1>List of Drivers</h1>
      <DriverList drivers={state.drivers} />
    </div>
  );
};

export default DriversListPage;
