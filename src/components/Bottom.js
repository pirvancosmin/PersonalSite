import React from 'react';
import './styles.css';

const Bottom = () => {
    return (
        <p className="bottom">
          {`© ${new Date().getFullYear()} Pirvan Cosmin. All Rights Reserved.`}
        </p>

    );
  };
  
  export default Bottom;