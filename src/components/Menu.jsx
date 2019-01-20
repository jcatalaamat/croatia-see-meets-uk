import React from 'react';

export default ({ close }) => (
  <div className="menu">
    <div className="logo" />
    <ul>
      <li className="menu-one" onClick={close}>The Event</li>
      <li className="menu-two" onClick={close}>Why Participate</li>
      <li className="menu-three" onClick={close}>How to apply</li>
      <li className="menu-four" onClick={close}>Encode Programme</li>
      <li className="menu-five" onClick={close}>About BCCC</li>
    </ul>
  </div>
);
