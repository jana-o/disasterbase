import React, { Component } from "react";
import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";
///*global google*/

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
      zoom: 7
    });
  };

  // onMouseoverMarker = marker => {
  //   console.log("dgdfgdf", marker);
  //   name = this.props.name;
  // };

  handleZoomChange = e => {
    console.log("zoom", e);
    this.setState({
      zoom: e.zoom
    });
  };

  getPath(coordinates) {
    let m = 5;
    return [
      [
        {
          lat: coordinates[1] + m,
          lng: coordinates[0]
        },
        {
          lat: coordinates[1] + (m * Math.sqrt(2)) / 2,
          lng: coordinates[0] + (m * Math.sqrt(2)) / 2
        },
        {
          lat: coordinates[1],
          lng: coordinates[0] + m
        },
        {
          lat: coordinates[1] - (m * Math.sqrt(2)) / 2,
          lng: coordinates[0] + (m * Math.sqrt(2)) / 2
        },
        {
          lat: coordinates[1] - m,
          lng: coordinates[0]
        },
        {
          lat: coordinates[1] - (m * Math.sqrt(2)) / 2,
          lng: coordinates[0] - (m * Math.sqrt(2)) / 2
        },
        {
          lat: coordinates[1],
          lng: coordinates[0] - m
        },
        {
          lat: coordinates[1] + (m * Math.sqrt(2)) / 2,
          lng: coordinates[0] - (m * Math.sqrt(2)) / 2
        }
      ]
    ];
  }

  render() {
    let style = {
      width: "100%",
      height: "400px",
      position: "relative !important"
    };

    let { center, zoom } = this.state;
    // let long = -155.293167;
    // let lat = -19.4003334;
    // let m = 5;
    // const triangleCoords = [
    //   { lat: lat + m, lng: long },
    //   { lat: lat, lng: long + m },
    //   { lat: lat - m, lng: long },
    //   { lat: lat, lng: long - m }
    // ];

    // const polygon = [
    //   { lat: 37.789411, lng: -122.422116 },
    //   { lat: 37.785757, lng: -122.421333 },
    //   { lat: 37.789352, lng: -122.415346 }
    // ];

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
          {/* {this.props.events.map(event => {
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
                onMouseover={this.onMouseoverMarker}
              />
            );
          })} */}

          {this.props.events.map(event => {
            return (
              <Polygon
                fillColor="#0000FF"
                fillOpacity={0.2}
                paths={this.getPath(event.coords.coordinates)}
                strokeColor="#0000FF"
                strokeOpacity={0.0}
                strokeWeight={2}
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

{
  /* <Circle
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
          />*/
}
