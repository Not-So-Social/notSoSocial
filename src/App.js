import React, { Component } from "react";
import "./styles/style.scss";
import TvShows from "./components/TvShows";
import FirebaseDatabase from "./components/FirebaseDatabase";
// import firebase from "./firebase"

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <TvShows />
        <FirebaseDatabase />
      </div>
    );
  }
}

export default App;
