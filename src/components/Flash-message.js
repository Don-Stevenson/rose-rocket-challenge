import React from 'react';
import { Message } from 'semantic-ui-react';

// setup a simple error handling to display to the user
// in case of problems with the backend
//******************************************************/

export default function FlashMessage({ message }) {

// add some kind of time out to make the message disapear?
// set default display message = false
// if message is true, set display true for 2 secs time out function,
// return display to false 

  return (
    <Message
      positive={message.type === 'success'}
      negative={message.type === 'fail'}
      header={message.title}
      content={message.content}
    />
  );
}

//helper function that differentiates between a 
//network errors and errors sent by the the server api
// *****************************************************
export function flashErrorMessage(dispatch, error) {
  const err = error.response ? error.response.data : error; // check if server or network error
  dispatch({
    type: 'FLASH_MESSAGE',
    payload: {
      type: 'fail',
      title: err.name,
      content: err.message,
    },
  });
}