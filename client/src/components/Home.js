import React, { Component } from "react";
import axios from "axios";
import MapContainer from "./Map";
/*global google*/

import api from "../api";

class Home extends Component {
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
        <div className="map">
          Map
          <MapContainer />
        </div>
        <div>hhhhhhh</div>
      </div>
    );
  }
}
export default Home;
