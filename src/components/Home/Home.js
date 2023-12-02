import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="homeBackgroundimage">
          <img src="/images/image_back.jpg" alt="" />
        </div>
        <div className="Heading"></div>
        <div className="HomeMatter">
          <h1>
            Critical Need for Blood Donors Blood donors of all blood types are
            needed now. Come to give blood and we’ll say thanks with a 100Rs
            e-gift card to a merchant of your choice.
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
