import React from 'react';
import AquaHeader from './AquaHeader';
import Panel from './Panel';
import PurpleLine from './PurpleLine';
import Bullet from './Bullet';

const NewHowToApply = () => (
  <div>
    <div className="separator" />
    <div className="how-to-apply">
      <div className="question-mark">
        <div className="content">
          <AquaHeader noBottom spacingTop text="How do I apply?" />
          <div className="encode-text">
            <Bullet text="If you wish to participate in this event as a Guest, Investor or a Start-up please get in touch with us directly." />
            <Bullet text="In your email please indicate the following information:" />
            <p>
              Company
              <br />
              Title, First Name and Last Name
              <br />
              Job Title
              <br />
              Country
              <br />
              Corporate Website
              <br />
              Telephone
            </p>
          </div>
          {/* <div className="two-columns">
            <div className="column">
              <div className="column-inner">
                <Bullet text="Company" />
                <Bullet text="Title, First Name and Last Name" />
                <Bullet text="Job Title" />
                <Bullet text="Country" />
                <Bullet text="Corporate Website" />
                <Bullet text="Telephone" />
              </div>
            </div>
          </div> */}
          <div className="encode-text">
            <Bullet text="Contact" />
            <p>
              <div>
                <span>
Dina: +385 (0) 97 790 9050 –
                  {' '}
                  <a href="mailto:dina.calakovic@britishcroatiancc.co.uk"><span className="purple--underline">dina.calakovic@britishcroatiancc.co.uk</span></a>
                </span>
              </div>

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
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default NewHowToApply;
