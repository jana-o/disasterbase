import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div>
        <div className="searchbar">
          <h3>Searchbar </h3>
          <input
            type="text"
            placeholder="Search"
            value={this.props.search}
            onChange={this.props.handleSearch}
          />{" "}
        </div>
      </div>
    );
  }
}

export default Searchbar;
