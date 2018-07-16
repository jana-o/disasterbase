import React from "react";
import api from "../contact-api";
import { Button } from "reactstrap";

class ContactDetail extends React.Component {
  id = this.props.match.params.id;
  state = {
    name: "",
    email: "",
    phone: ""
  };

  componentDidMount() {
    api.getContactDetail().then(contact => {
      this.setState({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        id: contact.id
      });
    });
  }

  // deleteContact(id, event) {
  //   event.preventDefault(); //need to see in console
  //   console.log(id, event, "1111");
  //   api
  //     .deleteContact({
  //       name: this.state.name,
  //       email: this.state.email,
  //       phone: this.state.phone,
  //       id: this.state._id
  //     })
  //     .then(data => {
  //       this.setState({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         id: ""
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  // modifyContact()

  render() {
    return (
      <div className="ContactDetails">
        <h4>Contact Details</h4>
        <div>
          Name: {this.state.name} <br />
          Email: {this.props.email} <br />
          Phone: {this.props.phone}
        </div>
        <Button
          outline
          color="primary"
          size="sm"
          onClick={event => this.deleteContact("id", event)}
        >
          Edit
        </Button>
        <Button
          color="primary"
          size="sm"
          onClick={event => this.deleteContact("id", event)}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default ContactDetail;
