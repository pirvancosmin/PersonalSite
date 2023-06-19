import React, { useState } from 'react';
import './styles.css';

function Home() {
  return (
    <>
    <section className="presentation">
        <div className='homeDes'>
          <h2 className="hello">Hi, I'm Cosmin <br />  Web developer <br /> </h2>
          <img src='progpic.png' className='devImg' alt='devimg' />
        </div>
    </section>

  </>
  );
}

export default Home;
