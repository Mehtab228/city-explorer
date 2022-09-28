import React from "react";
import Header from "./Header";
import Main from "./Main";
import "./app.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Header id='head' />
      <Main  id='main2'/>
      </div>
    )
  }
}

export default App;
