import React, { Component } from "react";
//import api from "../contact-api";
import { Button } from "reactstrap";

class Help extends Component {
  //state false

  // getHelp()

  render() {
    return (
      <div>
        {/* {this.state.message && ( */}
        {/* // <Alert color={this.state.messageType}>{this.state.message}</Alert>
        // )} */}
        <Button color="primary" size="sm" onClick={e => this.getHelp("id", e)}>
          {" "}
          Get Help
        </Button>
      </div>
    );
  }
}

export default Help;
