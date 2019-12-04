import React, { Component } from 'react';
import axios from 'axios';

class TvShows extends Component {
    constructor() {
        super();
        this.state = {
            apiData: []
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
        })
    }

    render() {
        return (
            <h1> Not So Social </h1>
        )
    }
}

export default TvShows;