import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import CreateNewEvent from './CreateNewEvent';
import FirebaseDatabase from './FirebaseDatabase';
import DisplayResultDashboard from './DisplayResultDashboard';
import SelectDay from './SelectDay';
import SelectGenre from './SelectGenre';
import GetRandomTvShow from "./GetRandomTvShow";
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
          apiData: response.data
        });
      })
      .then(() => this.getShows(this.state.apiData, this.state.selectedDay))
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Cool"
        });
      });
  }

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
  };

  // this function parses through the summary html and removes html tags from the string.
  removeTags = rawString => {};

  render() {
    // console.log('state: ', this.state);
    return (
      <section className="selectSection">
        <div className="dropdownDays">
          {/* start of days selections */}
          <label className="visuallyHidden" htmlFor="days">
            please select a day to get results for that day
          </label>
          <select name="days" id="days" onChange={this.getDay}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          {/* start of genres selection */}
          <label className="visuallyHidden" htmlFor="genres">
            please select a genre to get results for that genre
          </label>
          <select name="genres" id="genres" onChange={this.filteredShow}>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Anime">Anime</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Science-Fiction">Science-Fiction</option>
            <option value="Thriller">Thriller</option>
          </select>
        </div>
        {/* end of dropdown days */}
        {/* start of displaySection filtered shows by day */}
        {this.state.showsArray ? (
          <div className="tvShowWrapper displaySection">
            <div className="displayInner">
              <ul className="displayAllFilteredTvShows">
                {this.renderAllFilteredTvShows(this.state.showsFilteredByDay)}
              </ul>
            </div>
          </div>
        ) : null}
        {/* start of displaySection filtered shows by genre */}
        {this.state.genreArray ? (
          <div className="tvShowWrapper displaySection">
            <div className="displayInner">
              <ul className="displayAllFilteredTvShows">
                {this.renderAllFilteredTvShows(this.state.showsFilteredByGenre)}
              </ul>
            </div>
          </div>
        ) : null}
        {/* get random tv show button that shows up if genreArray isn't null */}
        {this.state.genreArray ? (
          <GetRandomTvShow
            retrieveTvShowClicked={this.props.retrieveTvShowClicked}
            filteredTvShows={this.state.showsFilteredByGenre}
          />
        ) : null}
      </section>
      // end of select section
    );
  }
}

export default TvShows;
