import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Drawer, makeStyles, Grid, Typography, Paper } from "@material-ui/core";
import FlowChart from "./Components/Flowchart/index";
import routes from "./Components/routes";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
  grid: {
    height: "90%",
    width: "100%",
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
        <Grid container direction="row" spacing={1}>
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
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          children={route.sidebar}
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
              <FlowChart />
            </main>
          </Grid>
        </Grid>
      </Router>
    </Provider>
  );
}

export default App;
