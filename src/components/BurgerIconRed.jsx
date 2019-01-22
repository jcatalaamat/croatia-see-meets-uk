import React from 'react';

export default ({ open, ...props }) => (
  <div className={open ? 'burger-menu-red open' : 'burger-menu-red'} {...props}>
    <div className="bar1-red" key="b1" />
    <div className="bar2-red" key="b2" />
    <div className="bar3-red" key="b3" />
  </div>
);
