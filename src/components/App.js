import React from "react";
import Header from "./Header";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Main />
      </>
    )
  }
}

export default App;
