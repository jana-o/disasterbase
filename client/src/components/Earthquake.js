import React from "react";

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png

class Earthquake extends React.Component {
  // handleClick = () => {}
  render() {
    // this.props.pokemon.name;

    return (
      <div className="earthquake">
        <h3>{this.props.mag}</h3>
      </div>
    );
  }
}

export default Earthquake;
