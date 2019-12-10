import React, { Component } from "react";
// firebase
import Firebase from "../util/config";
import "firebase/database";

import axios from 'axios'

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
    db.on("value", async snapshot => {
      // getting the value from snapshot and put it in an data constant
      const data = snapshot.val();
      let newStateWithEvents = [];
      // using a for loop we are getting each object's key and use it
      for (const key in data) {
        // if the data has the key
        if (data.hasOwnProperty(key)) {
          // the constant object called event will be used to create a new object
          const event = data[key];
          // name: event name
          // type: type of event
          // partySize: party size
          const eventObj = {
            name: event.eventName,
            type: event.type,
            partySize: event.partySize
          };

          // axios get to get the gif url from giphy api
          await axios({
            url: "https://api.giphy.com/v1/gifs/search?",
            method: "GET",
            dataType: "json",
            params: {
              api_key: "jRZvAnoNBqc9hIvol9x5B8ImgDUKOuSY",
              q: eventObj.name
            }
          }).then(data => {
            eventObj.socialEventImage = data.data.data[0].images.original.url;
          });

          // push all events into the empty array in a loop
          newStateWithEvents.push(eventObj);
        }
      }
      // set the state with the new array
      this.setState({
        allEventsArray: newStateWithEvents
      });
    });
  }

  renderEvents = () => {
    // map through the all events array and render elements, for each event clicked call the retrieveEventClicked props and pass the eventClicked obj in so App.js will make use of it
    return this.state.allEventsArray.map((eventClicked, i) => {

const liStyle = {
  background: `url(${eventClicked.socialEventImage})`,
  backgroundRepeat: 'no-repeat',
  
}

      return (
        <li className="singleEvent" key={i}>
          <button style={liStyle} onClick={() => this.props.retrieveEventClicked(eventClicked)}>
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
      <section className="renderListOfEvents">
        <div className="wrapper">
          <ul className="listOfEvents">
            {/* only run renderEvents if allEventsArray isn't empty*/}
            {this.state.allEventsArray && this.renderEvents()}
          </ul>
        </div>
      </section>
    );
  }
}
