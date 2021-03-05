import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  Select,
  TextField,
  Typography,
  Paper,
  Button,
} from "@material-ui/core";

import { AddStepNode } from "../../Components/Flowchart/Elements";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    width: "100%",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function WorkFlowTab() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [trigger, setTrigger] = useState("");

  let history = useHistory();

  const handleSave = () => {
    dispatch({
      type: "SET_WORKFLOW_DETAILS",
      workflowName: name,
      trigger: trigger,
      add_element: {
        id: 2,
        parent: { id: 1 },
        childOf: { number: 1 },
        name: "workflow",
        compo: <AddStepNode />,
        children: [],
      },
    });
    history.push("/workflow_builder/details");
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Typography gutterBottom variant="subtitle1" align="left">
          Workflow Name
        </Typography>
        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="outlined-basic"
          variant="outlined"
          size="small"
          className={classes.formControl}
        />
      </div>
      <div>
        <Typography gutterBottom variant="subtitle1" align="left">
          Trigger
        </Typography>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          <Select
            native
            displayEmpty
            value={trigger}
            onChange={(e) => setTrigger(e.target.value)}
            inputProps={{
              name: "trigger",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"When subscriber joins a list"}>
              When subscriber joins a list
            </option>
            <option value={"The anniversary of a date"}>
              The anniversary of a date
            </option>
          </Select>
        </FormControl>
      </div>
      <div>
        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
        >
          Save
        </Button>
        <Button variant="contained" size="small" className={classes.button}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
export default WorkFlowTab;
