import React, { Component } from 'react';

import TitleBccc from './TitleBccc';
import OurMission from './OurMission';
import OurHistory from './OurHistory';
import CurrentEvents from './CurrentEvents';
import BoardOfDirectors from './BoardOfDirectors';
import Footer from './Footer';
import Contacts from './Contacts';
import UsefulLinks from './UsefulLinks';

class BcccPage extends Component {
  goToMission = () => {
    window.scrollTo(0, this.missionRef.offsetTop);
  }

  goToHistory = () => {
    window.scrollTo(0, this.historyRef.offsetTop);
  }

  goToDirectors =() => {
    window.scrollTo(0, this.currentRef.offsetTop);
  }

  goToCurrent =() => {
    window.scrollTo(0, this.directorsRef.offsetTop);
  }

  render() {
    const props = {
      goToMission: this.goToMission,
      goToHistory: this.goToHistory,
      goToCurrent: this.goToCurrent,
      goToDirectors: this.goToDirectors,
    };
    return (
      <div className="App-container">
        <div>
          <TitleBccc {...props} />
        </div>
        <div ref={ref => this.missionRef = ref}>
          <OurMission />
        </div>
        <div ref={ref => this.historyRef = ref}>
          <OurHistory />
        </div>
        <div ref={ref => this.currentRef = ref}>
          <CurrentEvents />
        </div>
        <div ref={ref => this.directorsRef = ref}>
          <BoardOfDirectors />
        </div>
        <Contacts />
        <UsefulLinks />
        <Footer />
      </div>
    );
  }
}
export default BcccPage;
