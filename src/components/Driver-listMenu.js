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

const SimpleSelectDrivers = ({tasks, setCurrDriver}) => {
  const classes = useStyles();
  const [driver, setDriver] = useState("");


const handleChange = (event) => {
    setDriver(event.target.value);
    setCurrDriver(event.target.value)
  };
   

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">Drivers List</InputLabel>
        <Select
          labelId="simple-select-label"
          id="driverName"
          value={driver}
          onChange={handleChange}
        >
          {
            tasks.map((task, index) =>(
              <MenuItem key={index} value={index}>{task.driverFirstName} {task.driverLastName}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}

export default SimpleSelectDrivers