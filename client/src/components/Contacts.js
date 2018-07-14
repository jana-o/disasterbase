import React, { Component } from "react";
import api from "../contact-api";

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
              _id: data.id,
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
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact._id}>{contact.name}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            placeholder="Name of contact"
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            placeholder="email"
          />
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange.bind(this)}
            placeholder="phone"
          />
          <br />
          <button>Create new contact</button>
        </form>
      </div>
    );
  }
}

export default Contacts;
