import React from 'react';
import './styles.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const[currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDate(new Date().getFullYear());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  return (
    <div>
      <div className="contact">
        <div className="h2title"> <h2 className='h2Name'>Contact Me</h2></div>
        <div className='dates'>
        <p><strong>EMAIL:</strong> pirvancosmin@outlook.com</p>
        <p><strong>PHONE:</strong> +40 761 987 710</p>
        </div>
        <div className='buttonStyle'>
          <button className='linkedin-button' onClick={() => window.open('https://ro.linkedin.com/in/pirvancosmin?trk=profile-badge')}>
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </button>
          <button className='github-button' onClick={() => window.open('https://github.com/pirvancosmin')}>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </button>
        </div>
      </div>
      <>
        <bottom>
            <h3 id="thisYear">{`© ${currentDate.toString()} Pirvan Cosmin. All Rights Reserved.`}</h3>
        </bottom>
        </>
    </div>
  );
}

export default Contact;
