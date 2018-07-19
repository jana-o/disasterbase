import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import api from "../api";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      starttime: "",
      endtime: "",
      update: ""
    };
  }

  getUpdate = event => {
    api
      .getUpdate(this.state.starttime, this.state.endtime)
      .then(data => console.log("update", data));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div classname="updates mb-6">
        <fieldset>
          <legend>Choose date of events</legend>

          <div>
            <label for="start">Start</label>
            <input
              type="date"
              id="starttime"
              name="starttime"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
              value={this.state.starttime}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label for="end">End</label>
            <input
              type="date"
              id="endtime"
              name="endtime"
              value="2018-07-29"
              min="2018-01-01"
              max="2018-12-31"
              value={this.state.endtime}
              onChange={this.handleChange}
            />
          </div>
        </fieldset>
        <Button onClick={(starttime, endtime) => this.getUpdate()}>
          Get update
        </Button>
      </div>
    );
  }
}

export default Update;
