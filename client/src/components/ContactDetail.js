import React from "react";
import api from "../contact-api";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class ContactDetail extends React.Component {
  id = this.props.match.params.id;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: ""
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    api.getContactDetail(id).then(contact => {
      console.log("test", id);
      this.setState({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        id: contact._id
      });
    });
  }

  // deleteContact(e) {
  //   let id = this.props.match.params.id;
  //   //event.preventDefault(); //need to see in console
  //   console.log(id, "1111");
  //   api
  //     .deleteContact(id)
  //     .then(data => {
  //       this.setState({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         id: null
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div className="ContactDetails">
        <h4>Contact Details</h4>
        <div>
          Name: {this.state.name} <br />
          Email: {this.state.email} <br />
          Phone: {this.state.phone}
        </div>
        <Button
          outline
          color="primary"
          size="sm"
          onClick={event => this.modifyContact(event)}
        >
          Edit
        </Button>
        {"     "}
        <Button outline color="primary" size="sm">
          <Link to={"/contacts"} style={{ color: "black" }}>
            Back
          </Link>
        </Button>
      </div>
    );
  }
}

export default ContactDetail;
