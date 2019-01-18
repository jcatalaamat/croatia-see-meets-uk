import React from 'react';
import AquaHeader from './AquaHeader';

const AboutBCCC = () => (
  <div className="about-bccc">
    <div className="content">
      <AquaHeader text="About British Croatian Chamber of Commerce" />
      <p>
        <span className="p-contrast">
Established in 1998, the BCCC is a long-standing friend of British and Croatian
businesses alike. We aim to promote robust, vibrant and mutually beneficial
business relations between Croatia and the UK. We offer a friendly, relaxed and
helpful forum for people doing business in and between the two countries.
        </span>
      </p>
      <p>
        <span className="p-contrast">
        We cultivate a ‘business club’ atmosphere where members are surrounded and
supported by likeminded individuals with common interests and goals. BCCC
membership is open to all businesses and individuals, ranging from start-ups to
high-profile, established companies who are actively interested in doing business
between Croatia and the UK. Learn more about BCCC at
          {' '}
          <a
            href="https://britishcroatiancc.co.uk"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="purple--underline">britishcroatiancc.co.uk</span>
          </a>
        </span>
      </p>
      <p>
        <span className="p-contrast">
        British Croatian Chamber of Commerce,
          <br />
c/o Wikborg Rein LLP, 30 Cannon Street,
          <br />
London EC4M 6XH
          <br />
Company number: 03568235
        </span>
      </p>
    </div>
  </div>
);

export default AboutBCCC;
