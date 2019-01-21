import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
  constructor(props) {
    super(props);
    // this.state = {
    //   goToEvent: false,
    // };
  }


  // componentDidUpdate() {
  //   console.log(this);
  //   if (this.state.goToEvent) {
  //     console.log('scrollToEvent');
  //     window.scrollTo(0, this.eventRef.offsetTop);
  //   }
  // }

  goToEvent = () => {
    window.scrollTo(0, this.eventRef.offsetTop);
    // console.log('GoToEvent');
    // this.setState({
    //   goToEvent: true,
    // });
    // this.eventRef.scrollIntoView();
  }

  goToWhy = () => {
    window.scrollTo(0, this.whyRef.offsetTop);
  }

  goToApply =() => {
    window.scrollTo(0, this.applyRef.offsetTop);
  }

  goToProgramme =() => {
    window.scrollTo(0, this.programmeRef.offsetTop);
  }

  goToBccc =() => {
    window.scrollTo(0, this.aboutRef.offsetTop);
  }

  render() {
    const props = {
      goToEvent: this.goToEvent,
      goToWhy: this.goToWhy,
      goToApply: this.goToApply,
      goToProgramme: this.goToProgramme,
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
        <Agenda />
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
