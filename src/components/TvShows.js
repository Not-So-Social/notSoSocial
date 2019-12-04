import React, { Component } from 'react';
import axios from 'axios';


class TvShows extends Component {
    constructor() {
        super();
        this.state = {
            apiData: [],
            showsFilteredByDay: [],
            showsFilteredByGenre: [],
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
            // console.log(response.data);

            this.setState({
                apiData: response.data
            })
        }).then(() => (this.getShows(this.state.apiData, "Friday")))
    }

    getShows = (showList, dayOfWeek) => {
        let tempArray = [];
        for (let aShow in showList) {
            let broadCastDay = showList[aShow].schedule.days[0];
            if (broadCastDay === dayOfWeek) {
                tempArray.push(showList[aShow]);
            }
        }
        // console.log('only friday:', tempArray);
        this.setState({
            showsFilteredByDay: tempArray,
        });
    }

    filteredShow = (showListFilterByDay, event) => {
        let filteredArrayGenre = [];
        let userGenre = event.target.value;
        showListFilterByDay.map((data) => {
            // console.log(data)
            data.genres.forEach((genre) => {
                if (genre === userGenre) {
                    // console.log(genre)
                    filteredArrayGenre.push(data)
                    console.log(filteredArrayGenre)
                }
            })
        })
        // this.setState({
        //     showsFilteredByGenre: filteredArrayGenre
        // })
    }

    render() {
        // this.filteredShow(this.state.showsFilteredByDay, "Action")
        // console.log('state: ', this.state);
        return (
            <div>
                <h1> Not So Social </h1>

                <div className="dropdownDays">
                    <select name="days" id="days">
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>

                    <select name="genres" id="genres" onChange={this.filteredShow(showsFilteredByDay, event)}>
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