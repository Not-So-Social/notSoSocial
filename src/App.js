import React, { Component } from "react";
import "./styles/style.scss";
import TvShows from "./components/TvShows";
import FirebaseDatabase from "./components/FirebaseDatabase";
import DisplayResultDashboard from "./components/DisplayResultDashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      eventClicked: null
    };
  }

  retrieveEventClicked = event => {
    this.setState(
      {
        eventClicked: event
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <TvShows />
        <FirebaseDatabase retrieveEventClicked={this.retrieveEventClicked} />
        {this.state.eventClicked && (
          <DisplayResultDashboard eventClicked={this.state.eventClicked} />
        )}
      </div>
    );
  }
}

export default App;
