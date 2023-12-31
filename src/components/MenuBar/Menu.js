import React, { Component } from "react";
import "./Menu.css";

import Home from "../Home/Home";
import Login from "../Login/Login";
import About from "../About/About";
import More from "../More/More";
import ContactUs from "../ContactUs/ContactUs";

import { Tabs } from "antd";

class Menu extends Component {
  render() {
    return (
      <div className="App">
        <Tabs className="TabHolder" defaultActiveKey="">
          <Tabs.TabPane tab="Home" key="1">
            <Home />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Login" key="2">
            <Login />
          </Tabs.TabPane>

          <Tabs.TabPane tab="About" key="3">
            <About />
          </Tabs.TabPane>

          <Tabs.TabPane tab="More" key="4">
            <More />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Contact Us" key="5">
            <ContactUs />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}
export default Menu;
