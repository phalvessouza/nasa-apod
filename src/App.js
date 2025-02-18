import React, { useState } from 'react';
import './App.css';
import Apod from './Apod';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <h1>NASA Astronomy Picture of the Day</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
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
