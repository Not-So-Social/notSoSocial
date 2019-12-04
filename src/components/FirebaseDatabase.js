import React, { Component } from "react";
// firebase
import Firebase from "../util/config";
import "firebase/database";

// initiate firebase db
const db = Firebase.database().ref("events");

export default class FirebaseDatabase extends Component {
  constructor() {
    super();
    this.state = {
      allEventsArray: []
    };
  }

  componentDidMount() {
    // getting all events from firebase db
    db.once("value", snapshot => {
      // getting the value from snapshot and put it in an data constant
      const data = snapshot.val();
      // start the loading
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const event = data[key];
          const eventObj = {
            name: key,
            type: event.type,
            partySize: event.partySize
          };
          this.setState({
            allEventsArray: [...this.state.allEventsArray, eventObj]
          });
        }
      }
    });
  }

  renderEvents = () => {
    return this.state.allEventsArray.map(eventClicked => {
      return (
        <li className="singleEvent" key={eventClicked.name}>
          <button onClick={() => this.props.retrieveEventClicked(eventClicked)}>
            <h2>{eventClicked.name}</h2>
            <p>type: {eventClicked.type}</p>
            <p>party size: {eventClicked.partySize}</p>
          </button>
        </li>
      );
    });
  };

  render() {
    return (
      <ul className="listOfEvents">
        {this.state.allEventsArray && this.renderEvents()}
      </ul>
    );
  }
}
