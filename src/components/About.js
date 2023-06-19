import React, { useState } from 'react';
import './styles.css';

function About() {
  const [text, setText] = useState('About Me');

  const handleMouseOver = () => {
    setText('Cosmin');
  }
  const handleMouseOut = () => {
    setText('About Me');
  }
  return (
    <article className="articleAboutMe">
    <div className='h2title'> <h2 className='h2Name' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{text}</h2></div>
    <div className="container">
      <p className="textAM">
        Since an early age I have always been curious and passionate about everything related to technology.
        <br /> I started to learn programming and gained valuable experience in languages such as <b>C++</b>, <b>Javascript</b>, <b>HTML</b>, and <b>CSS</b>.
        <br /> Now, I'm enthusiastic to find a role where I can continue learning and growing.
        I'm a fast learner and have a strong desire to acquire new skills.
        <br /> I am determined to contribute to innovative projects and be part of a dynamic team that encourages creativity and continuous learning.
        Ready to take on new challenges, I am motivated to push boundaries and embrace the ever-evolving nature of the industry.</p>
      <img className="img1" src="./symbol.png" alt="logo" width="250px" height="250px" />
    </div>
  </article>
  );
}

export default About;
