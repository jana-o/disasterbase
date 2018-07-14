import React, { Component } from "react";
import api from "../contact-api";
import { Button, Table } from "reactstrap";

class Contacts extends Component {
  state = { contacts: [] };

  componentDidMount() {
    api.getContacts().then(contacts => {
      this.setState({ contacts: contacts });
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.getAttribute("name")]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault(); //need to see in console
    console.log("submission");
    api
      .addContact({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      })
      .then(data => {
        this.setState({
          name: "",
          email: "",
          contacts: [
            ...this.state.contacts,
            {
              name: this.state.name,
              email: this.state.email,
              phone: this.state.phone
            }
          ] //this array to update the view!
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Your Emergency Contacts</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => (
              <tr>
                <th key={contact._id} scope="row">
                  {this.state.contacts.length}
                </th>
                <td>
                  <bold>{contact.name}</bold>
                </td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <Button outline color="primary" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3>Add New Contact</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            placeholder="Email"
          />
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange.bind(this)}
            placeholder="Phone"
          />
          <br />
          <Button>Create new contact</Button>
        </form>
      </div>
    );
  }
}

export default Contacts;
