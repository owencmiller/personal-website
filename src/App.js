import React from "react";
import {
  BrowserRouter as Router,
<<<<<<< HEAD
  Routes,
=======
  Switch,
>>>>>>> 91315887820f3b7744b02b2f113a43ac8970685d
  Route,
  Link
} from "react-router-dom";
import { Background}  from './components/Background';
import Home from './Pages/Home';
<<<<<<< HEAD
import Projects from './Pages/Projects';
import Travel from './Pages/Travel';
import NavBar from './components/NavBar';
import Tidbits from "./Pages/Tidbits";
=======
import Tidbits from './Pages/Tidbits';
import Blog from './Pages/Blog';
import NavBar from './components/NavBar';
>>>>>>> 91315887820f3b7744b02b2f113a43ac8970685d

class App extends React.Component {
  render() {
    return(
      <Router>
<<<<<<< HEAD
        <Routes>
          <Route path="/travel" element={<Travel />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/tidbits" element={<Tidbits/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
=======
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
>>>>>>> 91315887820f3b7744b02b2f113a43ac8970685d
      </Router>
    );
  }
}



export default App;
