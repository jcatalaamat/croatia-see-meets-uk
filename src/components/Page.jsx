import React from 'react';

import AboutTheEvent from './AboutTheEvent';
import Title from './Title';
import WhyParticipate from './WhyParticipate';
import Agenda from './Agenda';

const Page = () => (
  <div className="App-container">
    <Title />
    <AboutTheEvent />
    <WhyParticipate />
    <Agenda />
  </div>
);

export default Page;
