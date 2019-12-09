import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GetRandomTvShow extends Component {
  constructor() {
    super();
    this.state = {
      randomTvShow: null
    };
  }

  renderRandomTvShow = show => {
    let newRandomTvShowObjectToDisplay = {
      title: show.name,
      id: show.id,
      image: show.image.original,
      imdb: `https://www.imdb.com/title/${show.externals.imdb}`,
      genres: show.genres.join(" "),
      summaryHtml: show.summary,
      network: show.network.name,
      time: show.schedule.time
    };
    const {
      title,
      id,
      image,
      imdb,
      genres,
      network,
      time
    } = newRandomTvShowObjectToDisplay;

    return (
      <div className="randomShow" key={id}>
        <button
          onClick={() =>
            this.props.retrieveTvShowClicked(newRandomTvShowObjectToDisplay)
          }
        >
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
      <div className="randomContainer">
        <button className="randomButton" onClick={this.handleOnClick}>Get Random Tv Show</button>
        <div>
          {this.state.randomTvShow &&
            this.renderRandomTvShow(this.state.randomTvShow)}
        </div>
      </div>
    );
  }
}
