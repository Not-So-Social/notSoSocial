import React, { Component } from "react";
// react router
import { Link } from "react-router-dom";

export default class GetRandomTvShow extends Component {
  constructor() {
    super();
    this.state = {
      randomTvShow: null
    };
  }

  handleOnClick = () => {
    // getting the max shows in the array of filteredTvShows object passed as a prop
    const maxTvShows = this.props.filteredTvShows.length - 1;
    // get a random number with that maxTvShows as a constrain
    let randomNumberIndex = Math.floor(Math.random() * Math.floor(maxTvShows));
    // set the state outputted from the single object from filteredTvShows array prop and passing random index number from randomNumberIndex
    this.setState({
      randomTvShow: this.props.filteredTvShows[randomNumberIndex]
    });
  };

  renderRandomTvShow = show => {
    // using the state passed in the render method when calling this function, re-organize it to information we need
    let newRandomTvShowObjectToDisplay = {
      title: show.name,
      id: show.id,
      image: show.image.original
    };
    // destructuring for use
    const { title, id, image } = newRandomTvShowObjectToDisplay;

    return (
      <div className="randomShow" key={id}>
        <button
          onClick={() =>
            this.props.retrieveTvShowClicked(newRandomTvShowObjectToDisplay)
          }
        >
          <h2>{title}</h2>
          <img src={image} alt={title} />
          <Link to={`/tv/${id}`}>Click here for more info</Link>
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="randomContainer">
        <button className="randomButton" onClick={this.handleOnClick}>
          Get Random Tv Show
        </button>
        {this.state.randomTvShow &&
          this.renderRandomTvShow(this.state.randomTvShow)}
      </div>
    );
  }
}
