import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="homeBackgroundimage">
          <img src="/images/Abouttt.jpg" alt="" />
        </div>

        <h1 className="Mat">
          Who We Are From the mission, fundamental principles and business
          practices that guide our organization, to the history of our service
          for more than a century, get to know the Red Cross.{" "}
        </h1>
        <div className="contact">
          All Rights Reserved, 2023. With thanks to Fresenius Kabi for design
          support. Global Blood Fund® is a tax-exempt 501(c)(3) nonprofit
          organization. Your gift is tax-deductible as allowed by law. Charity
          IDs: 39-2071848 (US); 1162880 (UK)
        </div>
      </div>
    );
  }
}
export default About;
