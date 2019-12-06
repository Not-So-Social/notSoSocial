import React from "react";

export default function DisplayResultDashboard(props) {
  // destructuring both props from app.js
  const { name, type, partySize } = props.eventClicked;
  const { title, image, imdb, genres, network, time } = props.tvShowClicked;

  return (
    <section className="DisplayResultDashboard">
      <div className="wrapper">
        <h2>Display Results:</h2>
        <div className="halfDivider">
          <div className="eventResult">
            <h2>Social Event details</h2>
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
  );
}