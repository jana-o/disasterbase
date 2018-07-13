import React, { Component } from "react";
// import axios from "axios";
import MapContainer from "./Map";
import Earthquake from "./Earthquake";
/*global google*/

import api from "../api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earthquakes: []
    };
  }

  //var coords = results.features[i].geometry.coordinates;

  // {this.state.earthquakes.map(earthquake => (
  //   <Earthquake key={earthquake.id} name={earthquake.name} id={earthquake.id} />
  // ))}

  render() {
    return (
      <div className="Home">
        <div className="earthquakes">
          <Earthquake>Earthquake</Earthquake>
        </div>

        <div className="map">
          Map
          <MapContainer />
        </div>
        <div className="data">
          <div className="graphs">Graphs</div>
          <div className="graphs">Graphs</div>
        </div>
      </div>
    );
  }
}
export default Home;
