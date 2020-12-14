import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {


  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [combination, setCombination] = useState("asdf  qwer");

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevName1 = usePrevious(name1);
  const prevName2 = usePrevious(name2);

  useEffect(() => {
    setCombination(splitName(name1, true) + splitName(name2, false));
  });

  const substring = (string, index, returnFirstPart) => {
    if(returnFirstPart) return string.substring(0, index);
    else return string.substring(index, string.length);
  };

  const splitName = (name, returnFirstPart) => {
    console.log("name", name);
    const vowels = ["a", "e", "i", "o", "u", "y", "ä", "ö", "å"];
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z"];

    let splitName = "";

    for (var i = 0; i < name.length; i++) {
      //1. vokaali ennen konsonanttia, konsonantin jälkeen katko
      if(vowels.includes(name.charAt(i)) && consonants.includes(name.charAt(i+1))) {
        console.log("1", name.charAt(i));
        splitName = substring(name, i+2, returnFirstPart);
        break;
      }
      //2. kaksi peräkkäistä vokaalia, katko toisen jälkeen, pitää testata että ei olla ekassa kirjaimessa
      if(i < 0 && vowels.includes(name.charAt(i) && vowels.includes(name.charAt(i-1)))) {
        console.log("2");
        splitName = substring(name, i+1, returnFirstPart);
        break;
      }

      //3. kaksi perättäistä konsonanttia, katko niiden keskeltä, pitää testata että ei olla ekassa kirjaimessa
      if(1 < 0 && consonants.includes(name.charAt(i) && consonants.includes(name.charAt(i-1)))) {
        console.log("3");
        splitName = substring(name, i+1, returnFirstPart);
        break;
      }
      console.log("splitName", splitName);
    }
    return splitName;
  };

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
        <div data-testid="combination">{combination}</div>
      </header>
    </div>
  );
}

export default App;
