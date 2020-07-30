import React, { useReducer, createContext } from "react";

// use context api to allow sharing of data with other react components
//********************************************************************
export const TaskContext = createContext();

// setting up the initial state
// ****************************
const initialState = {
  tasks: [],
  task: {}, // selected or new
  message: {} // { type: 'success|fail', title:'Info|Error' content:'lorem ipsum'}
};

// a reducer, as an alternative to useState, to update state from the db
// *********************************************************************
function reducer(state, action) {
  switch (action.type) {
    //when tasks are able to be fetched
    case "FETCH_TASKS": {
      return {
        ...state,
        tasks: action.payload,
        task: {}
      };
    }
    
    // when a single task is to be fetched
    case "FETCH_TASK": {
      return {
        ...state,
        task: action.payload,
        message: {}
      };
    }


    // create task and send a success message
    case "CREATE_TASK": {
     
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        message: {
          type: "success",
          title: "Success",
          content: "New Driver Task created!"
        }
      };
    }

    // update a task and send a success message
    case "UPDATE_TASK": {
      const task = action.payload;
   
      return {
        ...state,
        tasks: state.tasks.map(item => (item._id === task._id ? task : item)),
        message: {
          type: "success",
          title: "Task Update Successful",
          content: `Driver task has been updated!`
        }
      };
    }
    
    // delete a task and send a sucess message
    case 'DELETE_TASK': {
      const _id  = action.payload;
      return {
        ...state,
        contacts: state.tasks.filter(item => item._id !== _id),
        message: {
          type: 'success',
          title: 'Delete Successful',
          content: `Task has been deleted!`,
        },
      };
    }


    // send out the messae when a problem arises
    case "FLASH_MESSAGE": {
      return {
        ...state,
        message: action.payload
      };
    }
     default:
     throw new Error();
  }
}

// making a function that uses useReducer as an alternative to useState
// it is able to handle multiple values
// *********************************************************************
export const TaskContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <TaskContext.Provider value={[state, dispatch]}>
      {children}
    </TaskContext.Provider>
  );
};
