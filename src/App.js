import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [bpm, setBpm] = useState(60);

  const handleUserInput = (event) => {
    setBpm(event.target.value);
  }

  const updateSpeed = () => {
    document.getElementById("circle").style["animation-duration"] = `${60 / bpm * 4}s`;
  }

  // todo: rewrite this in a reacty way
  function toggleRotate(speed) {
    let c = document.getElementById("circle");
    let b = document.getElementById("btn");
    c.classList.length === 0 ? c.classList.add("circle-rotate") : c.classList = "";
    b.innerText === "Start!" ? b.innerText = "Stop" : b.innerText = "Start!";
    console.log(c.style.animationDuration);
  }

  return (
    <div className="App">
      <div id="bpm-wrapper">
        <input type="range" id="bpm" name="bpm" min="60" max="240" step="1" onChange={handleUserInput} onMouseUp={updateSpeed}/>
        <span class="bpm">{`${bpm} BPM`}</span>
      </div>
    <div id="wrapper">
          <div id="path"></div>
          <div id="circle"></div>
        </div>
        <button id="btn" class="btn btn-primary" onClick={() => toggleRotate()}>Start!</button>
    </div>
  );
}

export default App;
