import React, { Component, Fragment } from "react";
import TvShows from "./TvShows";
import Header from "./Header";
import Footer from "./Footer";

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        {/* skip-link for accessability to skip to main content*/}
        <a href="#maincontent" className="skip-link">
          Skip to main content.
        </a>
        {/* a functional component that renders the header */}
        <Header />
        <main id="maincontent">
          {/* get tvShows from tvMaze api and has a call back to set state on this component with a single tv show selected by use via onClick */}
          <TvShows retrieveTvShowClicked={this.retrieveTvShowClicked} />
        </main>
        {/* footer, am I repeating myself? */}
        <Footer />
      </Fragment>
    );
  }
}

export default MainPage;
