import React from 'react';

export default function DriverList({drivers}) {
  // using map to display a list of drivers
  const driversList = () => {
    return drivers.map(driver => {
      return (
        <li key={driver._id}>
          {driver.name.first} {driver.name.last} {driver.task.date}
        </li>
      );
    });
  };
  
  
    return (
    <div>
      <ul>
          {driversList()}
      </ul>
    </div>
  );
}