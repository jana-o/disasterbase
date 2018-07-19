import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3>ABOUT.</h3>
        <hr />
        <p className="text-justify">
          Our Mission is to help people before, during, and after disasters.
          Disasterbase is a database of up to date information on earthquakes,
          vulcanos and other natural disasters.<br />
        </p>
        <h5>REAKT with react</h5>
        <p className="text-justify">
          Our service provides strategies and tools for Real time EArthquake
          RisK reducTion. <br /> When an earthquake is detected, a warning is
          issued to all users in our network. You can send an e-mail to your
          contacts to say you are fine ot need help.
        </p>
      </div>
    );
  }
}

export default Info;
