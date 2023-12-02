import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/MenuBar/Menu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import More from "./components/More/More";
import { Tabs } from "antd";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tabs className="TabHolder" defaultActiveKey="">
          <Tabs.TabPane tab="Home" key="1">
            {/* <Home /> */}
          </Tabs.TabPane>

          <Tabs.TabPane tab="Login" key="2">
            {/* <Login /> */}
          </Tabs.TabPane>

          <Tabs.TabPane tab="About" key="3">
            {/* <About /> */}
          </Tabs.TabPane>

          <Tabs.TabPane tab="Donars" key="4">
            {/* <Donars /> */}
          </Tabs.TabPane>

          <Tabs.TabPane tab="More" key="6">
            {/* <More /> */}
          </Tabs.TabPane>
        </Tabs>

        <Menu />
        <Home />
        <About />
        <More />
      </div>
    );
  }
}

export default App;
