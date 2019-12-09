import React, { Component } from "react";
// firebase
import Firebase from "../util/config";
import "firebase/database";
import axios from "axios"
import Swal from "sweetalert2";

// firebase database
const db = Firebase.database();

export default class CreateNewEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventName: null,
      partySize: null,
      type: null,
      // socialEventImage: " "
    };
  }

  // eventGif = (event) => {
  //   axios({
  //     url: "https://api.giphy.com/v1/gifs/search?",
  //     method: "GET",
  //     dataType: "json",
  //     params: {
  //       api_key: "jRZvAnoNBqc9hIvol9x5B8ImgDUKOuSY",
  //       q: event,
  //       rating: "PG",
  //     }
  //   }).then((data) => {
  //     console.log(data.data.data[0].url)
  //     this.setState({
  //       socialEventImage: data.data.data[0].url
  //   })
  // })}

  handleOnSubmit = e => {
    e.preventDefault();
    // this.eventGif(this.state.eventName);
    // if none of the values in the state is null
    if (Object.values(this.state).indexOf("") === -1) {
      // use the event name as the route key and update with party size and type of event info from state
      db.ref(`events`).push({
        eventName: this.state.eventName,
        partySize: this.state.partySize,
        type: this.state.type,
      });
      Swal.fire("Good Job !", "Your event has been created!", "success");
      this.setState({
        eventName: "",
        partySize: "",
        type: ""
      });
    } else {
      console.log("error");
      // else show error message
      Swal.fire("Oops...", "Please fill all inputs!", "error");
    }
  };

  // dynamically handle set states with the event's id, and set the state with event's value
  handelOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="wrapper createNewEvent" >
        <h2>Didn't find an event for you? Create a new event here!</h2>

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
            min="1"
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
