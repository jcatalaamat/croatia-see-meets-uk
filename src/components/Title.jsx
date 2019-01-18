import React from 'react';
import HeaderMenu from './HeaderMenu';
import AquaHeader from './AquaHeader';

const Title = () => (
  <div className="title-section">
    <HeaderMenu />
    <div className="titles">
      <h4>TECH FUTURES LONDON 2019</h4>
      <h1>Croatia and SEE* meets the UK</h1>
      <h6>*SEE: Southeastern Europe</h6>
    </div>

    <div className="content">
      <AquaHeader small text="London, 28/29 March 2019 at TechSpace Shoreditch" />
      <p>
        <span className="p-contrast">
            A unique
          {' '}
          <b>
            business and professional education,
            pitching and networking event
            {' '}
          </b>
            in the City's tech-fuelled
            ‘Silicon Roundabout’ area of Shoreditch.
        </span>
      </p>
      <p>
        <span className="p-contrast">
            The event is intended for Croatian, SEE and British
            professional investors, business delegates and start-ups
            looking to advance their business and knowledge of the
            tech-family of innovations (fintech, regtech, healthtech,
            govtech), blockchain and gain insights on the digital
            futures and opportunities in European and global markets.
        </span>
      </p>
      <p>
        <span className="p-contrast">
            The event is offered as an all-inclusive package where
            the price includes participation in all the business, social
            and networking events, bed-and-breakfast
            accommodation at the Nobu Shoreditch hotel as well as
            food and drinks throughout the days.
        </span>
      </p>
    </div>
  </div>
);

export default Title;
