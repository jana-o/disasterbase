import React from "react";
//import api from "../api";
//import { Table } from "reactstrap";

class Events extends React.Component {
  render() {
    let event = this.props.event;
    let i = this.props.i;

    return (
      <tr>
        <td>{i + 1}</td>
        <td>{event.place}</td>
        <td>{event.mag}</td>
        <td>
          {event.coords[0]}
          {" - "}
          {event.coords[1]}
        </td>
      </tr>
    );
  }
}

export default Events;
//var coords = results.features[i].geometry.coordinates;
