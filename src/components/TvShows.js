import React, { Component } from 'react';
import axios from 'axios';


class TvShows extends Component {
    constructor() {
        super();
        this.state = {
            apiData: [],
            showsFilteredByDay: [],
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
        console.log('only friday:',tempArray);
        this.setState({
            showsFilteredByDay: tempArray,
        });
    }

    render() {
        console.log('state: ', this.state);
        return (
            <h1> Not So Social </h1>
        )
    }
}

export default TvShows;