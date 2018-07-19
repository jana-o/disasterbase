import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
// import Header from "./Layouts/header";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import Footer from "./Layouts/footer";
import Home from "./Home";
//import MapContainer from "./map";
//import GoogleMapReact from "google-map-react";
import About from "./About/About";
import GetHelp from "./GetHelp";

import Profile from "./Profile";
import Contacts from "./Contacts";
import Login from "./Login";
import Signup from "./Signup";
// import Map from "./Map";
import api from "../api";
import "./App.css";
import ContactDetail from "./ContactDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    (this.state = {
      isOpen: false,
      events: [],
      contacts: []
    }),
      api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Disasterbase</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {api.isLoggedIn() && (
                  <NavLink tag={Link} to="/contacts">
                    Contacts
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                {api.isLoggedIn() && (
                  <NavLink tag={Link} to="/profile">
                    Profile
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                {api.isLoggedIn() && (
                  <NavLink
                    tag={Link}
                    to="/"
                    onClick={() => this.handleLogoutClick()}
                  >
                    Logout
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                {!api.isLoggedIn() && (
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                {!api.isLoggedIn() && (
                  <NavLink tag={Link} to="/signup">
                    Signup
                  </NavLink>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/update" />
            <Route path="/get-help" exact component={GetHelp} />

            <Route path="/profile" exact component={Profile} />

            <Route path="/contacts" exact component={Contacts} />
            <Route path="/contacts/:id" exact component={ContactDetail} />

            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />

            <Route render={() => <h2>404</h2>} />
          </Switch>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
