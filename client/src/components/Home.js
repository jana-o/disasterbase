import React, { Component } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
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
  componentDidMount() {
    axios
      .get(
        `http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson`
      )
      .then(response => {
        console.log("response data", response.data.results);
        // this.setState({
        //   earhtquakes: response.data.results.map((pokemon, i) => ({
        //     name: pokemon.name,
        //     url: pokemon.url,

        //   })),
        //     name: response.data.results.name
        //   });
      });
  }
  //http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson
  // usgs = "http://earthquake.usgs.gov/earthquakes/";
  // geoJsonFeed = "feed/v1.0/summary/4.5_month.geojson";
  // url = "{}{}".format(usgs, geoJsonFeed);
  // req = requests.get(url);
  // data = json.loads(req.text);

  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <div className="map" />
        <GoogleMapReact>zoom={1}</GoogleMapReact>
      </div>
    );
  }
}
export default Home;
