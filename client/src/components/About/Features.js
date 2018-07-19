import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Features extends Component {
  render() {
    return (
      <div className="features">
        <h5>Product</h5>
        <hr />
        <img
          width="50%"
          src="https://res.cloudinary.com/dgjh08wsa/image/upload/v1532019226/screen-help.png"
          className="App-logo"
          alt="logo"
        />
        <img
          width="50%"
          src="https://res.cloudinary.com/dgjh08wsa/image/upload/v1532019270/screen-mail.png"
          className="App-logo"
          alt="logo"
        />
        <p>
          If you are experiencing an earthquake click on: <br />
          <Button color="primary" size="sm">
            Get Help
          </Button>
          <br />
        </p>{" "}
        and we will notify the contacts from your <b>Emergency Contacts List</b>.
        Register <Link to={"/"}> TODAY</Link> to create a list.
      </div>
    );
  }
}

export default Features;
