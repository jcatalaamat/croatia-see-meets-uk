import React from 'react';

import AboutTheEvent from './AboutTheEvent';
import Title from './Title';
import WhyParticipate from './WhyParticipate';
import Agenda from './Agenda';
import EncodeProgramme from './EncodeProgramme';
import HowToApply from './HowToApply';
import AboutBCCC from './AboutBCCC';
import Media from './Media';
import Footer from './Footer';

const Page = () => (
  <div className="App-container">
    <Title />
    <AboutTheEvent />
    <WhyParticipate />
    <Agenda />
    <EncodeProgramme />
    <HowToApply />
    <AboutBCCC />
    <Media />
    <Footer />
  </div>
);

export default Page;
