import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GetRandomTvShow extends Component {
  constructor() {
    super();
    this.state = {
      randomTvShow: null
    };
  }

  renderAllFilteredTvShows = show => {
    const { title, id, image, imdb, genres, network, time } = show;

    return (
      <div key={id}>
        <button onClick={() => this.props.retrieveTvShowClicked(show)}>
          <h2>{title}</h2>
          <img src={image} alt={title} />
          <a href={imdb}>Go to Imdb</a>
          <p>Genres: {genres}</p>
          <p>Network Name: {network}</p>
          <p>Time: {time}</p>
          <Link to={`/tv/${id}`}>Link here</Link>
        </button>
      </div>
    );
  };

  handleOnClick = () => {
    const maxTvShows = this.props.filteredTvShows.length;
    let randomNumberIndex = Math.floor(Math.random() * Math.floor(maxTvShows));
    this.setState({
      randomTvShow: this.props.filteredTvShows[randomNumberIndex]
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Get Random Tv Show</button>
        <div>
          {this.state.randomTvShow &&
            this.renderAllFilteredTvShows(this.state.randomTvShow)}
        </div>
      </div>
    );
  }
}
