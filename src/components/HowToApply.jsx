import React from 'react';
import AquaHeader from './AquaHeader';
import Panel from './Panel';
import PurpleLine from './PurpleLine';
import Bullet from './Bullet';

const HowToApply = () => (
  <div className="how-to-apply">
    <div className="question-mark">
      <div className="content">
        <AquaHeader noBottom spacingTop text="How much does it cost?" />
        <AquaHeader noTop text="And how do I apply?" />
        <div className="encode-text">
          <p>
        The event is priced at GBP 989 per delegate which includes the following:
          </p>
          <Bullet text="Participation as a Delegate in both days of the event" />
          <Bullet text="CPD accredited Certificate of Professional Education on Blockchain" />
          <Bullet text="Lunch on Day 1 and Day 2" />
          <Bullet text="Dinner and drinks on arrival" />
          <Bullet text="Dinner, drinks and night out on Day 1 and Day 2" />
          <Bullet text="Coffee, tea, nibbles and pastries through the days" />
          <Bullet text="Coach transfer from and to LHR for those traveling with BCCC from Zagreb" />

          <p>
          *If you wish to participate in this event as an
investor or a Start-up for the Pitch night that takes place in the evening of 29th of March, please get in touch with
us directly.

          </p>
          <p>
The event has a minimum of 40 (max 50) Delegates capacity for the first day and
100 for the second day.

          </p>
          <p>
          Due to limited capacity and an all-in package arrangement, applications for the
event are done in a two stage process.

          </p>
        </div>
      </div>
    </div>
    <div className="separator" />
    <div className="content">
      <AquaHeader medium text="First Step" />
      <div className="encode-text">
        <p>
Until 20th of February 2019 we will be inviting Expressions of Interest which you
can send to us via email:
          {' '}
          <a href="mailto:events@britishcroatiancc.co.uk"><span className="purple--underline">events@britishcroatiancc.co.uk</span></a>
          {' '}
or
          {' '}
          <a href="mailto:dina.calakovic@britishcroatiancc.co.uk"><span className="purple--underline">dina.calakovic@britishcroatiancc.co.uk</span></a>
          {' '}
or give us a call if you need any
additional information.
        </p>
        <Panel title="Zagreb sales" text="Dina: +385 (0) 97 790 9050" />
        <Panel title="London contacts">
          <div>
            <span>
Stephen: +44 (0) 7973 666178 –
              {' '}
              <a href="mailto:stephen.ashurst@britishcroatiancc.co.uk"><span className="purple--underline">stephen.ashurst@britishcroatiancc.co.uk</span></a>
            </span>
          </div>
          <div>
            <span>
          Damir: +44 (0) 7447 930111 –
              {' '}
              <a href="mailto:damir.cimer@britishcroatiancc.co.uk"><span className="purple--underline">damir.cimer@britishcroatiancc.co.uk</span></a>
            </span>
          </div>
        </Panel>
        <p>Expressions of interest are in no way binding you to participate in the event.</p>
        <Panel title="In your email please indicate the following information:" />
      </div>
    </div>
    <div className="two-columns">
      <div className="column">
        <div className="column-inner">
          <PurpleLine spacingTop text="About attendees (if more than one," />
          <PurpleLine text="please fill out for each person)" />
          <Bullet text="Company" />
          <Bullet text="Number of persons attending" />
          <Bullet text="Title, First Name and Last Name" />
          <Bullet text="Job Title" />
          <Bullet text="City" />
          <Bullet text="Country" />
          <Bullet text="Corporate Website" />
          <Bullet text="Telephone" />
          <Bullet text="Email" />
          <Bullet text="LinkedIn" />
        </div>

      </div>
      {/* <div className="column">
        <div className="column-inner">
          <PurpleLine spacingTop text="Are you a Delegate, Investor or Pitcher?" />
          <Bullet text="Attending as: Delegate | Investor | Startup" />
          <Bullet text="Dates Attending: Day 1 | Day 2" />
          <Bullet text="Dates Required for Accommodation: Wednesday 27th | Thursday 28th | Friday 29th | Saturday 30th" />
          <Bullet text="Please ask questions and write all your comments." />
        </div>
      </div> */}
    </div>
    <div className="separator separator-nobottom" />
    <div className="electron">
      <div className="content">
        <AquaHeader medium text="Second Step" />
        <div className="encode-text">
          <p>
Once the potential capacity is reached you will receive an email and/or call back
from the BCCC representative.
          </p>
          <p>
Only then will you be allowed to progress with the official registration process via
the then attached form, payment details and terms and conditions of your
application.
          </p>
          <p>
You will receive the email/call back by 20th February 2019. Formal application
process will be
            {' '}
            <b>closed by 15th March 2019</b>
            {' '}
or reaching of full capacity (whichever
comes first).
          </p>
        </div>

      </div>
    </div>
  </div>
);

export default HowToApply;
