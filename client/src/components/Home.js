import React, { Component } from "react";
// import axios from "axios";
import MapContainer from "./Map";
import Earthquake from "./Earthquake";
import Graph from "./Graph";
import About from "./About";
import Kit from "./Kit";
import Help from "./Help";

// /*global google*/

// import api from "../api";

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
        <Help />

        <div className="Data">
          <div className="Graph">
            <Graph />
          </div>
          <div>
            <About />
          </div>
          <div>
            <Kit />
          </div>
        </div>

        <div className="earthquakes">
          <Earthquake>Earthquake</Earthquake>
        </div>

        <div className="map">
          <h3>Map</h3>
          <MapContainer />
        </div>
      </div>
    );
  }
}
export default Home;
