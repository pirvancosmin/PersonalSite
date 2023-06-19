import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  useEffect(() => {
    document.title = 'Pirvan Cosmin';
  }, []);

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='app'>
        <Router>
          <ul className='list'>
            <li className='listitem'>
              <Link to='/'>Home</Link>
            </li>
            <li className='listitem'>
              <Link to="/About">About</Link>
            </li>
            <li className='listitem'>
              <Link to="/Projects">Projects</Link>
            </li>
            <li className='listitem'>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
        <bottom className="bottom">
          <h5 id="thisYear">{`© ${currentDate.toString()} Pirvan Cosmin. All Rights Reserved.`}</h5>
        </bottom>
      </div>
    </>
  );
}


export default App;
