import React, { Component } from "react";
// import "./styles/style.scss";
import TvShows from "./TvShows";
import FirebaseDatabase from "./FirebaseDatabase";
import DisplayResultDashboard from "./DisplayResultDashboard";
import CreateNewEvent from './CreateNewEvent';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import SingleTvShowInfo from './components/SingleTvShowInfo';

class MainPage extends Component {
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
                    <CreateNewEvent />
                    <FirebaseDatabase retrieveEventClicked={this.retrieveEventClicked} />
                    {this.state.eventClicked && this.state.tvShowClicked && (
                        <DisplayResultDashboard eventClicked={this.state.eventClicked} tvShowClicked={this.state.tvShowClicked} />
                    )}
                </div>
        );
    }
}

export default MainPage;
