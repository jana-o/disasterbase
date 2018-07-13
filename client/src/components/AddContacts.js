import React, { Component } from "react";
// import axios from "axios";
import { Button } from "reactstrap";

// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from "../api";

class AddContacts extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     email: "",
  //     phone: ""
  //   };
  // }

  // handleInputChange(stateFieldName, event) {
  //   let newState = {};
  //   newState[stateFieldName] = event.target.value;

  //   this.setState(newState);
  // }

  // handleClick(e) {
  //   e.preventDefault();
  //   console.log(this.state.name, this.state.email);
  //   let data = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     phone: this.state.phone
  //   };
  //   api
  //     .postContact(data)
  //     .then(result => {
  //       console.log("SUCCESS!");
  //       this.setState({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         message: `Your emergency contact '${
  //           this.state.name
  //         }' has been created`
  //       });
  //       setTimeout(() => {
  //         this.setState({
  //           message: null
  //         });
  //       }, 2000);
  //     })
  //     .catch(err => {
  //       console.log("ERROR");
  //     });
  // }
  render() {
    return (
      <div className="AddContact">
        <h2>Add new emergency contact</h2>
        <form>
          Name:{" "}
          <input
            type="text"
            value={this.state.name}
            onChange={e => {
              this.handleInputChange("name", e);
            }}
          />{" "}
          <br />
          Email:{" "}
          <input
            type="text"
            value={this.state.emails}
            onChange={e => {
              this.handleInputChange("emails", e);
            }}
          />{" "}
          <br />
          Phone:{" "}
          <input
            type="number"
            value={this.state.number}
            onChange={e => {
              this.handleInputChange("number", e);
            }}
          />{" "}
          <br />
          <br />
          <Button color="primary" onClick={e => this.handleClick(e)}>
            {" "}
            Create emergency contact
          </Button>
        </form>
        <div
          style={{
            margin: 10,
            backgroundColor: "red",
            display: this.state.message ? "block" : "none"
          }}
        >
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default AddContacts;
