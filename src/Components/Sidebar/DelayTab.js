import React ,{useState} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {FormControl , Select ,TextField , Typography , Grid , Button} from '@material-ui/core';

import {DelayNode , AddStepNode} from "../../Components/Flowchart/Elements";


const useStyles = makeStyles((theme) => ({
  root: {
      
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1)
}
}));
 

function DelayTab() {
  const classes = useStyles();
  let history = useHistory();

  const [time, setTime] = useState("");
  const [unit, setUnit] = useState("");

  const length = useSelector(state=> state.workflow.elements.length);
  
  const handleSave = ()=>{
    dispatch({ type: 'SET_DELAY', delay:`${time} ${unit}`,
    add_element:{id: length+1, parent: {id: length},childOf:{number: length}, name: 'delay',compo: <DelayNode/>, children: []},})
    dispatch({type: 'ADD_STEP_ELEMENT',
    add_step_element:{id: length+2, parent: {id: length+1},childOf:{number: length+1}, name: 'subcompastepNodeny1',compo: <AddStepNode/>, children: []},})
    history.push("/details");
  }
  const handleCancel = ()=>{
    history.push("/details");
  }

  const dispatch = useDispatch();

  return  (
         <div>
         <Typography gutterBottom variant="subtitle1" align="left">Set Delay</Typography>
         <Grid container direction="row" justify="flex-start" className={classes.grid}>
                <Grid item xs={9}>
                    <FormControl variant="outlined" className={classes.select} size="small">
                        <Select
                        native
                        displayEmpty
                        value={unit}
                        onChange={e=>setUnit(e.target.value)}
                        inputProps={{
                            name: 'trigger',
                            id: 'outlined-age-native-simple',
                        }}
                        >
                        <option aria-label="None" value=""/>
                        <option value={"Minutes(s)"}>
                            Minutes(s)
                        </option>
                        <option value={"Hour(s)"}>
                            Hour(s)
                        </option>
                        <option value={"Day(s)"}>
                            Day(s)
                        </option>
                        <option value={"Week(s)"}>
                            Week(s)
                        </option>
                        <option value={"Month(s)"}>
                            Month(s)
                        </option>
                        <option value={"Specific time on day"}>
                            Specific time on day
                        </option>
                        <option value={"Current day of the week"}>
                            Specific time on day
                        </option>
                        </Select>
                     </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                      onChange={e=>setTime(e.target.value)}
                      value={time} 
                      type="number"
                      id="outlined-basic"  
                      variant="outlined" 
                      size="small" 
                      className={classes.input}
                      />
                </Grid>
            </Grid>
            <div>
                <Button 
                onClick={handleSave}
                variant="contained" 
                color="primary" 
                size="small" 
                className={classes.button}>
                  Save
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="contained" 
                  size="small"
                  className={classes.button}>
                    Cancel
                </Button>
            </div>
            </div>
  );
};
  export default DelayTab;