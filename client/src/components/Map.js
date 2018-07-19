import React, { Component } from "react";
import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";
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
    this.setState({ events: this.props.events });
    this.circlesArray = [];
  }

  handleMarkerClick = polygon => {
    console.log("dgdfgdf", polygon);
    this.setState({
      center: polygon.position,
      zoom: 4
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

  addMapCircle(coords, mag) {
    this.circlesArray.push(
      new google.maps.Circle({
        fillColor: "#FF0000",
        fillOpacity: 0.7,
        strokeWeight: 0,
        center: {
          lat: coords[1],
          lng: coords[0]
        },
        radius: 15000 * mag,
        map: this.gmap.map
      })
    );
  }

  componentWillReceiveProps(props) {
    this.circlesArray.map(circle => {
      circle.setMap(null);
    });
    this.circlesArray = [];
  }

  getPath(coordinates) {
    let m = 3;
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
            this.gmap = googleMap;
          }}
        >
          {this.props.events.map((event, i) => {
            this.addMapCircle(event.coords.coordinates, event.mag);
          })}

          {/* {this.props.events.map(event => {
            return (
              <Polygon
                fillColor="#ff0000"
                fillOpacity={0.2}
                paths={this.getPath(event.coords.coordinates)}
                strokeColor="#0000FF"
                strokeOpacity={0.0}
                strokeWeight={2}
                onClick={this.handleMarkerClick}
                // onMouseover={this.onMouseoverMarker}
              />
            );
          })} */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUTV-rXp0MkyXfDftokR4tFGFqq0lb2zc"
})(MapContainer);

{
  /* {this.props.events.map(event => {
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
          })} */
}

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

// {
//   lat: coordinates[1] + (m * m) / Math.sqrt(0.259),
//   lng: coordinates[0] + m * 0.259
// },
// {
//   lat: coordinates[1] + (m * m) / Math.sqrt(0.5),
//   lng: coordinates[0] + m * 0.5
// },
// {
//   lat: coordinates[1] + (m * m) / Math.sqrt(0.707),
//   lng: coordinates[0] + m * 0.707
// },
// {
//   lat: coordinates[1] + (m * m) / Math.sqrt(0.866),
//   lng: coordinates[0] + m * 0.866
// },
// {
//   lat: coordinates[1] + (m * m) / Math.sqrt(0.966),
//   lng: coordinates[0] + m * 0.966
// },
