import React from 'react';
import RedHeader from './RedHeader';

const Contacts = () => (
  <div className="contacts">
    <div className="content">
      <RedHeader spacing text="Contacts" />
      <div className="encode-text">
        <p>
          <span className="p-contrast">please send all inquiries to:</span>

        </p>
        <div><span className="red-bg-underline"><a className="red-bg-underline" href="mailto:info@britishcroatiancc.co.uk">info@britishcroatiancc.co.uk</a></span></div>
        <div style={{ paddingTop: '20px' }}><span className="red-bg-underline"><a className="red-bg-underline" href="mailto:members@britishcroatiancc.co.uk">members@britishcroatiancc.co.uk</a></span></div>
        <p>
          <span className="p-contrast">
British Croatian Chamber of Commerce,
            <br />
c/o Wikborg Rein LLP, 30 Cannon Street,
            <br className="br-i" />
            {' '}
London EC4M 6XH
            <br />
Company number: 03568235

          </span>
        </p>
      </div>

    </div>
  </div>
);

export default Contacts;
