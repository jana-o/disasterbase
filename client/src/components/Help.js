import React, { Component } from "react";
//import api from "../contact-api";
import { Button } from "reactstrap";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      needhelp: false
    };
  }

  getHelp = event => {
    console.log(event);
    this.setState({
      needhelp: true
    });
  };
  //get contacts, send email

  render() {
    return (
      <div>
        <Button color="primary" size="sm" onClick={e => this.getHelp("id", e)}>
          {" "}
          Get Help
        </Button>
        {/* {this.state.true && ( */}
        {/* // <Alert color={this.state.messageType}>{this.state.message}</Alert>
        // )} */}
      </div>
    );
  }
}

export default Help;
