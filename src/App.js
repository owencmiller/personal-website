import React from "react";
import { Background}  from './components/Background';
import Home from './Pages/Home';


class App extends React.Component {
  render() {
    return(
      <Background>
        <Home/>
      </Background>
    );
  }
}



export default App;
