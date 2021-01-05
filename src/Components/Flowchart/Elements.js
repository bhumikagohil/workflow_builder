import React ,{useState} from 'react';
import {Card , CardContent ,Typography } from '@material-ui/core';
import {useSelector , useDispatch} from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import OptionModal from './OptionModal';

  export  function StartNode() {  
    const trigger = useSelector(state=> state.workflow.trigger);
    return ( 
      <Card>
        <CardContent  > 
        <Typography variant="caption">
          {trigger ? `${trigger}` : "Set Workflow Trigger"}
        </Typography>
      </CardContent>
    </Card>
     );
  }

  export  function AddStepNode() {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return ( 
      open ?
      <Card style={{width: "320px"}}>
      <CardContent  > 
        <OptionModal open handleClose={handleClose}/>
        </CardContent>
      </Card>
        :
        <Card style={{height: "70px", width: "200px"}} onClick={handleOpen}>
          <CardContent  > 
            <AddCircleOutlineIcon size="small"/><br/>
            <Typography variant="caption">
              Click on plus icon to add step
              </Typography>
          </CardContent>
         </Card>
     );
  }

  export  function ContactsNode() {
    const contact = useSelector(state=> state.workflow.contacts);
    return ( 
        <Card >
          <CardContent  > 
            <Typography variant="caption">
              {contact ? "Select Contacts"  : "Contacts Selected"}
              </Typography>
          </CardContent>
         </Card>
     );
  }

  export  function SMSNode() {
    const sms = useSelector(state=> state.workflow.smsDetails.smsTitle);
    return ( 
        <Card >
          <CardContent  > 
            <Typography variant="caption">
              {sms ? "Set SMS Details"  : "SMS Set"}
              </Typography>
          </CardContent>
         </Card>
     );
  }

  export  function DelayNode() {

    const delay = useSelector(state=> state.workflow.delay);

    return ( 
      <Card >
        <CardContent> 
          <Typography variant="caption">
            {`"Delay :" ${delay}` || "Set Delay"}
            </Typography>
        </CardContent>
      </Card>
     );
  }

  export  function YesNode() {
    const condition = useSelector(state=> state.workflow.condition.readSMS);
    return ( 
        <Card >
          <CardContent  > 
            <Typography variant="caption">
              Yes
              </Typography>
          </CardContent>
         </Card>
     );
  }

  export  function NoNode() {
    const condition = useSelector(state=> state.workflow.condition.readSMS);
    return ( 
        <Card >
          <CardContent  > 
            <Typography variant="caption">
              No
              </Typography>
          </CardContent>
         </Card>
     );
  }

  export  function ConditionNode() {
    const condition = useSelector(state=> state.workflow.condition.readSMS);
    return ( 
        <Card >
          <CardContent  > 
            <Typography variant="caption">
              {condition ? "Select Condition"  : "Condition Selected"}
              </Typography>
          </CardContent>
         </Card>
     );
  }

export default  StartNode;

