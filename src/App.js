import React, { useState } from 'react';
import { Circle } from './Circle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [bpm, setBpm] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  const handleUserInput = (event) => {
    setBpm(event.target.value);
  }

  const updateSpeed = () => {
    const circles = document.getElementsByClassName("circle");
    [...circles].forEach(elt => elt.style["animation-duration"] = `${60 / bpm * 4}s`)
  }

  function toggleRotate() {
    setIsRunning(!isRunning);
  }
  
  return (
    <div className="App">
      <div id="bpm-wrapper">
        <input type="range" id="bpm" name="bpm" min="60" max="240" step="1" onChange={handleUserInput} onMouseUp={updateSpeed}/>
        <span className="bpm">{`${bpm} BPM`}</span>
      </div>
      <Circle spin={isRunning}/>
      <Circle spin={isRunning}/>
      <Circle spin={isRunning}/>
      <Circle spin={isRunning}/>
      <Circle spin={isRunning}/>
      <button 
        id="btn"
        className={`btn ${isRunning ? "btn-warning" : "btn-primary"}`}
        onClick={() => toggleRotate()}
      >{isRunning ? "Stop" : "Start!"}</button>


    </div> 
  );
}

export default App;
