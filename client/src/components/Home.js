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

// /*global google*/

import api from "../api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      contacts: [],
      selectedEvent: null
      // search: ""
    };
  }

  componentDidMount() {
    api.getEvents().then(events => {
      this.setState({ events: events });
    });
  }

  selectEvent = event => {
    console.log(event);
    this.setState({
      selectedEvent: event
    });
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value
      //events: this.state.events.filter(event => new RegExp())
    });
  };

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
                  <th>Magnitude</th>
                  <th>Coordinates</th>
                </tr>
              </thead>
              <tbody className="events">
                {this.state.events.map((event, i) => {
                  return (
                    <Event
                      key={i}
                      event={event}
                      i={i}
                      selectFlat={this.selectFlat}
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
            <MapContainer />
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
