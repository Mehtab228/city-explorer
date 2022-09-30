import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./app.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Header id='head' />
      <Main  id='main2'/>
      <Footer id='foot'/>
      </div>
    )
  }
}

export default App;
