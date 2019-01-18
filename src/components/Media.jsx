import React from 'react';
import AquaHeader from './AquaHeader';
import Panel from './Panel';

const Media = () => (
  <div className="media">
    <div className="content">
      <AquaHeader text="Media and other inquiries" />
      <Panel title="If you would like to learn more about this event or BCCC please get in touch" />
      <p><a href="mailto:info@britishcroatiancc.co.uk"><span className="purple--underline">info@britishcroatiancc.co.uk</span></a></p>
      <p><a href="mailto:members@britishcroatiancc.co.uk"><span className="purple--underline">members@britishcroatiancc.co.uk</span></a></p>
    </div>
  </div>
);

export default Media;
