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
is offering an all-in TECH FUTURES LONDON 2019.
          </b>
        </p>
        <p>
          <b>
            The Event agenda is designed to mirror, at a high level,
            the typical 3-stage lifecycle of a tech start-up.
          </b>
        </p>
      </div>
      <PurpleLine>
      Over the 2 days we'll guide you through the stages
        <br className="br" />
        {' '}
        of innovation, coding and capital.
      </PurpleLine>
    </div>
    <div className="stage__container">
      <div className="stage">
        <SmallSection header={'The "Innovation" stage'}>
          <p className="no-margin">
      During 4 inspirational panels we'll look to
create ideas, brainstorm what’s out there,
peer ahead in terms of where all this
innovation and technology might be going,
think about what’s marketable (and what's
not), where and how we can identify and
exploit potential market gaps.
          </p>
        </SmallSection>
      </div>
      {/* <div className="separator" /> */}
      <div className="stage">
        <SmallSection header={'The "Coding" stage'}>
          <p className="no-margin">
      Like a true start-up, delegates will do the
legwork to begin to move from ideas and
inception into creation. The morning of the
second day will consist of professional
training in blockchain, from introductory
explanations to distributed ledgers through
to looking at lower-level coding and how to
set up and run an ICO and STO etc.
introductory explanations to distributed
ledgers through to looking at lower-level
coding and how to set up and run an ICO
and STO etc. Training will be provided by
the BCCC's own accredited educator and
delegates will receive a full training
certificate (the accreditation for the event
training will be provided by the UK
            {' '}
            <span className="purple--underline">CPD Accreditation Service</span>
).
          </p>
        </SmallSection>

      </div>
      {/* <div className="separator" /> */}
      <div className="stage">
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

      </div>
    </div>
  </div>
);

export default AboutTheEvent;
