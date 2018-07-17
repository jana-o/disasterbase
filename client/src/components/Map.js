import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  state = {
    events: [],
    center: {
      lat: 52.509663,
      lng: 13.376481
    },
    zoom: 2
  };

  componentDidMount() {
    this.setState({ events: this.props.events, selectFlat: null });
  }

  handleMarkerClick = marker => {
    console.log("dgdfgdf", marker);
    this.setState({
      center: marker.position,
      zoom: 8
      // singleEvent: event.target.value
    });
  };

  handleZoomChange = e => {
    console.log("zoom", e);
    this.setState({
      // center: marker.position,
      zoom: e.zoom
      // singleEvent: event.target.value
    });
  };

  render() {
    let style = {
      width: "100%",
      height: "400px",
      position: "relative !important"
    };

    let { center, zoom } = this.state;

    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          className={"map"}
          style={style}
          zoom={zoom}
          center={center}
          onZoom_changed={this.handleZoomChange}
        >
          {this.props.events.map(event => {
            return (
              <Marker
                key={event._id}
                name={event.name}
                text={event.mag}
                position={{ lng: event.coords[0], lat: event.coords[1] }}
                value={{ lng: event.coords[0], lat: event.coords[1] }}
                onClick={this.handleMarkerClick}
              />
            );
          })}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUTV-rXp0MkyXfDftokR4tFGFqq0lb2zc"
})(MapContainer);
