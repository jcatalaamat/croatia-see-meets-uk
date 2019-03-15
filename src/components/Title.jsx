import React from 'react';
import Popup from 'reactjs-popup';

import HeaderMenu from './HeaderMenu';
import AquaHeader from './AquaHeader';
import BurgerIcon from './BurgerIcon';
import Bullet from './Bullet';
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
      <div className="pwc-logo" />
      <div className="content">
        <AquaHeader small text="London, 28/29 March 2019 at TechSpace Shoreditch" />
        <div className="p-max">
          <p>
            <span className="p-contrast">
            A unique event of
            </span>

            <div className="p-contrast">
              <Bullet text="Panel discussions on the future of tech-family of innovations (FinTech, RegTech, HealthTech, GovTech) with a focus on the SEE region, featuring an exciting line-up of speakers from all spectrums of the start-up, tech and financial community (please scroll down for the full list of panellists and agenda)" />
              <Bullet text="Pitching for Croatian and SEE start-ups and networking, and" />
            </div>
          </p>

          <p>
            <span className="p-contrast">
            The event is intended for Croatian, SEE and British business delegates (banking, law, healthcare, insurance,
corporates, ICT and others) looking to advance their business knowledge and gain insights on the
digital futures and opportunities in SEE, European and global markets.
            </span>
          </p>
          <p>
            <span className="p-contrast">
              <b>
              Event is organised by British Croatian Chamber of Commerce;
              </b>
            </span>
            <div className="p-contrast">
              <Bullet text="With support of PwC Croatia," />
              <Bullet text="With support of Department of International Trade," />
              <Bullet text="Under the auspices of Embassy of the Republic of Croatia in the UK, and" />
              <Bullet text="in partnership with and British Serbian Chamber of Commerce" />
            </div>
          </p>
        </div>
        <div className="entrepreneurs-logo" />
        <div className="supremefactory-logo" />

      </div>


      <div className="bottom-arrow" />
    </div>
  );
};

export default Title;
