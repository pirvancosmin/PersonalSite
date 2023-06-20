import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  useEffect(() => {
    document.title = 'Pirvan Cosmin';
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
      
      </div>
    </>
  );
}


export default App;
