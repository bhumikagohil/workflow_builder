import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Select,
  Typography,
  Paper,
  Button,
} from "@material-ui/core";

import {
  YesNode,
  NoNode,
  AddStepNode,
} from "../../Components/Flowchart/Elements";

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

function ConditionTab() {
  const classes = useStyles();
  let history = useHistory();

  const [read, setRead] = useState("");

  const length = useSelector((state) => state.workflow.elements.length);

  const handleSave = () => {
    dispatch({
      type: "SET_CONDITION",
      condition: { readSMS: read },
      add_yes_element: {
        id: length + 1,
        parent: { id: length },
        childOf: { number: length },
        name: "Yes",
        compo: <YesNode />,
        children: [],
      },
      add_no_element: {
        id: length + 2,
        parent: { id: length },
        childOf: { number: length },
        name: "No",
        compo: <NoNode />,
        children: [],
      },
      add_step_element: {
        id: length + 3,
        parent: { id: length + 2 },
        childOf: { number: length + 2 },
        name: "stepNode",
        compo: <AddStepNode />,
        children: [],
      },
    });
    dispatch({
      type: "ADD_STEP_ELEMENT",
      add_step_element: {
        id: length + 4,
        parent: { id: length + 1 },
        childOf: { number: length + 1 },
        name: "stepNode",
        compo: <AddStepNode />,
        children: [],
      },
    });
    history.push("/details");
  };
  const handleCancel = () => {
    history.push("/details");
  };

  const dispatch = useDispatch();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Typography gutterBottom variant="subtitle1" align="left">
          Read SMS
        </Typography>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          <Select
            native
            displayEmpty
            value={read}
            onChange={(e) => setRead(e.target.value)}
            inputProps={{
              name: "trigger",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
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
        <Button
          onClick={handleCancel}
          variant="contained"
          size="small"
          className={classes.button}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
export default ConditionTab;
