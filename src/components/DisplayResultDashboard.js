import React from "react";

export default function DisplayResultDashboard(props) {
  // destructuring both props from app.js
  // const {name, type, partySize} = props.eventClicked;
  // const {title, image, imdb, genres, network, time} = props.tvShowClicked;

  //   return (
  //     <section className="DisplayResultDashboard">
  //       <h2>Display Results:</h2>
  //       <div className="eventResult">
  //         <h2>Social Event details</h2>
  //         <h3>Name: {name}</h3>
  //         <p>Type: {type}</p>
  //         <p>Party Size: {partySize}</p>
  //       </div>
  //       <div className="tvShowResults">
  //         <h2>What you are doing instead</h2>
  //         <h2>{title}</h2>
  //         <img src={image} alt={name} />
  //         <a href={imdb}>Go to Imdb</a>
  //         <p>Genres: {genres}</p>
  //         <p>Network Name: {network}</p>
  //         <p>Time: {time}</p>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="DisplayResultDashboard">
      <div className="wrapper">
        <h2 className="resultTitle">Display Dashboard below:</h2>

        <div className="halfDivider">
          <div className="eventResult">
            <h2>Social Event details</h2>
            <h3>Name: SOMETHING</h3>
            <p>Type: SOMETHING</p>
            <p>Party Size: SOMETHING</p>
          </div>
          <div className="tvShowResults">
            <h2>What you are doing instead</h2>
            <div className="tvShowResultsImageContainer">
              <img
                src="http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"
                alt="final selection"
              />
            </div>
            <a href="https://www.imdb.com/">Go to Imdb</a>
            <p>Genres: Comedy</p>
            <p>Network Name: ABC</p>
            <p>Time: 20:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
