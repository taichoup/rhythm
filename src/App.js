import React, { useState , useEffect } from 'react';
import { Circle } from './Circle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const division = 3;

// c'est décalé! il faut décaler de trois index vers la gauche
const bembe = [
  // left foot
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  // left hand
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
  // right hand
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  // right foot
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
].map(r => r.splice(division).concat(r));


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

  // METRONOME (not working really well... first blip is too long)
  useEffect(() => {
    const blipper = document.getElementById("blip");
    function showBlip(elt) {
      elt.classList.add("blipping");
      setTimeout(() => elt.classList.remove("blipping"), 100);
    }
    if (isRunning) {
      let timer = setInterval(() => {
        showBlip(blipper);
      }, 60 / bpm * 1000);  
      return () => clearInterval(timer);
    }
  });
  
  return (
    <div className="App">

      <div id="bpm-wrapper">
        <input type="range" id="bpm" name="bpm" min="60" max="240" step="1" onChange={handleUserInput} onMouseUp={updateSpeed}/>
        <span className="bpm">{`${bpm} BPM`}</span>
      </div>

      <div id="circles-wrapper">
        <Circle spin={isRunning} label="Left foot" signature={division} rhythm={bembe[0]}/>
        <Circle spin={isRunning} label="Left hand" signature={division} rhythm={bembe[1]}/>
        <Circle spin={isRunning} label="Right hand" signature={division} rhythm={bembe[2]}/>
        <Circle spin={isRunning} label="Right foot" signature={division} rhythm={bembe[3]}/>
      </div>

      <div id="controls-wrapper">
        <button 
          id="btn"
          className={`btn ${isRunning ? "btn-warning" : "btn-primary"}`}
          onClick={() => toggleRotate()}
        >{isRunning ? "Stop" : "Start!"}</button>
        <div id="blip"></div>
      </div>
    </div> 
  );
}

export default App;
