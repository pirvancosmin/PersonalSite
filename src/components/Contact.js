import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="h2title"> <h2 className='h2Name'>Contact Me</h2></div>
        <div className='dates'>
          <img className='imagMail' src='./mailsP.png' alt='img' />
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
      </>
    </div>
  );
}

export default Contact;
