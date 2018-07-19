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
        <div className="helpbutton">
          <Button color="primary" onClick={e => this.onGetHelp("id", e)}>
            {" "}
            Get Help
          </Button>
        </div>

        <Alert
          color="danger"
          isOpen={this.state.visible}
          toggle={this.onDismiss}
        >
          <h4 className="alert-heading">SOS?</h4>
          To notify your emergency contacts click here: <hr />
          <Link
            to={"/get-help"}
            style={{ color: "black" }}
            className="alert-link"
          >
            GET HELP
          </Link>
        </Alert>
      </div>
    );
  }
}

export default Help;
