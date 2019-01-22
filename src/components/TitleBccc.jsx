import React from 'react';
import Popup from 'reactjs-popup';

import HeaderMenuBccc from './HeaderMenuBccc';
import BurgerIcon from './BurgerIcon';
import MenuBccc from './MenuBccc';
import BurgerIconRed from './BurgerIconRed';


const TitleBccc = (props) => {
  const contentStyle = {
    background: '#f2f2f2',
    'overflow-y': 'hidden',
    'overflow-x': 'hidden',
    padding: '0',
    width: '100%',
    height: '100%',
    border: 'none',
  };
  return (
    <div className="title-section-bccc">
      <HeaderMenuBccc {...props} />
      <Popup
        modal
        lockScroll
        overlayStyle={{ background: '#715dff' }}
        contentStyle={contentStyle}
        closeOnDocumentClick
        trigger={open => <BurgerIconRed open={open} />}
      >
        {close => <MenuBccc {...props} close={close} />}
      </Popup>
      <div className="titles">
        <h1 style={{ color: 'black' }}>
The British Croatian
          <br />
Chamber of Commerce

        </h1>
      </div>
      <div className="content">
        <div className="p-max">
          <p>
            <span className="p-contrast-bccc">
            The British Croatian Chamber of Commerce (BCCC)
is a bilateral non-profit membership organisation
dedicated to promoting and supporting business
relations between the United Kingdom and the
Republic of Croatia, with headquarters in London
and an extensive member base.
            </span>
          </p>
        </div>
      </div>
      <div className="bottom-arrow-bccc bottom-arrow-bccc-white" />
    </div>
  );
};

export default TitleBccc;
