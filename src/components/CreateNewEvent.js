import React, { Component } from "react";
// firebase
import Firebase from "../util/config";
import "firebase/database";
import axios from "axios"

// firebase database
const db = Firebase.database();

export default class CreateNewEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventName: null,
      partySize: null,
      type: null,
      apiKey: '851ca0e417e4da7927bb7094b0bb790d78758e507f353acd3aaa66d2e6e48462',
      apiUrl: 'https://api.unsplash.com',
    };
  }

  componentDidMount() {
    axios({
      "async": true,
      "crossDomain": true,
      "url": `${this.state.apiUrl}/search/photos?`,
      "method": "GET",
      params: {
        query: "office",
        client_id: `${this.state.apiKey}`
        // per_page: 20
      }
    }).then((response) => {
      console.log(response)
      this.setState({
        data: response.data
      })
    })
  }

  // componentDidMount() {
  //   axios({
  //     "async": true,
  //     "crossDomain": true,
  //     "url": `${this.state.apiUrl}/photos/?client_id=${this.state.apiKey}`,
  //     "method": "GET",
  //     params: {
  //       per_page: 20,
  //       order_by: "popular"
  //     }
  //   }).then((response) => {
  //     console.log(response)
  //     this.setState({
  //       data: response.data
  //     })
  //   })
  // }


  handleOnSubmit = e => {
    e.preventDefault();
    // if none of the values in the state is null
    if (Object.values(this.state) !== null) {
      // use the event name as the route key and update with party size and type of event info from state
      db.ref(`events/${this.state.eventName}`).update({
        partySize: this.state.partySize,
        type: this.state.type
      });
    } else {
      // else show error message
      console.log("input all values before submiting");
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
      <div className="wrapper createNewEvent" >
        <h2>Event Creation</h2>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="eventName">please enter event name</label>
          <input type="text" onChange={this.handelOnChange} id="eventName" placeholder="event name" />
          <label htmlFor="partySize">please enter party size</label>
          <input type="number" onChange={this.handelOnChange} id="partySize" placeholder="party size" />
          <label htmlFor="type">please enter type of event</label>
          <input type="text" onChange={this.handelOnChange} id="type" placeholder="type of event" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
