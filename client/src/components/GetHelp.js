import React, { Component } from "react";
import api from "../api";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../styles/email.png";

class GetHelp extends Component {
  componentDidMount() {
    api.getHelp().then(data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <Card>
          {/* <img width="20%" src={logo} className="App-logo" alt="logo" />{" "} */}
          {/* <CardImg top width="100%" src={logo} alt="Card image cap" /> */}
          <CardBody>
            <CardTitle>Help is on its way!</CardTitle>
            <CardSubtitle>
              We have notified your emergency contacts.
            </CardSubtitle>
            <hr />
            <CardText classname="cardtext">
              Take care of yourself and remember:<br />
              If you are indoors: stay there! Look for cover, stay clear of
              exterior walls, glass.<br />
              If you're outside: get into the open.<br />
              Beware of potential tsunamis or landslides.
            </CardText>
            <Button color="primary">
              <Link to={"/"} style={{ color: "black" }}>
                Back
              </Link>
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default GetHelp;
