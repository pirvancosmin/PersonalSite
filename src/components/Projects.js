import React from 'react';
import './styles.css';

function Projects() {
  return (
    <div>
      <article>
        <div className='projectSection'>
          <div className='h2title'><h2 className='h2Name'>Projects</h2></div>
          <h2 className='textP'>Here are a few projects made by me (in progress)</h2>
          <div className='projects'>
            <div className='project'>
              <a href='https://calculator-pirvan.netlify.app/'>
                <img src='calc.png' alt='calculator' className='projectImg' />
                <div className="overlay">
                  <p>Calculator Project</p>
                </div>
              </a>
            </div>
            <div className='project'>
              <a href='https://pcbinaryconverter.netlify.app/'>
                <img src='bin.png' alt='converter' className='projectImg' />
                <div className="overlay">
                  <p>Binary Converter Project</p>
                </div>
              </a>
            </div>
            <div className='project'>
              <a href='https://pcweather.netlify.app/'>
                <img src='weather.png' alt='weather' className='projectImg' />
                <div className="overlay">
                  <p>Weather App Project</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>

    </div>
  );
}

export default Projects;
