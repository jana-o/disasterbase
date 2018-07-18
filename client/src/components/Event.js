import React from "react";

class Events extends React.Component {
  handleClick = () => {
    this.props.selectEvent(this.props.event);
  };
  render() {
    let event = this.props.event;
    let i = this.props.i;

    return (
      <tr className="event" onClick={this.props.handleClick}>
        <td>{i + 1}</td>
        <td>{event.place}</td>
        <td>{event.mag}</td>
        <td>
          {event.coords.coordinates[0]}
          {" - "}
          {event.coords.coordinates[1]}
        </td>
      </tr>
    );
  }
}

export default Events;
//var coords = results.features[i].geometry.coordinates;
