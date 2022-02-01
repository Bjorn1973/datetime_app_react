import React from 'react';

const DateTime = ({data}) => {
  return (<>
  <div className="column datetime">
      <h1 className='title'>
          <span className="title__date">Date: {data.slice(0, 10)
          .split("-")
          .reverse()
          .join("-")}</span>
          <span className="title__date__askedDate"></span>
    </h1>
      <h1 className='title'>
          <span className="title__time">Time: {data.slice(-8)}</span>
          <span className="title__date__askedTime"></span>
    </h1>
    </div>
  </>);
};

export default DateTime;
