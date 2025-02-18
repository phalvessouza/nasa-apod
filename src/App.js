import React from 'react';
import './App.css';
import Apod from './Apod';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Astronomy Picture of the Day</h1>
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