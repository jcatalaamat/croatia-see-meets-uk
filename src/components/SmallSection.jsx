import React from 'react';

const SmallSection = (props) => {
  const { header, children } = props;
  return (
    <div className="content">
      <h3>{header}</h3>
      {children}
    </div>
  );
};

export default SmallSection;
