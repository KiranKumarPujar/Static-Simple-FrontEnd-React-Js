import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/MenuBar/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
