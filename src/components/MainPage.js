// import React, { Component, Fragment } from "react";
// import TvShows from "./TvShows";
// // import FirebaseDatabase from "./FirebaseDatabase";
// // import DisplayResultDashboard from "./DisplayResultDashboard";
// // import CreateNewEvent from "./CreateNewEvent";
// import Header from "./Header";
// import Footer from "./Footer";

// class MainPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       eventClicked: null,
//       tvShowClicked: null
//     };
//   }

//   render() {
//     return (
//       <Fragment>
//         {/* skiplink */}
//         <a href="#maincontent" className="skip-link">
//           Skip to main content.
//         </a>
//         {/* a functional component that renders the header */}
//         <Header />
//         <main id="maincontent">
//           {/* get tvShows from tvMaze api and has a call back to set state on this component with a single tv show selected by use via onClick */}
//           <TvShows />
//           {/* a form consist of inputs that allows user to create new events and display onto the page, also sends the information to firebase database */}
//           {/* gets all events json object from firebase and render the page with those events in an ul element as a button, has a callback function that retrieves the event obj user selected via onClick, and sets the state with that event obj */}
//           {/* once the state is set with both the user selected event and tv show, render the results at the end of the page */}
//         </main>
//         {/* footer, am I repeating myself? */}
//         <Footer />
//       </Fragment>
//     );
//   }
// }

// export default MainPage;


import React, { Component, Fragment } from "react";
import TvShows from "./TvShows";
import FirebaseDatabase from "./FirebaseDatabase";
import DisplayResultDashboard from "./DisplayResultDashboard";
import CreateNewEvent from "./CreateNewEvent";
import Header from "./Header";
import Footer from "./Footer";

class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            eventClicked: null,
            tvShowClicked: null
        };
    }

    retrieveEventClicked = event => {
        this.setState({
            eventClicked: event
        });
    };

    retrieveTvShowClicked = event => {
        this.setState({
            tvShowClicked: event
        });
    };

    render() {
        return (
            <Fragment>
                {/* skiplink */}
                <a href="#maincontent" className="skip-link">
                    Skip to main content.
        </a>
                {/* a functional component that renders the header */}
                <Header />
                <main id="maincontent">
                    {/* get tvShows from tvMaze api and has a call back to set state on this component with a single tv show selected by use via onClick */}
                    <TvShows retrieveTvShowClicked={this.retrieveTvShowClicked} />
                    {/* a form consist of inputs that allows user to create new events and display onto the page, also sends the information to firebase database */}
                    <CreateNewEvent />
                    {/* gets all events json object from firebase and render the page with those events in an ul element as a button, has a callback function that retrieves the event obj user selected via onClick, and sets the state with that event obj */}
                    <FirebaseDatabase retrieveEventClicked={this.retrieveEventClicked} />
                    {/* once the state is set with both the user selected event and tv show, render the results at the end of the page */}
                    {this.state.eventClicked && this.state.tvShowClicked && (
                        <DisplayResultDashboard
                            eventClicked={this.state.eventClicked}
                            tvShowClicked={this.state.tvShowClicked}
                        />
                    )}
                </main>
                {/* footer, am I repeating myself? */}
                <Footer />
            </Fragment>
        );
    }
}

export default MainPage;