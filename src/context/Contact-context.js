import React, { useReducer, createContext } from 'react';


// use context api to allow sharing of data with other react components
//********************************************************************
export const DriverContext = createContext();


// setting up the initial state
// ****************************
const initialState = {
  Drivers: [],
  Driver: {}, // selected or new
  task: {}, // { type: 'success|fail', title:'Info|Error' content:'lorem ipsum'}
};

// a reducer, as an alternative to useState, to update state from the db
// *********************************************************************
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DRIVERS': {
      return {
        ...state,
        Drivers: action.payload,
        Driver: {},
      };
    }
    default:
      throw new Error();
  }
}

// making a function that returns the state from the db
// *****************************************************
export const DriverContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <DriverContext.Provider value={[state, dispatch]}>
      {children}
    </DriverContext.Provider>
  );
};