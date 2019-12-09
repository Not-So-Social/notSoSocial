import React, {Component} from "react";
import axios from "axios"
import Swal from "sweetalert2";

export default class DisplayResultDashboard extends Component {
  constructor() {
    super();
    this.state = {
      socialEventImage: ""
    }
  }

  componentDidMount() {
  const {name} = this.props.eventClicked;
  axios({
        url: "https://api.giphy.com/v1/gifs/search?",
        method: "GET",
        dataType: "json",
        params: {
          api_key: "jRZvAnoNBqc9hIvol9x5B8ImgDUKOuSY",
          q: name,
        }
    }).then((data) => {
      this.setState({
        socialEventImage : data.data.data[0].images.original.url
      })
    }).catch(() => {
      Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Cool"
      });
  });
  }

  render() {
  // destructuring both props from app.js
  const { name, type, partySize} = this.props.eventClicked;
  const { title, image, imdb, genres, network, time } = this.props.tvShowClicked;
  return (
    <section className="DisplayResultDashboard">
      <div className="wrapper">
        <h2>Display Results:</h2>
        <div className="halfDivider">
          <div className="eventResult">
            <h2>Social Event details</h2>
            <img src= {this.state.socialEventImage} alt ="gif" /> 
            <p>Name: {name}</p>
            <p>Type: {type}</p>
            <p>Party Size: {partySize}</p>
          </div>
          <div className="tvShowResults">
            <h2>What you are doing instead</h2>
            <h2>{title}</h2>
            <div className="tvShowResultsImageContainer">
              <img src={image} alt={name} />
            </div>
            <a href={imdb}>Go to Imdb</a>
            <p>Genres: {genres}</p>
            <p>Network Name: {network}</p>
            <p>Time: {time}</p>
          </div>
        </div>
      </div>
    </section>
  )
}}

