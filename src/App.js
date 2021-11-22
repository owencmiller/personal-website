import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Background}  from './components/Background';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Travel from './Pages/Travel';
import NavBar from './components/NavBar';
import Tidbits from "./Pages/Tidbits";

class App extends React.Component {
  render() {
    return(
      <Router>
        <Routes>
          <Route path="/travel" element={<Travel />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/tidbits" element={<Tidbits/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}



export default App;
