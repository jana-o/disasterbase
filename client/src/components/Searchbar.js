import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div>
        <div className="searchbar">
          <h3>Search event </h3>
          <input
            type="text"
            placeholder="Search"
            onChange={this.props.handleEQSearch}
          />{" "}
        </div>
      </div>
    );
  }
}

export default Searchbar;

// value={this.props.search}
