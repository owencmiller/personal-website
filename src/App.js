import React from "react";
import { Background}  from './components/Background';
import Home from './Pages/Home';
import Experiments from './Pages/Experiments';

class App extends React.Component {
  render() {
    return(
      <Background>
        <Home/>
        <Experiments/>
      </Background>
    );
  }
}



export default App;
