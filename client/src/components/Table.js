import React, { Component } from "react";
//import Event from "./Event";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class TableContainer extends Component {
  render() {
    return (
      <div className="events">
        <BootstrapTable
          data={this.props.events.map((event, i) => {
            return {
              i: i + 1,
              place: event.place,
              coords: [
                event.coords.coordinates[0],
                " ",
                event.coords.coordinates[1]
              ]
            };
          })}
          striped
          hover
          pagination
        >
          <TableHeaderColumn isKey dataField="i">
            Number
          </TableHeaderColumn>
          <TableHeaderColumn dataField="place">Place</TableHeaderColumn>
          <TableHeaderColumn dataField="coords">Coordinates</TableHeaderColumn>
        </BootstrapTable>,
        {/* <Table>
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
        </Table> */}
      </div>
    );
  }
}

export default TableContainer;
