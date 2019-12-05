import React, { Component } from "react";
import "./styles/style.scss";
import TvShows from "./components/TvShows";
import FirebaseDatabase from "./components/FirebaseDatabase";
import DisplayResultDashboard from "./components/DisplayResultDashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      eventClicked: null,
      tvShowClicked: null
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

  retrieveTvShowClicked = (event) => {
    this.setState(
      {
        tvShowClicked: event
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div>
        <TvShows retrieveTvShowClicked={this.retrieveTvShowClicked} />
        <FirebaseDatabase retrieveEventClicked={this.retrieveEventClicked} />
        {this.state.eventClicked && this.state.tvShowClicked && (
          <DisplayResultDashboard eventClicked={this.state.eventClicked} tvShowClicked={this.state.tvShowClicked} />
        )}
      </div>
    );
  }
}

export default App;
