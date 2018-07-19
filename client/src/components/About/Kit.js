import React, { Component } from "react";

class Kit extends Component {
  render() {
    return (
      <div>
        <h5>Disaster Survival Kit</h5>
        <hr />
        <ul className="kit">
          <li>Water</li>
          <li>Food</li>
          <li>Flashligts and spare batteries</li>
          <li>Portable battery-powered radio</li>
          <li>First aid kit</li>
          <li>Special e.g. medications, pet needs</li>
          <li>Important papers and cash</li>
          <li>Clothes</li>
        </ul>
        For more information visit:{" "}
        <a
          href="https://www.fema.gov/media-library/assets/documents/3234"
          style={{ color: "grey" }}
        >
          {" "}
          Fema.gov{" "}
        </a>
      </div>
    );
  }
}

export default Kit;
