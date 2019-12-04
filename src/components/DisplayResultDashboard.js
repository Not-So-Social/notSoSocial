import React from "react";

export default function DisplayResultDashboard(props) {
  return (
    <section>
      <h2>Display Results:</h2>
      <div className="eventResult">
        <h2>Social Event details</h2>
        <h3>Name: {props.eventClicked.name}</h3>
        <p>Type: {props.eventClicked.type}</p>
        <p>Party Size: {props.eventClicked.partySize}</p>
      </div>
      <div className="tvShowResults">
        <h2>What you are doing instead</h2>
        <p>Tv Shows here</p>
      </div>
    </section>
  );
}
