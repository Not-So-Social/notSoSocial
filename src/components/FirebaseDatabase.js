import React, { Component } from "react";
import Firebase from "../util/config";
import "firebase/database";

const db = Firebase.database().ref("events");

export default class FirebaseDatabase extends Component {
  constructor() {
    super();
    this.state = {
      allEventsArray: [],
      loading: false
    };
  }

  componentDidMount() {
    db.once("value", snapshot => {
      const data = snapshot.val();
      this.setState({ loading: true });
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
      this.setState({ loading: false });
    });
  }

  renderEvents = () => {
    return this.state.allEventsArray.map(event => {
      console.log(event);
      return (
        <li key={event.name}>
          <h2>{event.name}</h2>
          <p>type: {event.type}</p>
          <p>party size: {event.partySize}</p>
        </li>
      );
    });
  };

  render() {
    return <ul>{!this.state.loading && this.renderEvents()}</ul>;
  }
}
