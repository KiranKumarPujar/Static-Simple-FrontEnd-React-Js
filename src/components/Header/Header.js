import { React, Component } from "react";

import "./Header.css";
import { Menu } from "antd";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="leftHeader">
          <h1>Blood Bank</h1>
        </div>
        <div className="rightHeader"> Donate Blood </div>
        <div className="leftHeader">
          {" "}
          <Menu />
        </div>
      </div>
    );
  }
}
export default Header;
