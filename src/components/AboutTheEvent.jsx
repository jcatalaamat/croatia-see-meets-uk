import React from 'react';
import SmallSection from './SmallSection';

const AboutTheEvent = () => (
  <div className="about-the-event">
    <div className="content">
      <div className="aqua-header__container">
        <h2>
          <span className="aqua-header__text">
              About the event
          </span>
        </h2>
      </div>
    </div>
    <div className="content">
      <p>
        <b>
            The British Croatian Chamber of Commerce (BCCC)
            is offering our latest all-in TECH FUTURES LONDON 2019.
        </b>
      </p>
      <p>
        <b>
            The Event agenda is designed to mimic, at a high level,
            the typical 3-stage lifecycle of a tech start-up.
        </b>
      </p>
      <div className="purple-header__container">
        <h5>
          <span className="purple-header__text">
              Over the 2 days we'll guide you through the stages
              of innovation, coding and capital.
          </span>
        </h5>
      </div>
    </div>
    <SmallSection header={'The "Innovation" stage'}>
      <p>
During 4 inspirational panels we'll look to create ideas,
brainstorm what’s out there, peer ahead in terms of where all this
innovation and technology might be going, think about what’s
marketable (and what's not), where and how we can identify and
exploit potential market gaps.
      </p>
    </SmallSection>
    <div className="separator" />
    <div className="section--white">
      <SmallSection header={'The "Coding" stage'}>
        <p>
Like a true start-up, delegates will do the legwork to begin to
move from ideas and inception into creation. The morning of the
second day will consist of professional training in blockchain (we
call it "Blockchain for Beginners"), from introductory explanations
to distributed ledgers through to looking at lower-level coding
and how to set up and run an ICO and STO etc. m introductory
explanations to distributed ledgers through to looking at
lower-level coding and how to set up and run an ICO and STO
etc. Training will be provided by the BCCC's own accredited
educator and delegates will receive a full training certificate (the
accreditation for the event training will most likely be provided by
the UK CPD Accreditation Service).
        </p>
      </SmallSection>
    </div>
    <div className="separator" />
    <SmallSection header={'The final "Capital" stage'}>
      <p>
            Is funding. We'll hold our own (real) pitch event, at both
investment and technology levels. Approx. 6 Croatian and SEE
start-ups will meet the critical eye of professional British capital
investors, ranging from angels to venture capitalists and all
flavours in between. It's a tough crowd and delegates will
witness the meeting of creativity and capital first-hand.
      </p>
    </SmallSection>
  </div>
);

export default AboutTheEvent;
