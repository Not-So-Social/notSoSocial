import React, { Component } from 'react';
import axios from 'axios';


class TvShows extends Component {
    constructor() {
        super();
        this.state = {
            apiData: [],
            showsFilteredByDay: [],
            selectedDay: "Monday",
        }
    }

    componentDidMount() {
        axios({
            url: 'http://api.tvmaze.com/shows',
            method: 'GET',
            "async": true,
            "crossDomain": true,
            dataType: 'json',
        }).then((response) => {
            console.log(response.data);

            this.setState({
                apiData: response.data
            })
        }).then(() => (this.getShows(this.state.apiData, this.state.selectedDay)))
    }

    // based on the day currently saved in state, make an API call to retrieve the shows airing then.
    // save the returned data to state as an array of show objects.
    getShows = (showList, dayOfWeek) => {
        let tempArray = [];
        for (let aShow in showList) {
            let broadCastDay = showList[aShow].schedule.days[0];
            if (broadCastDay === dayOfWeek) {
                console.log('broadcast day:', broadCastDay)
                tempArray.push(showList[aShow]);
            }
        }
        this.setState({
            showsFilteredByDay: tempArray,
        });
    }

    // when user selects a day, save the day to state
    getDay = (event) => {
        event.preventDefault();
        let newDay = event.target.value;
        console.log('day:', newDay)
        this.setState({
            selectedDay: newDay,
        })

        this.getShows(this.state.apiData, newDay);
    }
    

    render() {
        console.log('state: ', this.state);
        return (
            <div>
            <h1> Not So Social </h1>

            <div className="dropdownDays">
                <select name="days" id="days" onChange={this.getDay}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>

                <select name="genres" id="genres">
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Anime">Anime</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Crime">Crime</option>
                    <option value="Family">Family</option>
                    <option value="Myster">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Science-Fiction">Science-Fiction</option>
                    <option value="Thriller">Thriller</option>
                </select>

            </div>
            </div>
        )
    }
}

export default TvShows;