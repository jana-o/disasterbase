import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    let style = {
      width: "90vw",
      height: "80vh"
    };

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
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUTV-rXp0MkyXfDftokR4tFGFqq0lb2zc"
})(MapContainer);

// export default MapContainer;
