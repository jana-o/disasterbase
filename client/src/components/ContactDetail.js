import React from "react";
import api from "../contact-api";
import { Button } from "reactstrap";

class ContactDetail extends React.Component {
  id = this.props.match.params.id;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pictureUrl: ""
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    api.getContactDetail(id).then(contact => {
      console.log("test", id);
      this.setState({
        name: this.state.name,
        email: this.state.email,
        phone: this.props.phone,
        id: id
      });
    });
  }

  deleteContact(id) {
    // event.preventDefault(); //need to see in console
    console.log(id, "1111");
    api
      .deleteContact({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        id: this.state._id
      })
      .then(data => {
        this.setState({
          name: "",
          email: "",
          phone: "",
          id: ""
        });
      })
      .catch(err => console.log(err));
  }

  // modifyContact()

  render() {
    let id = this.props.match.params.id;
    let contact = this.props.contact;

    return (
      <div className="ContactDetails">
        <h4>Contact Details</h4>
        <div>
          Name: {id} <br />
          Email: {this.state.email} <br />
          Phone: {this.props.phone}
        </div>
        <Button
          outline
          color="primary"
          size="sm"
          onClick={event => this.modifyContact("id", event)}
        >
          Edit
        </Button>
        {"     "}
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
