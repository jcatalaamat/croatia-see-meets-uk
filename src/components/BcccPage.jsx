import React, { Component } from 'react';

import AboutTheEvent from './AboutTheEvent';
import TitleBccc from './TitleBccc';
import WhyParticipate from './WhyParticipate';
import Agenda from './Agenda';
import EncodeProgramme from './EncodeProgramme';
import HowToApply from './HowToApply';
import AboutBCCC from './AboutBCCC';
import Media from './Media';
import Footer from './Footer';
import OurMission from './OurMission';

class BcccPage extends Component {
  goToMission = () => {
    window.scrollTo(0, this.missionRef.offsetTop);
  }

  goToHistory = () => {
    window.scrollTo(0, this.whyRef.offsetTop);
  }

  goToDirectors =() => {
    window.scrollTo(0, this.agendaRef.offsetTop);
  }

  goToCurrent =() => {
    window.scrollTo(0, this.programmeRef.offsetTop);
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
        <div ref={ref => this.whyRef = ref}>
          <WhyParticipate />
        </div>
        <div ref={ref => this.agendaRef = ref}>
          <Agenda />
        </div>
        <div ref={ref => this.programmeRef = ref}>
          <EncodeProgramme />
        </div>
        <div ref={ref => this.applyRef = ref}>
          <HowToApply />
        </div>
        <div ref={ref => this.aboutRef = ref}>
          <AboutBCCC />
        </div>
        <Media />
        <Footer />
      </div>
    );
  }
}
export default BcccPage;
