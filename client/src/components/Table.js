import React, { Component } from "react";
import Event from "./Event";
import { Table } from "reactstrap";

class TableContainer extends Component {
  // state = { events: [] };

  // componentDidMount() {
  //   this.setState({
  //     events: this.props.events
  //    });
  //

  render() {
    return (
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
            {this.props.events.map((event, i) => {
              return (
                <Event
                  key={i}
                  event={event}
                  i={i}
                  selectEvent={this.selectEvent}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableContainer;
