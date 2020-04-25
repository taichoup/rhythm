import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [bpm, setBpm] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  const handleUserInput = (event) => {
    setBpm(event.target.value);
  }

  const updateSpeed = () => {
    document.getElementById("circle").style["animation-duration"] = `${60 / bpm * 4}s`;
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
      <div id="wrapper">
        {/* <div id="path"></div> */}
        <div className='circle-container'>
          <span className='deg0'><div className="marker" id="runner"></div></span>
          <span className='deg22-5'><div className="marker"></div></span>
          <span className='deg45'><div className="marker"></div></span>
          <span className='deg67-5'><div className="marker"></div></span>
          <span className='deg90'><div className="marker"></div></span>
          <span className='deg110-5'><div className="marker"></div></span>
          <span className='deg135'><div className="marker"></div></span>
          <span className='deg157-5'><div className="marker"></div></span>
          <span className='deg180'><div className="marker"></div></span>
          <span className='deg202-5'><div className="marker"></div></span>
          <span className='deg225'><div className="marker"></div></span>
          <span className='deg247-5'><div className="marker"></div></span>
          <span className='deg270'><div className="marker"></div></span>
          <span className='deg292-5'><div className="marker"></div></span>
          <span className='deg315'><div className="marker"></div></span>
          <span className='deg337-5'><div className="marker"></div></span>
        </div>
        <div id="circle" className={isRunning ? "circle-rotate" : ""}></div>
      </div>
      <button 
        id="btn"
        className={`btn ${isRunning ? "btn-warning" : "btn-primary"}`}
        onClick={() => toggleRotate()}
      >{isRunning ? "Stop" : "Start!"}</button>


    </div>
  );
}

export default App;
