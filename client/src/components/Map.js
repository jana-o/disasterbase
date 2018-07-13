import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, Polygon } from "google-maps-react";

class MapContainer extends Component {
  render() {
    let style = {
      width: "90vw",
      height: "80vh"
    };
    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 }
    ];
    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          className={"map"}
          style={style}
          zoom={1.5}
          initialCenter={{
            lat: 52.509663,
            lng: 13.376481
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Test"}
            position={{ lat: 37.778519, lng: -122.40564 }}
          />
          <Marker
            name={"Dolores park"}
            position={{ lat: 7.759703, lng: -122.428093 }}
          />
          <Marker />
          <Marker
            name={"Your position"}
            position={{ lat: 37.762391, lng: -122.439192 }}
          />
          <Polygon
            paths={triangleCoords}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUTV-rXp0MkyXfDftokR4tFGFqq0lb2zc"
})(MapContainer);
