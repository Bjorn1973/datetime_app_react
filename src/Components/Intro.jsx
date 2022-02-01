import React from 'react';

const Intro = () => {
  return (<>
  <div className="introWrapper">
      <h1 className='intro title'>UNIX TIMESTAMP CONVERTER</h1>
      <div className='intro block'>
      <h2 className="intro__question">What is Unix Timestamp?</h2>
      <p className="intro__text">The unix time stamp is a way to track time as a running total of seconds. This count starts at the Unix Epoch on January 1st, 1970 at UTC. Therefore, the unix time stamp is merely the number of seconds between a particular date and the Unix Epoch. It should also be pointed out that this point in time technically does not change no matter where you are located on the globe. This is very useful to computer systems for tracking and sorting dated information in dynamic and distributed applications both online and client side.</p>
      </div>
      </div>
  </>);
};

export default Intro;
