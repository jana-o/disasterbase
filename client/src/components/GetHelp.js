import React, { Component } from "react";
import api from "../api";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

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
          <CardImg
            top
            width="50%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Help is on its way</CardTitle>
            <CardSubtitle>Hi Name,</CardSubtitle>
            <CardText>
              We have notified your emergency contacts.<br /> Remember:<br />
              If you are indoors: stay there! Look for cover, stay clear of
              exterior walls, glass.<br />
              If you're outside: get into the open.<br />
              Beware of potential tsunamis or landslides
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
