import React, { Component } from "react";
import "./styles/style.scss";
// import TvShows from "./components/TvShows";
// import FirebaseDatabase from "./components/FirebaseDatabase";
// import DisplayResultDashboard from "./components/DisplayResultDashboard";
// import CreateNewEvent from './components/CreateNewEvent';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SingleTvShowInfo from "./components/SingleTvShowInfo";
import MainPage from "./components/MainPage";

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

  retrieveTvShowClicked = event => {
    this.setState(
      {
        tvShowClicked: event
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <Router>
        <div></div>
        <Route exact path="/" component={MainPage} />
        <Route path="/tv/:id" component={SingleTvShowInfo} />
      </Router>
    );
  }
}

export default App;
