import React, { useState } from 'react';
import './App.css';
import Apod from './Apod';
import { FaSun, FaMoon } from 'react-icons/fa';
import nasaLogo from './assets/nasa-logo.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="fixed-menu">
        <div className="menu-container">
          <img src={nasaLogo} alt="NASA Logo" className="nasa-logo" />
          <button onClick={toggleDarkMode} className="dark-mode-button">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
      <header className="App-header">
        <h1 className="App-title">NASA Astronomy Picture of the Day</h1>
      </header>
      <main>
        <Apod />
      </main>
      <footer>
        <p>Data fornecida pela NASA API</p>
      </footer>
    </div>
  );
}

export default App;
