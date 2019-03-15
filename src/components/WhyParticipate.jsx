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
        </div>
      </div>
    </div>
  </div>
);

export default WhyParticipate;
