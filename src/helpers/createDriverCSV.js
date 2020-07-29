const data = [
    {
      createdAt: "2020-07-29T02:24:48.174Z",
      date: "01-05-2020",
      driverFirstName: "Example1",
      driverLastName: "Lastname1",
      location: "123 Anywhere Ave. Toronto, On",
      startTime: "19:20",
      stopTime: "23:50",
      taskId: 4321,
      taskType: "Other",
      updatedAt: "2020-07-29T02:34:34.782Z",
      __v: 0,
      _id: "5f20ddf06cbe4e1c039f646f"
    },
    {
      createdAt: "2020-07-29T02:24:48.174Z",
      date: "01-01-2020",
      driverFirstName: "Example1",
      driverLastName: "Lastname1",
      location: "12345 Anywhere Ave. Toronto, On",
      startTime: "19:20",
      stopTime: "23:50",
      taskId: 2222,
      taskType: "Pick Up",
      updatedAt: "2020-07-29T02:34:34.782Z",
      __v: 0,
      _id: "5f20ddf06cbe4e1c039f646f"
    },
  
    {
      createdAt: "2020-07-29T02:25:48.174Z",
      date: "07-28-2020",
      driverFirstName: "Example1",
      driverLastName: "Lastname1",
      location: "123 Anystreet St. Toronto, On",
      startTime: "12:20",
      stopTime: "14:35",
      taskId: 1234,
      taskType: "Drop Off",
      updatedAt: "2020-07-29T02:34:35.782Z",
      __v: 0,
      _id: "5f20ddf06cbe4e1c039f646h"
    }
  ];
  
  const { getDayOfYear } = require("date-fns");
  
  // make an array of objects depending on the interval given, eg 2, 4, 7, 28 days
  // initial it with default data in each object
  // *******************************************
  const makeDurationObj = givenNoOfDays => {
    const iterator = 365 - givenNoOfDays;
    const objectArr = [];
    for (let i = 1; i <= iterator; i += givenNoOfDays) {
      const durationObj = {
        duration: `Day ${i} - Day ${i + givenNoOfDays}`,
        pickUp: 0,
        dropOff: 0,
        other: 0,
        start: i,
        end: i + givenNoOfDays
      };
  
      objectArr.push(durationObj);
    }
    return objectArr;
  };
  
  // function that updates the duration object's counts depending on
  // whether a specific task is present
  //***************************************************************/
  const updateDurationObj = (durationObj, taskList) => {
    taskList.forEach(element => {
      const dayOfYear = getDayOfYear(Date.parse(element.date));
  
      for (let i = 0; i < durationObj.length; i++) {
        if (dayOfYear >= durationObj[i].start && dayOfYear < durationObj[i].end) {
          switch (element.taskType) {
            case "Pick Up":
              durationObj[i].pickUp += 1;
              break;
            case "Drop Off":
              durationObj[i].dropOff += 1;
              break;
            case "Other":
              durationObj[i].other += 1;
          }
        }
      }
    });
  };
  
  // Higher order function that takes a array of objects of data,
  // a driverLastname and a date interval,
  // makes a object for the duration based upon a given duration
  // updates a the duration object based upon the driver tasks given
  // returns a an object that can parsed into a .csv file  for a specific driver
  // with the day interval and the number of tasks present in each interval
  // whether a specific task is present
  //***************************************************************/
  
  const driverCSV = (data, driverLastName, dateInterval) => {
    const driverTasks = data.filter(currentTask => {
      return currentTask.driverLastName === driverLastName;
    });
  
    const durationObj = makeDurationObj(dateInterval);
    updateDurationObj(durationObj, driverTasks);
    return durationObj;
  };
  
  console.log(driverCSV(data, "Lastname1", 100));
  