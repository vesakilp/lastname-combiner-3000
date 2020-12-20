import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [splitName1, setSplitName1] = useState("");
  const [splitName2, setSplitName2] = useState("");

  useEffect(() => {
    setSplitName1(splitName(name1, true));
    setSplitName2(splitName(name2, false));
  });

  const substring = (string, index, returnFirstPart) => {
    if(returnFirstPart) return string.substring(0, index);
    else return string.substring(index, string.length);
  };

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1)
  };

  const splitName = (name, returnFirstPart) => {
    const vowels = ["a", "e", "i", "o", "u", "y", "ä", "ö", "å"];
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z"];

    let splitName = "";

    for (var i = 0; i < name.length; i++) {
      //kaksi peräkkäistä vokaalia, katko toisen jälkeen, pitää testata että ei olla ekassa kirjaimessa
     if(i > 0 && vowels.includes(name.charAt(i)) && vowels.includes(name.charAt(i-1))) {
        splitName = substring(name, i+1, returnFirstPart);
        break;
      }

      //vokaali ennen konsonanttia, konsonantin jälkeen katko
      if(vowels.includes(name.charAt(i)) && consonants.includes(name.charAt(i+1))) {
        // jos vokaalin jälkeisin konsonantin jälkeen tulee vokaali, katko jo vokaalin jälkeen
        if(vowels.includes(name.charAt(i+2))) {
          splitName = substring(name, i+1, returnFirstPart);
        }
        else splitName = substring(name, i+2, returnFirstPart);
        break;
      }
    }
    return splitName;
  };

  const combination = capitalize(splitName1) + splitName2;

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
        <input type="text" value={name1} onChange={e => setName1(e.target.value)} data-testid="name1" />
        <input type="text" value={name2} onChange={e => setName2(e.target.value)} data-testid="name2" />
        <div data-testid="combination1">{combination}</div>
      </header>
    </div>
  );
}

export default App;
