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
import Tidbits from "./Pages/Tidbits";
import Blog from './Pages/Blog';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Routes>
          <Route path="/travel" element={<Travel />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/tidbits" element={<Tidbits/>}/>
          <Route path="/blog" element={<Blog/>}>
            <Route path=":id" element={<Blog/>}/>
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}



export default App;
