import React from 'react';
import RedHeader from './RedHeader';

const UsefulLinks = () => (
  <div className="useful-links">
    <div className="content">
      <RedHeader spacing text="Useful Links" />
      <div className="history history-links">
        <div className="history-one-small">
          <p>
            <div style={{ paddingBottom: '5px' }}>About Croatia;</div>
            <span className="red-bg"><a className="red-bg" href="http://www.croatia.eu/">www.croatia.eu</a></span>
          </p>

          <p>
            <div style={{ paddingBottom: '5px' }}>Croatian Government;</div>
            <span className="red-bg"><a className="red-bg" href="http://www.vlada.gov.hr/en">www.vlada.gov.hr/en</a></span>
          </p>

          <p>
            <div style={{ paddingBottom: '5px' }}>Embassy of the Republic of Croatia in the UK;</div>
            <span className="red-bg"><a className="red-bg" href="http://www.uk.mvep.hr/en/">www.uk.mvep.hr/en</a></span>
          </p>

        </div>
        <div className="history-two-big">
          <p>
            <div style={{ paddingBottom: '5px' }}>Croatian Chamber of Economy;</div>
            <span className="red-bg"><a className="red-bg" href="http://www.investincroatia.hr/">www.investincroatia.hr</a></span>
          </p>

          <p>
            <div style={{ paddingBottom: '5px' }}>British Embassy Zagreb;</div>
            <span className="red-bg"><a className="red-bg" href="http://www.gov.uk/world/organisations/british-embassy-zagreb">www.gov.uk/world/organisations/british-embassy-zagreb</a></span>
          </p>
        </div>

      </div>

    </div>
  </div>
);

export default UsefulLinks;
