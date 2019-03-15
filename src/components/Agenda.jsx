import React from 'react';
import AquaHeader from './AquaHeader';
import PurpleLine from './PurpleLine';
import Bullet from './Bullet';
import Day from './Day';
import TimeDay from './TimeDay';
import Panel from './Panel';

const Agenda = () => (
  <div className="agenda">
    <div className="content">
      <AquaHeader spacing text="The Agenda" />
      <PurpleLine text="London 29 March 2019" />
      <div className="paddingTop--small">
        <PurpleLine spacing text="Venue: TechSpace Shoreditch (25 Luke St, London EC2A 4DS)" />
      </div>
    </div>
    <div className="day-two">
      <div className="content">
        <div className="day-agenda">
          <Day text="March 29 2019" />

          <TimeDay text="Start at 9.00 am and finish at 2.30 pm" />
          <Bullet text="Formal welcome and introduction by:" />
          <p>
            <b>His Excellency Igor Pokaz</b>
, the Ambassador of Republic of Croatia to the United Kingdom,
            <br />

            <b>John Gasparac</b>
, PwC Croatia, Managing Partner
            <br />
            <b>Charlotte Ruhe</b>
, Managing Director, Central and South Easter Europe, EBRD,

and
            <br />
            <b>British Croatian Chamber of Commerce</b>
{' '}
representatives.
</p>
          <Bullet text="Agenda and scene setting" />

          <Panel
            title="PANEL 1: Let's talk about techs"
            text="Overview of the tech marketplace, current developments and opinion on the future of FinTech, RegTech, GovTech,
HealthTech, Data, Blockchain and it's successors. Foretelling the future and the likely impact of tech on corporate
business practices today"
          />
          <p>
            <b>Moderator: Haydn Jones</b>
, Founder and Managing Director of Blockchain Hub
            <br />
            <br />
            <b>Panellists: Dr. Maureen Emeagi</b>
, Founder of LookHealth, Token-operated wealth app for clinician-lead healthcare,
            {' '}
            <b>Zaya Kadyrova</b>
, EBRD Venture Capital Investment Programme, Committee member, Early Stage Tech Investor,
            {' '}
            <b>Djuro Stojanovic</b>
, Uhura Solutions, CEO and Co-Founder
          </p>
          <Panel
            title="PANEL 2: Show me the money!"
            text="How to appeal to investors, who are they, what peaks their interest, pitfalls of fundraising, striking it big."
          />
          <p>
            <b>Moderator: Tony Groom</b>
            , CEO of K2 Business partners
            <br />
            <br />
            <b>Panellists: Russell Fisher,</b>
, Nationwide Ventures, Head of Ventures,
            {' '}
            <b>Damir Bicanic</b>
, Funderbeam SEE, CEO,
            {' '}
            <b>Vedran Blagus</b>
, South Central Ventures, Investment Manager,
            {' '}
            <b>Clement Bigot</b>
, Seedrs, Senior Investment Associate,
            {' '}
            <b>Flavia Richardson</b>
, Funding London, Portfolio Manager
          </p>
          <Panel
            title="PANEL 3: What's happening over there in Southeast Europe?"
            text="Croatia and SEE - spotlight on the region, up and coming start-ups, investment opportunities, market potentials."
          />
          <p>
            <b>Moderator: John Gasparac</b>
, PwC Croatia, Managing Partner
            <br />
            <br />
            <b>Panellists: Simone Zeh Atanovski</b>
, EBRD, SME Finance and Development,
            {' '}
            <b>Filip Ljubic</b>
, Q Agency, Founder and CEO,
            {' '}
            <b>Tom Britton</b>
, Syndicateroom, Co-Founder,
            {' '}
            <b>Tony Kypreos</b>
, Angel Investor, Impact Ventures and Innovation
          </p>
          <Panel
            title="PANEL 4: Brexit, London & Fintech: Opportunity or Disaster?"
            text="What sort of life is there after Brexit, should one look at setting up shop in UK and what is there to gain."
          />
          <p>
            <b>Moderator: Phillip Rothfield</b>
, Ex BNY Mellon
            <br />
            <br />
            <b>Panellists: Pier Paolo Mucelli</b>
, Founder and CEO of TechItalia Lab,
            {' '}
            <b>Antonio Falco</b>
, Small Business Council UK, Entrepreneur,
            {' '}
            <b>Derek Goodwin</b>
, UK Department for International Trade, Head of Entrepreneurship and Tech FDI,
            {' '}
            <b>Simon Stockley</b>
, Cambridge Judge Business School, Senior Faculty in Management Practice
          </p>

          {/* <TimeDay text="Breaks" />
          <Bullet text="Coffee, nibbles and smoothies" />
          <div>
            <TimeDay text="Lunch (3.00 pm - 4.30 pm) " />
            <span className="p-size">
              {' '}
            – a very cool place nearby
            </span>
          </div> */}
          <TimeDay text="Pitch Night (5.00 pm - 7.00 pm)" />
          <Bullet
            text="7/8 Tech Start-ups pitching to 20+ investors (wealth/fund managers, angels, PE/VC etc.)"
          />
        </div>
      </div>

    </div>
    <div className="separator-empty" />
  </div>
);

export default Agenda;
