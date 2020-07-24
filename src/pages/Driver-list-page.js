import React from 'react';
import DriverList from '../components/Driver-list';

// test data to make sure that the page is displaying data properly
// ***********************************************
const data = [
    {
      _id: '1',
      name: {
        first: 'JBill',
        last: 'Doe',
      },
      task: {
        type: "drop off",
        date: "july 24 2020",
        startTime: "8:00",
        stopTime: "12:00"
     },
    },
    {
      _id: '2',
      name: {
        first: 'Bruce',
        last: 'Wayne',
      },
      task: {
        type: "pick up",
        date: "july 24 2020",
        startTime: "13:00",
        stopTime: "17:00"
     },
    },
  ];


const DriversListPage = () => {
  return (
    <div>
      <h1>List of Drivers</h1>
      <DriverList />
    </div>
  );
};

export default DriversListPage;