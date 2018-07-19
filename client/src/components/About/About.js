import React, { Component } from "react";
import Info from "./Info";
import Features from "./Features";

import Kit from "./Kit";
import Player from "./Player";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div>
          <Info />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Kit />
        </div>
        <div>
          <Player>Test</Player>
        </div>
      </div>
    );
  }
}

export default About;
