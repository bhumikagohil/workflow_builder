import React ,{useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {TextField , Typography , Button} from '@material-ui/core';
import {SMSNode , AddStepNode} from "../../Components/Flowchart/Elements";

const useStyles = makeStyles((theme) => ({
  root: {
      
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
      width: "100%",
  },
  button: {
    margin: theme.spacing(1)
}
}));
 

function SMSTab() {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const length = useSelector(state=> state.workflow.elements.length);

  let history = useHistory();

  const handleSave = ()=>{
    dispatch({ type: 'SMS_DETAILS' , smsDetails: {smsTitle: title ,smsBody: body},
    add_element:{id: length+1, parent: {id: length},childOf:{number: length}, name: 'sms',compo: <SMSNode/>, children: []},})
    dispatch({type: 'ADD_STEP_ELEMENT',
    add_step_element:{id: length+2, parent: {id: length+1},childOf:{number: length+1}, name: 'stepNode',compo: <AddStepNode/>, children: []},})
    history.push("/visual_workflow_builder/details");
  }
  const handleCancel = ()=>{
    history.push("/visual_workflow_builder/details");
  }

  const dispatch = useDispatch();

  return  (
      <form className={classes.root} noValidate autoComplete="off">
         <div>
            <Typography gutterBottom variant="subtitle1" align="left">SMS Title</Typography>
            <TextField 
              onChange={e=>setTitle(e.target.value)}
              value={title} 
              id="outlined-basic"  
              variant="outlined" 
              size="small" 
              className={classes.formControl}
              />
        </div>
        <div>
            <Typography gutterBottom variant="subtitle1" align="left">SMS Body</Typography>
            <TextField 
              onChange={e=>setBody(e.target.value)}
              value={body} 
              id="outlined-basic"  
              variant="outlined" 
              size="small" 
              className={classes.formControl}
              />
        </div>
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
    </form>
  );
};
  export default SMSTab;