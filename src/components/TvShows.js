import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import CreateNewEvent from './CreateNewEvent';
import FirebaseDatabase from './FirebaseDatabase';
import DisplayResultDashboard from './DisplayResultDashboard';
import SelectDay from './SelectDay';
import SelectGenre from './SelectGenre';
import { Link } from 'react-router-dom';

class TvShows extends Component {
    constructor() {
        super();
        this.state = {
            apiData: [],
            showsFilteredByDay: [],
            showsFilteredByGenre: [],
            selectedDay: "Monday",
            selectedGenre: "Action",
            showsArray: false,
            genreArray: false,
            tvShowClicked: null,
            eventClicked: null,
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
        }).then(() => (
            this.getShows(this.state.apiData, this.state.selectedDay)
        )).catch(() => {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        })
    }
    retrieveTvShowClicked = event => {
        this.setState({
            tvShowClicked: event
        });
    };

    retrieveEventClicked = event => {
        this.setState({
            eventClicked: event
        });
    };

    // based on the day currently saved in state, make an API call to retrieve the shows airing then.
    // save the returned data to state as an array of show objects.
    getShows = (showList, dayOfWeek) => {
        let tempArray = [];

        for (let aShow in showList) {
            let broadCastDay = showList[aShow].schedule.days;

            if (broadCastDay.includes(dayOfWeek)) {
                if (!showList[aShow].network) {
                    showList[aShow].network = showList[aShow].webChannel;
                }
                tempArray.push(showList[aShow]);
            }
        }

        this.setState({
            showsFilteredByDay: tempArray,
            showsArray: true,
            genreArray: false,
        });
    }

    // when user selects a day, save the day to state
    getDay = (event) => {
        event.preventDefault();
        let newDay = event.target.value;
        this.setState({
            selectedDay: newDay,
        })

        this.getShows(this.state.apiData, newDay);
    }

    // filter show once the user inputs the genre
    filteredShow = (event) => {
        let filteredArrayGenre = [];
        let userGenre = event.target.value;
        this.state.showsFilteredByDay.map((data) => {
            return (
                data.genres.forEach((genre) => {
                    if (genre === userGenre) {
                        filteredArrayGenre.push(data)
                        // console.log(filteredArrayGenre)
                    }
                })
            )
        })
        if (!filteredArrayGenre[0]) {
            console.log(filteredArrayGenre, "try")
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        this.setState({
            showsFilteredByGenre: filteredArrayGenre,
            showsArray: false,
            genreArray: true,
        })
    }

    renderAllFilteredTvShows = (array) => {
        // if the first item in showsFilteredByGenre isn't null, we can start the function

        if (array[0]) {
            // map the array of objects
            return array.map(show => {
                // for each obj in the arr, filter out only the info we want:
                // TV show title
                // tv show id for key
                // Picture src
                // Link to IMDB page
                // genres from array to string
                // Description of show in html
                // Network name string
                // Scheduled time to play
                let newTvShowObjectToDisplay = {
                    title: show.name,
                    id: show.id,
                    image: show.image.original,
                    imdb: `https://www.imdb.com/title/${show.externals.imdb}`,
                    genres: show.genres.join(" "),
                    summaryHtml: show.summary,
                    network: show.network.name,
                    time: show.schedule.time
                };

                // destructuring the newTvShowObjectToDisplay obj
                const {
                    title,
                    id,
                    image,
                } = newTvShowObjectToDisplay;

                // rendering the li
                return (
                    <li className="tvShowListItem" key={id}>
                        <button
                            onClick={() => this.retrieveTvShowClicked(newTvShowObjectToDisplay)}
                        >
                            <h2>{title}</h2>
                            <img src={image} alt={title} />
                            <Link to={`/tv/${id}`}>For more information, click here!</Link>
                        </button>
                    </li>
                );
            });
        }
    };

    render() {
        // console.log('state: ', this.state);
        return (
            <div>
                <section className="selectSection">
                    <SelectDay getDay={this.getDay}/>

                    <FirebaseDatabase retrieveEventClicked={this.retrieveEventClicked} />
                    <CreateNewEvent />

                    <SelectGenre filteredShow={this.filteredShow} />

                {/* start of displaySection filtered shows by day */}
                {this.state.showsArray ?
                    <div className="tvShowWrapper displaySection">
                        <div className="displayInner">
                            <ul className="displayAllFilteredTvShows">{this.renderAllFilteredTvShows(this.state.showsFilteredByDay)}</ul>
                        </div>
                    </div> :
                    null
                }
                {/* start of displaySection filtered shows by genre */}
                {this.state.genreArray ?
                    <div className="tvShowWrapper displaySection">
                        <div className="displayInner">
                            <ul className="displayAllFilteredTvShows"> {this.renderAllFilteredTvShows(this.state.showsFilteredByGenre)}</ul>
                        </div>
                    </div> :
                    null
                }
            </section >

            <section>
                {this.state.eventClicked && this.state.tvShowClicked && (
                    <DisplayResultDashboard
                        eventClicked={this.state.eventClicked}
                        tvShowClicked={this.state.tvShowClicked}
                    />
                )}
            </section>
            </div>
        )
    }
}

export default TvShows;