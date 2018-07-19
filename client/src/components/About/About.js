import React, { Component } from "react";
import Info from "./Info";
import Features from "./Features";

import Kit from "./Kit";
import Player from "./Player";

class About extends Component {
  render() {
    return (
      <div className="about ">
        <div>
          <Info />
        </div>
        <div>
          <Features />
        </div>
        <div className="row">
          <Kit />
          <Player />
        </div>
        <div />
      </div>
    );
  }
}

export default About;
