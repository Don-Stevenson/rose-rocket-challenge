// the following is a work around to return data from the database
  // that can be used in the type of format that can be used with the react calendar.
  // I do not consider this optimal practice in production.
  // I consider this a very make shift solution to a problem that requires a backend structured in this format.
  // More ideally, the backend data structure would already be in the correct format for react calendar.

  // functions that take state and return them in object formats
  // thats react calender can render)
  // *****************************************************************


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

  export default makeCalendarGroups