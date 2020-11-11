import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {


  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [combination, setCombination] = useState("asdf  qwer");

  useEffect(() => {
    const vowels = ["a", "e", "i", "o", "u", "y", "ä", "ö", "å"];
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z"];

    //vokaali ennen konsonanttia, vokaalin jälkeen katko
    //kaksi peräkkäistä vokaalia, katko toisen jälkeen
    //kaksi perättäistä konsonanttia, katko niiden keskeltä
    
    setCombination(name1 + name2);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text" value={name1} onChange={e => setName1(e.target.value)} />
        <input type="text" value={name2} onChange={e => setName2(e.target.value)} />
        <div>{combination}</div>
      </header>
    </div>
  );
}

export default App;
