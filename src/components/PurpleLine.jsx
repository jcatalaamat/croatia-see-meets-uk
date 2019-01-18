import React from 'react';

const PurpleLine = (props) => {
  const { text } = props;

  return (
    <div className="purple-header__container">
      <h5>
        <span className="purple-header__text">
          {text}
        </span>
      </h5>
    </div>
  );
};

export default PurpleLine;
