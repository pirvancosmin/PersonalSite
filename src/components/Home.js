import React, { useState } from 'react';
import './styles.css';

function Home() {
  return (
    <section className="presentation">
        <div className='homeDes'>
          <h2 className="hello">Hi, I'm Cosmin <br />  Web developer <br />  <img src='dev.png' className='devImg' alt='devimg' /> </h2>
        </div>
    </section>
  );
}

export default Home;
