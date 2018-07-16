import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        Berlin © 2018 ~{" "}
        <a href="/" style={{ color: "grey" }}>
          {" "}
          disasterbase.co{" "}
        </a>~
      </div>
    );
  }
}
export default Footer;
