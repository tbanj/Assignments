import React, { Component } from "react";
import "./App.css";
import Test from "./component/test";
import Studentlist from "./component/Studentlist";
class App extends Component {
  render() {
    return (
      <div>
        <Studentlist />
        <Test/>
      </div>
    );
  }
}

export default App;
