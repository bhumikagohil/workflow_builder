import React from 'react';
import { BrowserRouter as Router,} from "react-router-dom";
import { Provider } from 'react-redux'

import store from "./redux/store";
import Home from './Components/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Route exact path="/">
          <Home />
          </Route>
      </Router>
   </Provider>
  );
}

export default App;
