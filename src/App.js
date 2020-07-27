import React from "react";
import { Background}  from './components/Background';
import Home from './Pages/Home';
import Experiments from './Pages/Experiments';

class App extends React.Component {
  render() {
    return(
        <div>
          <Home/>
          <Experiments/>
        </div>
    );
  }
}



export default App;
