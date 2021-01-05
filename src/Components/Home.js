import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,  Drawer , Divider , Grid, Typography , Paper } from '@material-ui/core';

import FlowChart from "./Flowchart/index";
import Sidebar from "./Sidebar/index";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    display: 'flex',
    justifyContent: "center",
    padding: theme.spacing(3),
  },
  grid: {
    height: "90%",
    width: "100%"
  },
  paperMain: {
    height: "98%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
      <Grid container direction="row" spacing={1} >
            <Grid item xs={2}>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor="left"
            >
              <Grid container spacing={1} className={classes.grid}>
                  <Grid item xs={12}>
                      <Paper className={classes.paper}>
                          <Typography>Visual Workflow Builder</Typography>
                      </Paper>
                  </Grid>
                  <Grid item xs={12}>
                      <Paper className={`${classes.paperMain} ${classes.paper}`}>
                      <Sidebar />
                      </Paper>
                  </Grid>
              </Grid>
            </Drawer>
            </Grid>
            <Grid item xs={10}>
              <main className={classes.content}>
                  <FlowChart/>
              </main>
            </Grid>
        </Grid>
     
      
  );
}
