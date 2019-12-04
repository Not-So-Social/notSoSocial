import React, { Component } from 'react';
import './styles/style.scss';
import TvShows from './components/TvShows';

// import firebase from "./firebase"

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  
  render() {
    return (
      <TvShows />
      )
  }
}

export default App;
