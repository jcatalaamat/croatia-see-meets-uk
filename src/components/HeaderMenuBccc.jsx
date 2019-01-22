import React from 'react';

const HeaderMenuBccc = props => (
  <div style={{ display: 'flex' }}>
    <div className="space" />
    <div className="header-menu">
      <div className="logo-bccc" />

      <div className="menu-options-bccc">
        <ul>
          <li className="menu-flat-bccc-item" onClick={props.goToMission}>Our mission</li>
          <li className="menu-flat-bccc-item" onClick={props.goToHistory}>Our history</li>
          <li className="menu-flat-bccc-item" onClick={props.goToCurrent}>Current events</li>
          <li className="menu-flat-bccc-item" onClick={props.goToDirectors}>Board of Directors</li>
        </ul>
      </div>
    </div>

  </div>
);

export default HeaderMenuBccc;
