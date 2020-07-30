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

export default function SimpleSelect({tasks}) {
  const classes = useStyles();
  const [driver, setDriver] = useState("");

  const handleChange = event => {
    setDriver(event.target.value);
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
          id="simple-select"
          value={driver}
          onChange={handleChange}
        >
          <MenuItem value={tasks.driverFirstName}>driver</MenuItem>
          <MenuItem value={20}>driver1</MenuItem>
          <MenuItem value={30}>driver2</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
