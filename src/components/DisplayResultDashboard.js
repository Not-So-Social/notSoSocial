import React from "react";

export default function DisplayResultDashboard(props) {
  // destructuring both props from app.js
  const {name, type, partySize} = props.eventClicked;
  const {title, image, imdb, genres, network, time} = props.tvShowClicked;

  return (
    <section>
      <h2>Display Results:</h2>
      <div className="eventResult">
        <h2>Social Event details</h2>
        <h3>Name: {name}</h3>
        <p>Type: {type}</p>
        <p>Party Size: {partySize}</p>
      </div>
      <div className="tvShowResults">
        <h2>What you are doing instead</h2>
        <h2>{title}</h2>
        <img src={image} alt="final selection" />
        <a href={imdb}>Go to Imdb</a>
        <p>Genres: {genres}</p>
        <p>Network Name: {network}</p>
        <p>Time: {time}</p>
      </div>
    </section>
  );
}
