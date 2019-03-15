import React from 'react';

const HeaderMenu = props => (
  <div style={{ display: 'flex' }}>
    <div className="space" />
    <div className="header-menu">
      <div className="logo" />

      <div className="menu-options">
        <ul>
          <li className="menu-flat-item" onClick={props.goToEvent}>The event</li>
          <li className="menu-flat-item" onClick={props.goToWhy}>Why participate</li>
          <li className="menu-flat-item" onClick={props.goToAgenda}>Agenda</li>
          {/* <li className="menu-flat-item" onClick={props.goToProgramme}>Encode Programme</li> */}
          <li className="menu-flat-item" onClick={props.goToApply}>How to apply</li>
          <li className="menu-flat-item" onClick={props.goToBccc}>About BCCC</li>
        </ul>
      </div>
    </div>

  </div>
);

export default HeaderMenu;
