import React, { Component } from "react";
import api from "../api";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  componentDidMount() {
    api
      .getContacts()
      .then(contacts => {
        console.log(contacts);
        this.setState({
          contacts: contacts
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="Contacts">
        <h2>Your emergency contacts</h2>
        {this.state.contacts.map((c, i) => <li key={i}>{c.name}</li>)}
      </div>
    );
  }
}

export default Contacts;
