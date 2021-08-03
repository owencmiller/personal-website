import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Background}  from './components/Background';
import Home from './Pages/Home';
import Tidbits from './Pages/Tidbits';
import Blog from './Pages/Blog';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/tidbits">
            <Tidbits />
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
