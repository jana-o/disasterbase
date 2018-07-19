import React, { Component } from "react";
//import Event from "./Event";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class TableContainer extends Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: "i",
      defaultSortOrder: "desc"
    };
  }
  render() {
    return (
      <div className="eventstable">
        <div />
        <BootstrapTable
          data={this.props.events.map((event, i) => {
            return {
              i: i + 1,
              place: event.place,
              mag: event.mag,
              coords: [
                event.coords.coordinates[0],
                " ",
                event.coords.coordinates[1]
              ]
            };
          })}
          ref="table"
          hover
          pagination
          options={this.options}
        >
          <TableHeaderColumn
            dataField="i"
            isKey={true}
            dataSort={true}
            dataAlign="center"
          >
            #
          </TableHeaderColumn>
          <TableHeaderColumn dataField="place" dataSort={true}>
            Place
          </TableHeaderColumn>
          <TableHeaderColumn dataField="mag" dataSort={true}>
            Magnitude
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default TableContainer;
