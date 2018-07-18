import React, { Component } from "react";
// import axios from "axios";
import MapContainer from "./Map";
import Searchbar from "./Searchbar";
import TableContainer from "./Table";

import Help from "./Help";

import api from "../api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      contacts: [],
      singleEvent: [],
      selectEvent: null,
      search: ""
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
    });
  };

  render() {
    //console.log("This is this.state");
    let displayEvents = this.state.events.filter(event => {
      return (
        event.place.toUpperCase().indexOf(this.state.search.toUpperCase()) !==
        -1
      );
    });
    return (
      <div className="Home">
        <Help />

        <div className="Search">
          <Searchbar handleEQSearch={this.handleSearch} />

          {/* <div className="graph">
            <Graph />
          </div> */}

          <div className="map">
            <h3>Map</h3>
            <MapContainer
              events={displayEvents}
              // onMarkerClick={this.handleMarker}
            />
          </div>

          <div className="events">
            <TableContainer events={displayEvents} />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
