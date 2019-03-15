import React from 'react';
import SmallSection from './SmallSection';
import AquaHeader from './AquaHeader';
import PurpleLine from './PurpleLine';

const AboutTheEvent = () => (
  <div className="about-the-event">
    <div className="content">
      <AquaHeader spacing text="About the event" />
      <div className="introduction">
        <p className="no-margin">
          <b>
          The British Croatian Chamber of Commerce (BCCC)
is offering TECH FUTURES LONDON 2019.
          </b>
        </p>
      </div>
      <PurpleLine spacingTop spacing>
      Innovation and Capital
      </PurpleLine>
    </div>
    <div className="stage__container">
      <div className="stage">
        <SmallSection>
          <p className="no-margin">
          During 4 inspirational panels we'll look to create ideas, brainstorm what’s out there, peer ahead in terms of where all this innovation and technology might be going, think about what’s marketable (and what's not), where and how we can identify and exploit potential market gaps.
            <br />
            <br />
Afterwards we will hold our own (real) pitch event, at both investment and technology levels. Approx. 7/8 Croatian and SEE start-ups will meet the critical eye of professional British capital investors, ranging from angels to venture capitalists and all flavours in between. It's a tough crowd and delegates will witness the meeting of creativity and capital first-hand.
          </p>
        </SmallSection>
      </div>

      {/* <div className="stage">
        <SmallSection header={'The "Coding" stage'}>
          <p className="no-margin">
          Afterwards we will hold our own (real) pitch event, at both investment and technology levels. Approx. 6 Croatian and SEE start-ups will meet the critical eye of professional British capital investors, ranging from angels to venture capitalists and all flavours in between. It's a tough crowd and delegates will witness the meeting of creativity and capital first-hand.
          </p>
        </SmallSection>

      </div> */}
      {/* <div className="separator" /> */}
      {/* <div className="stage">
        <SmallSection header={'The final "Capital" stage'}>
          <p className="no-margin">
      Is funding. We'll hold our own (real) pitch
event, at both investment and technology
levels. Approx. 6 Croatian and SEE start-ups
will meet the critical eye of professional
British capital investors, ranging from angels
to venture capitalists and all flavours in
between. It's a tough crowd and delegates
will witness the meeting of creativity and
capital first-hand.
          </p>
        </SmallSection>

      </div> */}
    </div>
  </div>
);

export default AboutTheEvent;
