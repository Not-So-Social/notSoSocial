import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default class DisplayResultDashboard extends Component {
  constructor() {
    super();
    this.state = {
      // this is the image url for gif that renders
      socialEventImage: ""
    };
  }

  componentDidMount() {
    // destructuring the name key from a single event obj passed as a prop
    const { name } = this.props.eventClicked;
    // axios get to get the gif url from giphy api
    axios({
      url: "https://api.giphy.com/v1/gifs/search?",
      method: "GET",
      dataType: "json",
      params: {
        api_key: "jRZvAnoNBqc9hIvol9x5B8ImgDUKOuSY",
        q: name
      }
    })
      .then(data => {
        const imageSrcArr = data.data.data;
        const randomArrIndex = Math.floor(
          Math.random() * Math.floor(imageSrcArr.length - 1)
        );

        // set the state for the gif img element's src to use the gif link
        this.setState({
          socialEventImage: imageSrcArr[randomArrIndex].images.original.url
        });
        // once the state is set scroll to this component ref, section with the class of displayResultRef
        window.scrollTo({
          top: this.displayResultRef.offsetTop,
          left: 0,
          behavior: "smooth"
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

  componentDidUpdate(prevProps) {
    // if the previous state doesn't equal to the current state, it means the user has selected a new event, rerun axios call
    if (prevProps.eventClicked !== this.props.eventClicked) {
      const { name } = this.props.eventClicked;
      axios({
        url: "https://api.giphy.com/v1/gifs/search?",
        method: "GET",
        dataType: "json",
        params: {
          api_key: "jRZvAnoNBqc9hIvol9x5B8ImgDUKOuSY",
          q: name
        }
      })
        .then(data => {
          const imageSrcArr = data.data.data;
          const randomArrIndex = () => {
            return Math.floor(
              Math.random() * Math.floor(imageSrcArr.length - 1)
            );
          };
          // set the state for the gif img element's src to use the gif link
          this.setState({
            socialEventImage: imageSrcArr[randomArrIndex()].images.original.url
          });
        })
        .catch(err => {
          console.error(err);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong!",
            icon: "error",
            confirmButtonText: "Cool"
          });
        });
    }
  }

  render() {
    // destructuring both props from app.js
    const { name, type, partySize } = this.props.eventClicked;
    const {
      title,
      image,
      imdb,
      genres,
      network,
      time
    } = this.props.tvShowClicked;

    return (
      <section
        className="DisplayResultDashboard"
        // ref for the scroll down to here
        ref={ref => (this.displayResultRef = ref)}
      >
        <div className="wrapper">
          <h2>Display Results:</h2>
          <div className="halfDivider">
            <div className="eventResult">
              <h2>Social Event details</h2>
              <img
                src={this.state.socialEventImage}
                alt="random gif that plays on page load representing the event"
              />
              <p>Name: {name}</p>
              <p>Type: {type}</p>
              <p>Party Size: {partySize}</p>
            </div>
            {/* end of eventResult */}
            <div className="tvShowResults">
              <h2>What you are doing instead</h2>
              <h2>{title}</h2>
              <div className="tvShowResultsImageContainer">
                <img src={image} alt={name} />
              </div>
              <a href={imdb}>Go to Imdb</a>
            </div>
            {/* end of tvShowResults*/}
          </div>
          {/* end of half divider */}
        </div>
        {/* end of wrapper */}
      </section>
    );
  }
}
