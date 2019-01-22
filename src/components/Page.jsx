import React, { Component } from 'react';

import AboutTheEvent from './AboutTheEvent';
import Title from './Title';
import WhyParticipate from './WhyParticipate';
import Agenda from './Agenda';
import EncodeProgramme from './EncodeProgramme';
import HowToApply from './HowToApply';
import AboutBCCC from './AboutBCCC';
import Media from './Media';
import Footer from './Footer';

class Page extends Component {
  goToEvent = () => {
    window.scrollTo(0, this.eventRef.offsetTop);
  }

  goToWhy = () => {
    window.scrollTo(0, this.whyRef.offsetTop);
  }

  goToAgenda =() => {
    window.scrollTo(0, this.agendaRef.offsetTop);
  }

  goToProgramme =() => {
    window.scrollTo(0, this.programmeRef.offsetTop);
  }

  goToApply =() => {
    window.scrollTo(0, this.applyRef.offsetTop);
  }

  goToBccc =() => {
    window.scrollTo(0, this.aboutRef.offsetTop);
  }

  render() {
    const props = {
      goToEvent: this.goToEvent,
      goToWhy: this.goToWhy,
      goToProgramme: this.goToProgramme,
      goToAgenda: this.goToAgenda,
      goToApply: this.goToApply,
      goToBccc: this.goToBccc,
    };
    return (
      <div className="App-container">
        <div>
          <Title {...props} />
        </div>
        <div ref={ref => this.eventRef = ref}>
          <AboutTheEvent />
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
export default Page;
