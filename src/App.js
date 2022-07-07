import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import randomNameGenerator from "korean-random-names-generator";
function App() {
  const [randomName, setrandomName] = useState(randomNameGenerator());

  const changeName = () => {
    setrandomName(randomNameGenerator());
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{randomName}</h1>
        <button onClick={changeName} className="button">
           이름 바꾸기
        </button>
        <a
          className="App-link"
          href="https://www.npmjs.com/package/korean-random-names-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          사용된 이름 생성기 npm 패키지 링크
        </a>
      </header>
    </div>
  );
}

export default App;
