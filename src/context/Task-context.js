import React, { useReducer, createContext } from 'react';


// use context api to allow sharing of data with other react components
//********************************************************************
export const TaskContext = createContext();

// setting up the initial state
// ****************************
const initialState = {
  tasks: [],
  task: {}, // selected or new
  message: {}, // { type: 'success|fail', title:'Info|Error' content:'lorem ipsum'}  
};

// a reducer, as an alternative to useState, to update state from the db
// *********************************************************************
function reducer(state, action) {
  switch (action.type) {

    //when tasks are able to be fetched
    case 'FETCH_TASKS': {
      return {
        ...state,
        tasks: action.payload,
        task: {},
      };
    }

    case 'CREATE_TASK': {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        message: {
          type: 'success',
          title: 'Success',
          content: 'New Task created!',
        },
      };
    }

    // send out the messae when a problem arises
    case 'FLASH_MESSAGE': {
      return {
        ...state,
        message: action.payload,
      }
    }
    default:
      throw new Error();
  }
}

// making a function that returns the data
// ***************************************
export const TaskContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <TaskContext.Provider value={[state, dispatch]}>
      {children}
    </TaskContext.Provider>
  );
};