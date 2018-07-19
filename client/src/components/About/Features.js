import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Features extends Component {
  render() {
    return (
      <div className="features">
        <h5>PRODUCT.</h5>
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
        <p className="text-justify">
          In case you are experiencing an earthquake click on:{" "}
        </p>{" "}
        <Button color="primary" size="sm">
          Get Help
        </Button>
        <br />{" "}
        <p className="text-justify">
          and we will notify the contacts from your EMERGENCY CONTACT LIST.
          Register <Link to={"/"}> TODAY</Link> to create a list.
        </p>
      </div>
    );
  }
}

export default Features;
