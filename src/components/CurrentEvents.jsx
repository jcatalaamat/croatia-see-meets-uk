import React from 'react';
import { Link } from 'react-router-dom';
import RedHeader from './RedHeader';


const CurrentEvents = () => (
  <div className="current-events">
    <div className="content">
      <RedHeader spacing text="Current Events" />
    </div>
    <div className="titles">
      <h4>TECH FUTURES LONDON 2019</h4>
      <h1>Croatia and SEE* meets the UK</h1>
      <h6>*SEE: Southeastern Europe</h6>
    </div>
    <div className="content">
      <RedHeader small text="London, 29 March 2019 at TechSpace Shoreditch" />
      <div className="p-max">
        <p>
          <span className="p-contrast">
          The British Croatian Chamber of Commerce (BCCC) is
organising an exclusive business and professional
education, networking and pitching event in London for
Croatian, SEE and British start-ups, professional investors
and business delegates. The focus of the event is firmly on
the future, we're specifically promoting the tech-family of
innovations: fintech, regtech, healthtech, govtech (and all
variants) and blockchain and digital opportunities in
European and global markets.
          </span>
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }} className="p-contrast">
          To learn more about the event
            {' '}

            {/* <Link style={{ textDecorationColor: '#e93732' }} to="/tech_futures_london_event_2019">
              <span style={{ color: '#e93732' }}>click here</span>

            </Link> */}
            <a
              style={{ textDecorationColor: '#e93732' }}
              href="#/tech_futures_london_event_2019"
              rel=""
              target="_blank"
            >
              <span style={{ color: '#e93732' }}>click here</span>

            </a>
          </span>
        </p>

      </div>

    </div>
  </div>
);

export default CurrentEvents;
