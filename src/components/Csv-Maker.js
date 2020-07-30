import React, {useState} from "react";
import SimpleSelectDrivers from "./Driver-listMenu";
import { SimpleSelectDays } from "./DayDuration-list";
import {Button} from "semantic-ui-react";
import createDriverCSV from "../helpers/createDriverCSV"


const CreateCSV = ({tasks}) => {
    const {state, setState} = useState("Smith")
    const handleSelect = (e)=> {
        setState("Smith")
        console.log("e in handle", e)
    }

 const makeCSV = ()=>{
     const handleClick =(e)=> {
         e.preventDefault()
         console.log("e in makeCSV", e)
 
            }

   
            // const CSV = createDriverCSV(tasks, state, 2 )
    
 }


  return (
    <div className="csvContainer">
      <SimpleSelectDrivers className="driverName"> </SimpleSelectDrivers>
      {/* <SimpleSelectDays className="noOfDays"> </SimpleSelectDays> */}
      {/* <Button primary type="submit" onClick={makeCSV} onSelect={handleSelect}>
        Save
      </Button> */}
    </div>
  );
};

export default CreateCSV;
