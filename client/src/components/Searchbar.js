import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search an event"
            onChange={this.props.handleEQSearch}
          />{" "}
        </div>
      </div>
    );
  }
}

export default Searchbar;

// value={this.props.search}
