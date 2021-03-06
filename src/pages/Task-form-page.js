import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/Task-form';
import { flashErrorMessage } from '../components/Flash-message';
import { TaskContext } from '../context/Task-context';

export default function TaskFormPage ({match}) {
  // handling state
  const [state, dispatch] = useContext(TaskContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { _id } = match.params; // Grab URL _id
    // if the id matches get the json for that and fetch the data
     if (_id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3030/rr-api/${_id}`,
          );
        
          dispatch({
            type: 'FETCH_TASK',
            payload: response.data,
          });
          setLoading(false);
          // else catch the error
        } catch (error) {
          flashErrorMessage(dispatch, error);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [match.params, dispatch]);

  if (loading) {
    return <p>Please wait...</p>;
  }

return (
    <div>
      <TaskForm task={state.task} />
    </div>
  );
}
