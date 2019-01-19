import React from 'react';
import classnames from 'classnames';

const AquaHeader = (props) => {
  const {
    text,
    small,
    medium,
    spacing,
    spacingTop,
  } = props;
  const containerClass = classnames({
    'aqua-header__container--spacing': spacing,
    'aqua-header__container--spacingTop': spacingTop,
    'aqua-header__container--small': small,
    'aqua-header__container--medium': medium,
    'aqua-header__container': true,
  });

  return small ? (
    <div className={containerClass}>
      <h5>
        <span className="aqua-header__text">
          {text}
        </span>
      </h5>
    </div>
  ) : (
    <div className={containerClass}>
      <h2>
        <span className="aqua-header__text">
          {text}
        </span>
      </h2>
    </div>
  );
};

export default AquaHeader;
