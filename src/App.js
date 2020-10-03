import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Background}  from './components/Background';
import Home from './Pages/Home';
import Experiments from './Pages/Experiments';
import NavBar from './components/NavBar'

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/experiments">
            <Experiments />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}



export default App;
