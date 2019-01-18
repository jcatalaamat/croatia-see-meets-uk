import React from 'react';

const Panel = (props) => {
  const { title, text, children } = props;
  return (
    <div>
      <h5>{title}</h5>
      <p>{text}</p>
      <p>{children}</p>
    </div>
  );
};

export default Panel;
