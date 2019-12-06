import React, { Component } from "react";
// firebase
import Firebase from "../util/config";
import "firebase/database";
import Swal from "sweetalert2";

// firebase database
const db = Firebase.database();

export default class CreateNewEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventName: null,
      partySize: null,
      type: null
    };
  }

  handleOnSubmit = e => {
    e.preventDefault();
    // if none of the values in the state is null
    if (Object.values(this.state) !== null) {
      // use the event name as the route key and update with party size and type of event info from state
      db.ref(`events/${this.state.eventName}`).update({
        partySize: this.state.partySize,
        type: this.state.type
      });
      Swal.fire("Good Job !", "Your event has been created!", "success");
    } else {
      // else show error message
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all inputs!"
      });
    }
  };

  // dynamically handle set states with the event's id, and set the state with event's value
  handelOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="wrapper createNewEvent">
        <h2>Event Creation</h2>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="eventName">please enter event name</label>
          <input
            type="text"
            onChange={this.handelOnChange}
            id="eventName"
            placeholder="event name"
            value={this.state.eventName}
          />
          <label htmlFor="partySize">please enter party size</label>
          <input
            type="number"
            onChange={this.handelOnChange}
            id="partySize"
            placeholder="party size"
            value={this.state.partySize}
          />
          <label htmlFor="type">please enter type of event</label>
          <input
            type="text"
            onChange={this.handelOnChange}
            id="type"
            placeholder="type of event"
            value={this.state.type}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
