import React, { Component } from "react";
import axios from "axios";
import MapContainer from "./map";
/*global google*/

import api from "../api";
// import Map from "./components/Map";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earthquakes: []
    };
  }
  //  componentDidMount() {
  //   axios
  //      .get(
  //        `http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson`
  //      )
  //      .then(response => {
  //        console.log("response data", response.data.results);
  //      });
  //  }
  //http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson
  // usgs = "http://earthquake.usgs.gov/earthquakes/";
  // geoJsonFeed = "feed/v1.0/summary/4.5_month.geojson";
  // url = "{}{}".format(usgs, geoJsonFeed);
  // req = requests.get(url);
  // data = json.loads(req.text);

  render() {
    return (
      <div className="Home">
        <div className="data">
          <div className="main">
            <div className="map">
              Map
              <MapContainer />
              {/* <GoogleMapReact zoom={1}>Map</GoogleMapReact> */}
            </div>
            <div className="graphs">Graphs</div>
            <div className="graphs">Graphs</div>
          </div>
          <div className="paragraph">Paragraph</div>
        </div>
      </div>
    );
  }
}
export default Home;
