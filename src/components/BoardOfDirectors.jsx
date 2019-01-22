import React from 'react';
import RedHeader from './RedHeader';
import Day from './Day';

const BoardOfDirectors = () => (
  <div className="board-directors">
    <div className="content">
      <RedHeader spacing text="Board of Directors" />
      <div className="">
        <div className="history">
          <div className="history-one">
            <Day text="Tony Suchy" />
            <p>
            Tony Suchy is a retired solicitor having been a partner in a
City firm for more than 30 years. Tony has considerable
interests and experience of Croatia and was instrumental
in setting up the British Croatian Chamber of Commerce
more than 20 years ago and has participated in its operations throughout that period.
            </p>

            <Day text="Vlaho Kojakovic" />
            <p>
            Vlaho is Director of the Property and Tourism Team at the
European Bank for Reconstruction and Development
where he has been working for the past 7 years.
              <br />
              <br />
He is a seasoned banker and a real estate executive with
more than 20 years of experience in the sector.
              <br />
              <br />
Before joining EBRD, Vlaho worked as Development Director with the Trigranit Development Corporation, the biggest real estate developer in Central and Southeast
Europe. He started his career in investment banking with
BNP Paribas in London.
              <br />
              <br />
Vlaho ‎holds an MBA from Imperial College, University of
London, and an executive education from the Kennedy
School of Government, Harvard University.
            </p>

            <Day text="Damir Cimer" />
            <p>
            Damir is the Advisor to the Director on the Board of
European Bank for Reconstruction and Development,
representing Hungary, Czech Republic, Slovakia, Croatia
and Georgia where he has been working for the past 3
years. Before joining EBRD he was the advisor to the
Croatian Vice-Prime Minister where he led a
cross-ministerial team of experts working on wide reaching
national reforms. For years he has been actively
supporting and consulting public and private sector
stakeholders, cooperating with OECD, in South East
Europe and Caucuses on establishing institutional and
legislative systems for Public Private Partnerships and
Concessions.
            </p>

          </div>
          <div className="history-two">
            <Day text="Stephen Ashurst" />
            <p>
            Stephen is a contractor helping directors and executive
VPs in the wealth, insurance, asset servicing, management consultancy and investment/fund management industries to build and run online retail investment platforms,
wealth propositions and tax-wrapped products with more
than 20 years of experience. His experience has been
earned working in the UK and internationally with major
management consultancies as an associate director and
subject-matter expert. Stephen's record of accomplishment spans multiple clients including Nationwide, Lloyds
Bank, EY, Fidelity, Barclays, BNP Paribas, Legal & General, the Financial Conduct Authority, start-ups & new ventures.
            </p>
            <Day text="Lindsay Forbes" />
            <p>
            Former Director at European Bank for Reconstruction and
Development. Joined the Bank in 1994 and focused initially on industrial projects in Croatia. Subsequently managed
the Corporate Equity activities of the Bank and lived for
several years in Russia, representing the Bank on a
number of Corporate and Bank Boards. Former Director of
Pliva d.d.
            </p>

            <Day text="Renaud Barbier Emery" />
            <p>
            Renaud is a solicitor and partner at Wikborg Rein in
London. His practice focuses on the development of projects and the resolution of disputes in the shipping, shipbuilding and energy sectors. He has been assisting clients
in Croatia for many years.
            </p>


            <div className="board-directors__container--square">
              <div className="box-grey">
                <div style={{ paddingLeft: '32px', paddingTop: '32px' }}>
                  <Day text="Administration and Events" />
                  <h3 className="box-grey__header">Dina Calakovic</h3>
                </div>
                <div className="box-grey__text-container">
                  <span className="box-grey__text">
                  Head of Events and Administration. Dina provides
support for our Events and is responsible for
liason with BCCC Members. Dina has a
Bachelor's degree in Business & Economics and a
Master's in Management from the University of
Zagreb and a Certificate in Management
Consultancy & Project Management at the London
School of Business & Finance.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
);

export default BoardOfDirectors;
