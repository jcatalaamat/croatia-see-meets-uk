import React from 'react';
import classnames from 'classnames';

const PurpleLine = (props) => {
  const { text, spacing, spacingTop } = props;
  const containerClass = classnames({
    'purple-header__container--spacing': spacing,
    'purple-header__container--spacingTop': spacingTop,
    'purple-header__container': !spacing && !spacingTop,
  });
  return (
    <div className={containerClass}>
      <h5>
        <span className="purple-header__text">
          {text}
        </span>
      </h5>
    </div>
  );
};

export default PurpleLine;
