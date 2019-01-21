import React from 'react';
import classnames from 'classnames';

const PurpleLine = (props) => {
  const {
    text, spacing, spacingTop, children,
  } = props;
  const containerClass = classnames({
    'purple-header__container--spacing': spacing,
    'purple-header__container--spacingTop': spacingTop,
    'purple-header__container': true,
  });
  return (
    <div className={containerClass}>
      <h5>
        {text && (
        <span className="purple-header__text">
          {text}
        </span>
        )}
        {children && (
        <span className="purple-header__text">
          {children}
        </span>
        )}
      </h5>
    </div>
  );
};

export default PurpleLine;
