import React from 'react';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {  Drawer , Grid , Typography , Paper } from '@material-ui/core';
import store from "./redux/store";

import FlowChart from "./Components/Flowchart/index";
import WorkflowTab from './Components/Sidebar/WorkflowTab';
import DetailsTab from './Components/Sidebar/DetailsTab';
import ContactsTab from './Components/Sidebar/ContactsTab';
import SMSTab from './Components/Sidebar/SMSTab';
import DelayTab from './Components/Sidebar/DelayTab';
import ConditionTab from './Components/Sidebar/ConditionTab';

const routes = [
  {
    path: "/",
    main: () => <WorkflowTab/>
  },
  {
    path: "/details",
    main: () => <DetailsTab/>
  },
  {
    path: "/contacts",
    main: () => <ContactsTab/>
  },
  {
    path: "/sms",
    main: () => <SMSTab/>
  },{
    path: "/delay",
    main: () => <DelayTab/>
  },
  {
    path: "/condition",
    main: () => <ConditionTab/>
  },
];

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

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
          <Route exact path="/">
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
                          <Switch>
                          {routes.map((route, index) => (
                            <Route
                              key={index}
                              path={route.path}
                              children={<route.main />}
                            />
                          ))}
                        </Switch>
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
          </Route>
      </Router>
   </Provider>
  );
}

export default App;
