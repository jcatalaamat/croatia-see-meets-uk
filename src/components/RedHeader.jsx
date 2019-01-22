import React from 'react';
import classnames from 'classnames';

const RedHeader = (props) => {
  const {
    text,
    small,
    medium,
    spacing,
    spacingTop,
  } = props;
  const containerClass = classnames({
    'red-header__container--spacing': spacing,
    'red-header__container--spacingTop': spacingTop,
    'red-header__container--small': small,
    'red-header__container--medium': medium,
    'red-header__container': true,
  });

  return small ? (
    <div className={containerClass}>
      <h5>
        <span className="red-header__text">
          {text}
        </span>
      </h5>
    </div>
  ) : (
    <div className={containerClass}>
      <h2>
        <span className="red-header__text">
          {text}
        </span>
      </h2>
    </div>
  );
};

export default RedHeader;
