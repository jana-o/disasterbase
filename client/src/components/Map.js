import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import api from "../api";

class MapContainer extends Component {
  state = { events: [] };

  componentDidMount() {
    api.getEvents().then(events => {
      this.setState({ events: events });
    });
  }
  render() {
    let style = {
      width: "90vw",
      height: "80vh"
    };

    let center = {
      lat: 52.509663,
      lng: 13.376481
    };

    return (
      <div className="mapContainer">
        {/* <div className="events">
          {this.state.events.map(events => {
            return <Event key={event.id} flat={event} />;
          })}
        </div> */}
        <Map
          google={this.props.google}
          className={"map"}
          style={style}
          zoom={1.5}
          initialCenter={center}
        >
          {this.state.events.map(event => {
            return (
              <Marker
                key={event.id}
                name={event.name}
                text={event.mag}
                position={{ lng: event.coords[0], lat: event.coords[1] }}
                // position={{ lat: 37.778519, lng: -122.40564 }}
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

// export default MapContainer;
