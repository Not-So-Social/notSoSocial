import React, { Component } from "react";
// firebase
import Firebase from "../util/config";
import "firebase/database";
// sweet alert
import Swal from "sweetalert2";

// firebase database
const db = Firebase.database();

export default class CreateNewEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventName: "",
      partySize: "",
      type: ""
    };
  }

  handleOnSubmit = e => {
    e.preventDefault();
    // if none of the values in the state is null
    if (Object.values(this.state).indexOf("") === -1) {
      // use the event name as the route key and update with party size and type of event info from state
      const { eventName, partySize, type } = this.state;
      // push new event obj from state to firebase
      db.ref(`events`).push({
        eventName: eventName,
        partySize: partySize,
        type: type
      });
      // success message
      Swal.fire("Good Job !", "Your event has been created!", "success");
      // empty out the inputs after the user has submitted their new event
      this.setState({
        eventName: "",
        partySize: "",
        type: ""
      });
    } else {
      console.error("user inputs empty", this.state);
      // else show error message
      Swal.fire("Oops...", "Please fill all inputs!", "error");
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
      <section className="wrapper createNewEvent">
        <h2>Didn't find an event for you? Create a new event here!</h2>
        <form onSubmit={this.handleOnSubmit}>
          {/* Event Name */}
          <label htmlFor="eventName">please enter event name</label>
          <input
            type="text"
            onChange={this.handelOnChange}
            id="eventName"
            name="eventName"
            placeholder="event name"
            value={this.state.eventName}
          />
          {/* Event party size */}
          <label htmlFor="partySize">please enter party size</label>
          <input
            type="number"
            min="1"
            onChange={this.handelOnChange}
            id="partySize"
            name="partySize"
            placeholder="party size"
            value={this.state.partySize}
          />
          {/* Event type */}
          <label htmlFor="type">please enter type of event</label>
          <input
            type="text"
            onChange={this.handelOnChange}
            id="type"
            name="type"
            placeholder="type of event"
            value={this.state.type}
          />
          {/* Submit button */}
          <label aria-hidden="true" htmlFor="submit">
            submit your new event here
          </label>
          <input type="submit" id="submit" name="submit" value="Submit" />
        </form>
      </section>
      // end of create new event section
    );
  }
}
