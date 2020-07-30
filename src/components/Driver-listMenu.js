import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const SimpleSelectDrivers = ({tasks}) => {
  const classes = useStyles();
  const [state, setState] = useState("");

  const handleChange = event => {
    setState(event.target.value);
  };
  // Logic
  // set drivers list by calling using tasks and returning drivers list by taskId or driverLastName
  // const cards = () => {
  //   return tasks.map(task => {
  //     return <TaskCard key={task._id} task={task} />;
  //   });
  // };

  

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">Drivers List</InputLabel>
        <Select
          labelId="simple-select-label"
          id="driverName"
          value={tasks}
          onChange={handleChange}
        >
          <MenuItem value={tasks}>{state.driverLastName}</MenuItem>
          <MenuItem value={"S."}>Smith</MenuItem>
          <MenuItem value={"Smith"}>driver2</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SimpleSelectDrivers