import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

class SingleTvShowInfo extends Component {
  constructor() {
    super();
    this.state = {
      tvShow: [],
      imageUrl: "",
      network: "",
      time: "",
      summary: "",
      image: ""
    };
  }

  componentDidMount() {
    // axios get call to tvMaxe api with the url handle props
    axios({
      url: `https://api.tvmaze.com/shows/${this.props.match.params.id}`,
      method: "GET",
      async: true,
      crossDomain: true,
      dataType: "json"
    })
      .then(response => {
        // set the state with information from the api call
        this.setState({
          tvShow: response.data,
          imageUrl: response.data.image.original,
          network: response.data.network.name,
          time: response.data.schedule.time,
          summary: response.data.summary,
          genre: response.data.genres.join(", "),
          imdb: `https://www.imdb.com/title/${response.data.externals.imdb}`
        });
        // changing http to https to avoid mixed state warnings
        this.setState({
          image: this.state.imageUrl.replace(/^http:\/\//i, "https://")
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Cool"
        });
      });
  }

  render() {
    // this is an amazing regex like function created by none other than Lewis the mad scientist, it completely removes all the bad html tags elements we get from the tvMaze api summary description key value pair. After the filtering process, only information about the tv show remains, renewed, cleansed and ready to face the world again.
    const removeTags = rawString => {
      let parseArray = [...rawString];
      let newArray = [];
      let newString = "";
      let inProcess = false;

      parseArray.forEach(item => {
        if (item === "<") {
          inProcess = true;
        }

        if (!inProcess) {
          newArray.push(item);
        }

        if (item === ">") {
          inProcess = false;
        }
      });

      newArray.forEach(item => {
        newString += item;
      });
      
      // newborn
      return newString;
    };

        // console.log(this.state.tvShow.image)
        return(
            <div className="tvShowInfo">
                <div className="tvShowPhoto">
                    <img src={this.state.image} alt={this.state.tvShow.name} />
                </div>
                <div className="tvShowDescription">
                    <h2>{this.state.tvShow.name}</h2>

                    <p>Genres: {this.state.genre}</p>
                    <p>Network Name: {this.state.network}</p>
                    <p>Time: {this.state.time}</p>
                    <p>{removeTags(this.state.summary)}</p>
                    <a href={this.state.imdb}>Go to Imdb</a>

                    <h3><Link to="/"> Return to main page </Link></h3>

                </div>
            </div>
        )
    }
}

export default SingleTvShowInfo;
