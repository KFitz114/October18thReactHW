import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter.js';
import React from 'react';
import Form from './Form/Form.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Counter startingCount="0"/>
          <Form value=' '/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
