import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "./Layouts/header";

import Footer from "./Layouts/footer";
import Home from "./Home";
//import MapContainer from "./map";
//import GoogleMapReact from "google-map-react";

import Profile from "./Profile";
import Contacts from "./Contacts";
import AddContacts from "./AddContacts";
import Secret from "./Secret";
import Login from "./Login";
import Signup from "./Signup";
// import Map from "./Map";
import api from "../api";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earthquakes: []
    };
    api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <header className="Header">
          <div className="Navbar" />
          <Link to="/">Home </Link>

          <Link to="/contacts">Contacts </Link>
          {api.isLoggedIn() && (
            <Link to="/add-contact">Add Emergency Contact </Link>
          )}
          <Link to="/profile">Profile </Link>
          {!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
          {!api.isLoggedIn() && <Link to="/login">Login</Link>}
          {!api.isLoggedIn() && <Link to="/profile">Profile</Link>}

          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}

          <Link to="/secret">Secret </Link>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/profile" exact component={Profile} />

          <Route path="/contacts" component={Contacts} />
          <Route path="/add-contacts" component={AddContacts} />

          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
