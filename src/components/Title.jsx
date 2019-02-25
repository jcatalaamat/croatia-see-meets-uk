import React from 'react';
import Popup from 'reactjs-popup';

import HeaderMenu from './HeaderMenu';
import AquaHeader from './AquaHeader';
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';


const Title = (props) => {
  const contentStyle = {
    background: '#715dff',
    'overflow-y': 'hidden',
    'overflow-x': 'hidden',
    padding: '0',
    width: '100%',
    height: '100%',
    border: 'none',
  };
  return (
    <div className="title-section">
      <HeaderMenu {...props} />
      <Popup
        modal
        lockScroll
        overlayStyle={{ background: '#715dff' }}
        contentStyle={contentStyle}
        closeOnDocumentClick
        trigger={open => <BurgerIcon open={open} />}
      >
        {close => <Menu {...props} close={close} />}
      </Popup>
      <div className="titles">
        <h4>TECH FUTURES LONDON 2019</h4>
        <h1>Croatia and SEE* meets the UK</h1>
        <h6>*SEE: Southeastern Europe</h6>
      </div>
      <div className="content">
        <AquaHeader small text="London, 28/29 March 2019 at TechSpace Shoreditch" />
        <div className="p-max">
          <p>
            <span className="p-contrast">
            A unique 2-day event of professional CPD-accredited business education with world
            class trainer and educator Gary Nuttall and associates on the basics and practical
            implementation of distributed ledger technology, plus panel discussions on the
            future of tech-family of innovations (FinTech, RegTech, HealthTech, GovTech),
            pitching for Croatian and SEE start-ups and networking.
            </span>
          </p>
          <p>
            <span className="p-contrast">
            The event is intended for Croatian, SEE and British business delegates (banking, law, healthcare, insurance,
corporates, ICT and others) looking to advance their business and technical knowledge and gain insights on the
digital futures and opportunities in SEE, European and global markets.
            </span>
          </p>
          <p>
            <span className="p-contrast">
              <b>
              Taking place at TechSpace in the City of London's tech-fuelled 'Silicon Roundabout' area of Shoreditch, the event
is offered as an organised package where the price includes participation in all the business and networking events,
food and drinks throughout the 2 days and a CPD-accredited professional education certificate on distributed ledger
technology.
              </b>
            </span>
          </p>

          <p>
            <span className="p-contrast">
              <b>
              Event is organised by British Croatian Chamber of Commerce, with support of Embassy of the Republic of Croatia in the UK and in partnership with British Serbian Chamber of Commerce.
              </b>
            </span>
          </p>
        </div>

      </div>
      <div className="bottom-arrow" />
    </div>
  );
};

export default Title;
