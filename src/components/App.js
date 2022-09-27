import React from "react";
import Header from "./Header";
import Main from "./Main";
import "./app.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <>
      <Header id='head' />
      <Main />
      </>
    )
  }
}

export default App;
