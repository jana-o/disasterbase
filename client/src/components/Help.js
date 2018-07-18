import React, { Component } from "react";
//import api from "../contact-api";
import { Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      needhelp: false,
      visible: false
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  onGetHelp = event => {
    console.log(event);
    this.setState({
      needhelp: false,
      visible: true
    });
  };
  //get contacts, send email

  render() {
    return (
      <div>
        <Button
          color="primary"
          size="sm"
          onClick={e => this.onGetHelp("id", e)}
        >
          {" "}
          Get Help
        </Button>

        <Alert
          color="danger"
          isOpen={this.state.visible}
          toggle={this.onDismiss}
        >
          To alert my emergency contacts click here:{" "}
          <Link to={"/get-help"} style={{ color: "black" }}>
            GET HELP
          </Link>
        </Alert>
      </div>
    );
  }
}

export default Help;
