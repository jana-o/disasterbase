import React from "react";

class Earthquake extends React.Component {
  render() {
    return (
      <div className="earthquake">
        <h3>{this.props.mag}</h3>
      </div>
    );
  }
}

export default Earthquake;
//var coords = results.features[i].geometry.coordinates;
