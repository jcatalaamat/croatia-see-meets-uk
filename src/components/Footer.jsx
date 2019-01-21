import React from 'react';
import Popup from 'reactjs-popup';
import Terms from './Terms';
import Privacy from './Privacy';

const Footer = () => {
  const contentStyle = {
    padding: '0',
    width: '80%',
  };

  const overlayStyle = {
    overflow: 'auto',
    'padding-top': '5%',
    'padding-bottom': '5%',
  };
  return (
    <div className="footer">

      <div className="footer-container">
        <div className="terms-privacy">
          <Popup
            modal
            lockScroll
            overlayStyle={overlayStyle}
            contentStyle={contentStyle}
            closeOnDocumentClick
            trigger={<div className="pointer">Terms and Conditions</div>}
          >
            <div className="terms-privacy-text"><Terms /></div>
          </Popup>

          <Popup
            modal
            lockScroll
            overlayStyle={overlayStyle}
            contentStyle={contentStyle}
            closeOnDocumentClick
            trigger={<div className="pointer">Privacy Policy</div>}
          >
            <div className="terms-privacy-text"><Privacy /></div>
          </Popup>
        </div>
        <div className="copyrights__container">
          <div className="copyrights">
            <p>
All images: photographs by British Croatian Chamber of Commerce Limited and Shutterstock
              <br />
© British Croatian Chamber of Commerce Limited
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
