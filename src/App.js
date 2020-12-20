import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

function App() {

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [splitName1, setSplitName1] = useState("");
  const [splitName2, setSplitName2] = useState("");
  const [splitName3, setSplitName3] = useState("");
  const [splitName4, setSplitName4] = useState("");

  const substring = (string, index, returnFirstPart) => {
    if(returnFirstPart) return string.substring(0, index);
    else return string.substring(index, string.length);
  };

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1)
  };

  const splitName = useCallback((name, returnFirstPart) => {
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
  },[]);

  const switchNames = () => {
    const currentName1 = name1;
    const currentName2 = name2;
    setName1(currentName2);
    setName2(currentName1);
  };

  const combination1 = capitalize(splitName1) + splitName2;
  const combination2 = capitalize(splitName3) + splitName4;

  useEffect(() => {
    setSplitName1(splitName(name1, true));
    setSplitName2(splitName(name2, false));
    setSplitName3(splitName(name2, true));
    setSplitName4(splitName(name1, false));
  }, [name1, name2, splitName]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          Last Name<br/>Combinator<br/>3000
        </div>
        <div className="inputs">
          <div>
            <input type="text" value={name1} onChange={e => setName1(e.target.value)} data-testid="name1" placeholder="last name #1"/>
            <input type="text" value={name2} onChange={e => setName2(e.target.value)} data-testid="name2" placeholder="last name #2" />
          </div>
          {/*<div>
            <i className="fas fa-exchange-alt" onClick={switchNames}></i>
          </div>*/}
        </div>
        <div className="combination" data-testid="combination1">{combination1}</div>
        <div className="combination" data-testid="combination2">{combination2}</div>
        <div className="footer">Original idea by Tiina Siik<br/>Implemented by Vesa Kilpiäinen</div>
      </header>
    </div>
  );
}

export default App;
