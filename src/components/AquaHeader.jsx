import React from 'react';

const AquaHeader = (props) => {
  const { text, small } = props;

  return small ? (
    <div className="aqua-header__container--small">
      <h5>
        <span className="aqua-header__text">
          {text}
        </span>
      </h5>
    </div>
  ) : (
    <div className="aqua-header__container">
      <h2>
        <span className="aqua-header__text">
          {text}
        </span>
      </h2>
    </div>
  );
};

export default AquaHeader;
