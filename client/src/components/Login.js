import React, { Component } from "react";
import api from "../api";
import { Button } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange(stateFieldName, event) {
    let newState = {};
    newState[stateFieldName] = event.target.value;

    this.setState(newState);
  }

  handleClick(e) {
    e.preventDefault();
    api
      .login(this.state.email, this.state.password)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // Redirect to the home page
      })
      .catch(err => {
        console.log("ERROR");
      });
  }

  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <form>
          Email:{" "}
          <input
            type="text"
            value={this.state.email}
            onChange={e => {
              this.handleInputChange("email", e);
            }}
          />{" "}
          <br />
          Password:{" "}
          <input
            type="password"
            value={this.state.password}
            onChange={e => {
              this.handleInputChange("password", e);
            }}
          />{" "}
          <br />
          <Button color="primary" onClick={e => this.handleClick(e)}>
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
