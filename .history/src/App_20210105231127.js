import React from 'react';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { Provider } from 'react-redux'

import store from "./redux/store";
import Home from './Components/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          </Switch>
      </Router>
   </Provider>
  );
}

export default App;
