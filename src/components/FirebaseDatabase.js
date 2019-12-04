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

  handleOnEventClick = event => {
    console.log(event)
    this.props.retrieveEventClicked(event)
  };

  renderEvents = () => {
    return this.state.allEventsArray.map(eventClicked => {
      return (
        <li className="singleEvent" key={eventClicked.name}>
          <button onClick={() => this.handleOnEventClick(eventClicked)}>
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
        {!this.state.loading && this.renderEvents()}
      </ul>
    );
  }
}
