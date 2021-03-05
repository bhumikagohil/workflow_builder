import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
  },
  title: {
    fontSize: "12px",
  },
  card: {
    height: "60px",
    width: "70px",
    padding: 0,
    "&:hover": {
      backgroundColor: "#d3d3d3 !important",
    },
  },
}));

export default function SimpleModal({ open, handleClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const length = useSelector((state) => state.workflow.elements.length);

  const handleContactClick = () => {
    dispatch({ type: "REMOVE_END_ELEMENTS" });
    history.push("/workflow_builder/contacts");
  };
  const handleSMSClick = () => {
    dispatch({ type: "REMOVE_END_ELEMENTS" });
    history.push("/workflow_builder/sms");
  };
  const handleDelayClick = () => {
    dispatch({ type: "REMOVE_END_ELEMENTS" });
    history.push("/workflow_builder/delay");
  };
  const handleConditionClick = () => {
    dispatch({ type: "REMOVE_END_ELEMENTS" });
    history.push("/workflow_builder/condition");
  };

  return (
    <div className={classes.paper}>
      <Typography align="center" className={classes.title}>
        Add Next Steps to Your Workflow
      </Typography>
      <Grid container direction="row" justify="space-evenly">
        <Grid item xs={3}>
          <Card className={classes.card} onClick={handleContactClick}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <PermContactCalendarOutlinedIcon
                    color="primary"
                    style={{ fontSize: "20px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption">Contacts</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card} onClick={handleSMSClick}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <SmsOutlinedIcon
                    color="primary"
                    style={{ fontSize: "20px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption">SMS</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card} onClick={handleDelayClick}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <WatchLaterOutlinedIcon
                    color="primary"
                    style={{ fontSize: "20px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption">Delay</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card} onClick={handleConditionClick}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <SettingsOutlinedIcon
                    color="primary"
                    style={{ fontSize: "20px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption">Condition</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
