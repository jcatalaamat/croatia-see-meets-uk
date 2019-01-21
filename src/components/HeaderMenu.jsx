import React from 'react';

const HeaderMenu = props => (
  <div style={{ display: 'flex' }}>
    <div className="space" />
    <div className="header-menu">
      <div className="logo" />

      <div className="menu-options">
        <ul>
          <li className="menu-flat-one" onClick={props.goToEvent}>The event</li>
          <li className="menu-flat-two" onClick={props.goToWhy}>Why participate</li>
          <li className="menu-flat-three" onClick={props.goToApply}>How to apply</li>
          <li className="menu-flat-four" onClick={props.goToBccc}>About BCCC</li>
        </ul>
      </div>
    </div>

  </div>
);

export default HeaderMenu;
