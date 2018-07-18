import React, { Component } from "react";
import { Map, Marker, Circle, GoogleApiWrapper } from "google-maps-react";
/*global google*/

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
    //console.log("dgdfgdf", marker);
    this.setState({
      center: marker.position,
      zoom: 5
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
    let long = -155.293167;
    let lat = -19.4003334;
    let m = 5;
    const triangleCoords = [
      { lat: lat + m, lng: long },
      { lat: lat, lng: long + m },
      { lat: lat - m, lng: long },
      { lat: lat, lng: long - m }
    ];

    const triangleCoordsx = [
      { lat: 25.774, lng: -54.19 },
      { lat: 28.774, lng: -61.19 },
      { lat: 27.321, lng: -54.757 },
      { lat: 25.774, lng: -50.19 }
    ];

    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          className={"map"}
          style={style}
          zoom={zoom}
          center={center}
          onZoom_changed={this.handleZoomChange}
          ref={googleMap => {
            if (!googleMap) {
              return;
            }
            //console.log(googleMap);
            this.gmap = googleMap;
          }}
        >
          {this.props.events.map(event => {
            return (
              <Marker
                key={event._id}
                name={event.name}
                text={event.mag}
                position={{
                  lng: event.coords.coordinates[0],
                  lat: event.coords.coordinates[1]
                }}
                value={{
                  lng: event.coords.coordinates[0],
                  lat: event.coords.coordinates[1]
                }}
                onClick={this.handleMarkerClick}
              />
            );
          })}

          {/* <Circle
            position={{ lng: 45, lat: 3 }}
            center={{ lng: 45, lat: 3 }}
            radius={30000000}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}
            value={"Test"}
            options={{}}
          />*/}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUTV-rXp0MkyXfDftokR4tFGFqq0lb2zc"
})(MapContainer);
