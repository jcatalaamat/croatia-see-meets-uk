import React from 'react';

const Panel = (props) => {
  const { title, text, children } = props;
  const parts = title.split(':');
  let intro = parts[0];
  let italic;
  if (parts.length > 1) {
    intro = `${parts[0]}:`;
    italic = parts[1];
  }

  return (
    <div>
      <h5 className="paddingTop--small">
        {intro}
        <i>{italic}</i>
      </h5>
      {text && <p className="no-margin">{text}</p>}
      {children && <div className="no-margin">{children}</div>}
    </div>
  );
};

export default Panel;
