import React, { Component } from "react";
import "./styles/style.scss";
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

  render() {
    return (
      <Router basename='/'>
        <Route exact path="/" component={MainPage} />
        <Route path="/tv/:id" component={SingleTvShowInfo} />
      </Router>
    );
  }
}

export default App;
