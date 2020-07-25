import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/Task-form';
import { flashErrorMessage } from '../components/Flash-message';
import { TaskContext } from '../context/Task-context';

const TaskFormPage = ({match}) => {
  // handling staate
  const [state, dispatch] = useContext(TaskContext);
  const [loading, setLoading] = useState(true);

 //console.log("match ", match.params)
  useEffect(() => {
    const { _id } = match.params; // Grab URL _id
    console.log("in task form page, id params is ", _id)
    if (_id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3030/rr-api/${_id}`,
          );
          console.log("in task form page, response is ", response.data)
          dispatch({
            type: 'FETCH_TASK',
            payload: response.data,
          });
          setLoading(false);
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
};

export default TaskFormPage;