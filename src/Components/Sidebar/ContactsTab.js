import  React ,{ useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button ,Grid  } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {useSelector ,useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import {ContactsNode , AddStepNode} from "../../Components/Flowchart/Elements";
import ContactList from '../ContactList';

const useStyles = makeStyles((theme) => ({
    grid:{
       height: "100%"
    },
  button: {
    margin: theme.spacing(1)
}
}));

const columns = [
  { field: 'contactNum', headerName: 'Contact Number', width: "100%" },
];

export default function ContactsTab() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const[rowSelected,setrowsSelected]=useState([])

    const handleRowSelection = (RowSelectedParams) => {
        rowSelected.push(RowSelectedParams.data.id)
    }

    let history = useHistory();

    const length = useSelector(state=> state.workflow.elements.length);
  
    const handleSave = ()=>{
      dispatch({ type: 'CONTACTS_SELECTED' , contactsSelected: rowSelected , 
      add_element:{id: length+1, parent: {id: length},childOf:{number: length}, name: 'contacs',compo: <ContactsNode/>, children: []},
     })
     dispatch({type: 'ADD_STEP_ELEMENT',
     add_step_element:{id: length+2, parent: {id: length+1},childOf:{number: length+1}, name: 'stepNode',compo: <AddStepNode/>, children: []},})
      history.push("/visual_workflow_builder/details");
    }
    const handleCancel = ()=>{
      history.push("/visual_workflow_builder/details");
    }
    return  (
      <Grid container direction="column" justify="center" className={classes.grid}>
            <Grid item style={{ height: 380 , width: '100%' }}>
             <DataGrid 
                rows={ContactList} 
                columns={columns} 
                onRowSelected={handleRowSelection} 
                checkboxSelection 
                hideFooter
                />
            </Grid>
            <Grid item >
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
            </Grid>
        </Grid>
    );
}
