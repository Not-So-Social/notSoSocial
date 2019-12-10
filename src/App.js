import React, { Component } from "react";
import "./styles/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router basename="/notSoSocial">
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/tv/:id" component={SingleTvShowInfo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
