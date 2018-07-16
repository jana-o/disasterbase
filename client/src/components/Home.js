import React, { Component } from "react";
// import axios from "axios";
import MapContainer from "./Map";
import Event from "./Event";
import Graph from "./Graph";
import About from "./About";
import Kit from "./Kit";
import Help from "./Help";
import Searchbar from "./Searchbar";

import { Table } from "reactstrap";

import Marker from "./Marker";

// /*global google*/

import api from "../api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      contacts: []
      // selectEvent: null,
      // search: ""
    };
  }

  componentDidMount() {
    api.getEvents().then(events => {
      this.setState({ events: events });
    });
  }

  // selectEvent = event => {
  //   console.log(event);
  //   this.setState({
  //     selectedEvent: event
  //   });
  // };

  handleSearch = event => {
    this.setState({
      search: event.target.value
      //events: this.state.events.filter(event => new RegExp())
    });
  };

  //var coords = results.features[i].geometry.coordinates;

  // {this.state.earthquakes.map(earthquake => (
  //   <Earthquake key={earthquake.id} name={earthquake.name} id={earthquake.id} />
  // ))}

  render() {
    return (
      <div className="Home">
        <Help />

        <div className="Search">
          <Searchbar search={this.state.search} />

          <div className="events">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Mag</th>
                  <th>Coordinates</th>
                </tr>
              </thead>
              <tbody>
                {this.state.events.map((event, i) => {
                  return (
                    <Event
                      key={i}
                      event={event}
                      //selectFlat={this.selectFlat}
                    />
                  );
                })}
              </tbody>
            </Table>
          </div>

          <div className="graph">
            <Graph />
          </div>

          <div className="map">
            <h3>Map</h3>
            <MapContainer>
              {/* {this.state.events.map(event => {
                return (
                  <Marker
                    key={event.id}
                    lat={event.lat}
                    lng={event.lng}
                    name={event.name}
                    //selected={event === this.state.selectEvent}
                  />
                );
              })} */}
            </MapContainer>
          </div>
        </div>

        <div className="Data">
          <div>
            <About />
          </div>
          <div>
            <Kit />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
