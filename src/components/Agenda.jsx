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
      <AquaHeader text="The Agenda" />
      <PurpleLine text="London 27-30 March 2019" />
      <PurpleLine text="(event takes place on 28-29 March 2019)" />
      <div className="paddingTop--small">
        <PurpleLine text="Venue: TechSpace Shoreditch" />
      </div>
      <div>
        <Day text="Day 0 (27 March 2019):" />

        <Bullet text="Arrivals to London" />
        <Bullet text="For delegates arriving with BCCC chaperone from Zagreb into Heathrow we will provide a private coach transfer from LHR to the hotel" />
        <Bullet text="Check-in at Nobu Hotel in Shoreditch" />
        <Bullet text="Informal welcome dinner and drinks hosted by BCCC and friends at Nobu bar and restaurant" />
      </div>
    </div>
    <div className="separator" />
    <div className="content">
      <div>
        <Day text="Day 1 (28 March 2019):" />

        <TimeDay text="Morning & Afternoon (9:30 am - 4:30 pm)" />
        <Bullet text="INTRO: Agenda and scene setting" />

        <h5>CPD Accredited training on Blockchain and coding basics</h5>

        <Bullet text='Practical introduction and insights on the history, development, use Blockchain coding practices training application of blockchains and distributed ledger tech, as well as crypto-currencies, including case studies of this tech in action; how "tokens" work; classification of token types; investment options, ICOs and STOs, buying and selling crypto-currencies and more.' />
        <Bullet text="Blockchain coding practices training for novices & intermediates on blockchain technology, coding techniques and technology basics." />

        <p>
          <i>
            Training provided by
            {' '}
          </i>
          <b>Gary Nuttall MBCS CITP</b>
          <i>
          , Blockchain / DLT / ICO consultant,
educator and trainer with 25 years of experience in a variety of IT roles in the
CPG/FMCG, Commodities Trading, Pharmaceuticals, Retailing and Insurance
industries and an established profile in Distributed Ledger technologies, and
associates.
          </i>
          {' '}
          <a href="https://www.linkedin.com/in/garynuttall" rel="noopener noreferrer" target="_blank"><span className="purple">www.linkedin.com/in/garynuttall</span></a>
        </p>
        <p>
          The accreditation for the event training will be provided by the UK
          {' '}
          <span className="purple--underline">CPD Accreditation Service</span>
          .
        </p>

        <TimeDay text="Breaks" />
        <Bullet text="Coffee, nibbles and smoothies" />
        <Bullet text="Lunch - healthy and refreshing food for the brain" />

        <TimeDay text="Afternoon" />
        <Bullet text="Walking tour of Shoreditch (graffiti, history, vibe with a witty local guide)" />

        <TimeDay text="Evening" />
        <Bullet text="Dinner at Nuala restaurant and whisky tasting at Black Rock bar in Shoreditch" />
      </div>
    </div>
    <div className="separator" />
    <div className="content">
      <div>
        <Day text="Day 2 (29 March 2019):" />

        <TimeDay text="Morning (start at 9.00 am)" />
        <Bullet text="Formal welcome and introduction by HM Government Minister / Shadow Minister (to be confirmed)" />
        <Bullet text="Agenda and scene setting" />

        <Panel
          title="PANEL 1: Let's talk about techs"
          text="Overview of the tech marketplace, current developments and opinion on the future of FinTech, RegTech, GovTech, HealthTech, Blockchain and it's successors. Foretelling the future and the likely impact of tech on corporate business practices today"
        />
        <Panel
          title="PANEL 2: Show me the money!"
          text="How to appeal to investors, who are they, what peaks their interest, pitfalls of fundraising, striking it big."
        />
        <Panel
          title="PANEL 3: What's happening over there in Southeast Europe?"
          text="Croatia and SEE - spotlight on the region, up and coming start-ups, investment opportunities, market potentials."
        />
        <Panel
          title="PANEL 4: Brexit, London & Fintech: Opportunity or Disaster?"
          text="What sort of life is there after Brexit, should one look at setting up shop in UK and what is there to gain."
        />

        <TimeDay text="Breaks" />
        <Bullet text="Coffee, nibbles and smoothies" />
        <div>
          <TimeDay text="Lunch (3.00 pm - 4.30 pm) " />
          <span>
            {' '}
            – a very cool place nearby
          </span>
        </div>
        <TimeDay text="Evening (6.00 pm - 8.00 pm)" />
        <Bullet
          bold="Pitch Night"
          text="; approx. 6 pitchers to UK wealth/fund managers, angels, PE/VC etc"
        />
        <div>
          <TimeDay text="Night Out " />
          <span>
            {' '}
            – Blues Kitchen, Shoreditch
          </span>
        </div>
      </div>
    </div>
    <div className="separator" />
    <div className="content">
      <div>
        <Day text="Day 3 (30 March 2019):" />

        <TimeDay text="Morning" />
        <Bullet text="Breakfast at hotel" />
        <Bullet text="Delegates wishing to stay longer may take advantage of BCCC’s special discounted rates for a further night’s stay at Nobu Hotel Shoreditch" />
        <Bullet text="Delegates returning to Zagreb with BCCC are invited to travel with us courtesy of our private coach transfer to London Heathrow airport" />
      </div>
    </div>
    <div className="separator" />
  </div>
);

export default Agenda;
