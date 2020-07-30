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

export default function SimpleSelectDays({tasks}) {
  const classes = useStyles();
  const [state, setState] = useState("");

  const handleChange = event => {
    setState(event.target.value);
  };
  

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">Drivers List</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={tasks}
          onChange={handleChange}
        >
          <MenuItem value={2}>2 days</MenuItem>
          <MenuItem value={4}>4 days </MenuItem>
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={28}>28 days</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}