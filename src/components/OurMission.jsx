import React from 'react';
import SmallSection from './SmallSection';
import RedHeader from './RedHeader';

const OurMission = () => (
  <div className="our-mission">
    <div className="content">
      <RedHeader spacing text="Our mission" />
      <div className="">
        <div className="missions">
          <div className="missions-one">
            <p>
The British Croatian Chamber of Commerce (BCCC) aims
to promote robust, vibrant and mutually beneficial business
relations between Croatia and the UK. With more than 20
years of experience and deep knowledge base we offer a
friendly, relaxed and helpful forum for people doing
business in and between the two countries, as well as
those operating globally with a British or Croatian base.

            </p>
            <p>
We cultivate a ‘business club’ atmosphere where members
are surrounded and supported by likeminded individuals
with common interests and goals. We work towards
organising events that address the most relevant issues
for businesses operating in Croatia and the UK and the
global economy in general.

            </p>

          </div>
          <div className="missions-two">
            <p>
With respect to Croatia that might be tax reform, capital
markets developments, the start-up scene, tourism,
real-estate, FinTech and financial innovation, privatisation,
green business, business climate, trade prospects, health
sector and others. And with respect to UK it’s all about
opening doors and exploiting to maximum advantage the
opportunities that UK has to offer.

            </p>
            <p>
We foster informed discussions that produce novel ideas
and actionable proposals and solutions. And that’s not to
say that we don’t also enjoy a leisurely after-work
get-together in the bars and restaurants of London
and Zagreb.

            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
);

export default OurMission;
