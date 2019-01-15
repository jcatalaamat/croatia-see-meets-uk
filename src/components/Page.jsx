import React from 'react';

const Page = () => (
  <div className="App-container">
    <div className="title-section">
      <div className="header-menu">
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
          </ul>
        </div>
      </div>

      <div className="titles">
        <h4>TECH FUTURES LONDON 2019</h4>
        <h1>Croatia and SEE* meets the UK</h1>
        <h6>*SEE: Southeastern Europe</h6>
      </div>
      <div className="content">
        <div className="contrast-header__container">
          <h5>
            <span className="contrast-header__text">
              London, 28/29 March 2019
              at TechSpace Shoreditch
            </span>
          </h5>
        </div>
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

    <div className="about-section">
      <div className="section--white">
        <div className="content">
          <div className="contrast-header__container">
            <h2>
              <span className="contrast-header__text">
              About the event
              </span>
            </h2>
          </div>
        </div>
        <div className="content">
          <p>
            <b>
          The British Croatian Chamber of Commerce (BCCC)
          is offering our latest all-in TECH FUTURES
          LONDON 2019
            </b>
          </p>
          <p>
            <b>
          The Event agenda is designed to mimic, at a high
          level, the typical 3-stage lifecycle of a tech start-up
            </b>
          </p>
        </div>
      </div>
      <div className="separator" />
      <div className="section--white">
        blabla
      </div>
      <div className="separator" />
      <div className="section--white">
        blabla
      </div>
    </div>
  </div>
);

export default Page;
