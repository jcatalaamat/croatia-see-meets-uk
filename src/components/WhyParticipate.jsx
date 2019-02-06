import React from 'react';
import AquaHeader from './AquaHeader';

const WhyParticipate = () => (
  <div className="why-participate">
    <div className="content">
      <AquaHeader spacing text="Why should I participate?" />
      <div className="why-participate__container">
        <div className="why-participate__container--text">
          <p>
            <span className="p-contrast">
          You will get to take home a CPD accredited certificate of your continuous personal development on distributed ledger technology and the knowledge
transfer of a full day of training and education provided by our expert tutors.
            </span>
          </p>
          <p>
            <span className="p-contrast">
            You'll meet and network with Croatian and SEE start-up companies and
              London-based professional investors, learning first-hand about some of the hopes, goals,
              highs & lows experienced by tech entrepreneurs and their potential capital partners.
            </span>
          </p>
          <p>
            <span className="p-contrast">
            You will get to witness start-ups and entrepreneurs
pitching their business and ideas to experienced and interested UK private angel investors, wealth and discretionary fund
              managers, venture capitalists, private equity professionals and a whole range of capital in
              between.
            </span>
          </p>
          <p>
            <span className="p-contrast">
            As an
              {' '}
              <span className="purple">investor</span>
              {' '}
              you'll meet and be pitched to by motivated, innovative and energetic
              Croatian and SEE start-ups, entrepreneurs and more. Start-ups will be selectively invited
              and will be Croatian and SEE in origin or by association.
            </span>
          </p>
          <p>
            <span className="p-contrast">
            On the side-lines you will get a chance for a deep-dive of the social life of London's thriving
            start-up scene with evenings organised by our professional social event manager at edgy
            and exclusive locations in and around Shoreditch.
            </span>
          </p>
        </div>
        <div className="why-participate__container--square">
          <div className="box-purple">
            <h3 className="box-purple__header">And don't forget</h3>
            <div className="box-purple__text-container">
              <span className="box-purple__text">
              Please follow this webpage for the final list of Pitchers and Investors as well as other
updates.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhyParticipate;
