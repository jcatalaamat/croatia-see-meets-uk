import React from 'react';

const Bullet = (props) => {
  const { bold, text } = props;
  return (
    <div className="bullet__container">
      <div className="bullet__point">●</div>
      <div className="bullet__text">
        <b>{bold}</b>
        {text}
      </div>
    </div>
  );
};

export default Bullet;
