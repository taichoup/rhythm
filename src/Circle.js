import React from "react";

export function Circle(props) {
  return (
    <div className='wrapper'>
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
      <div className={`circle ${props.spin ? "circle-rotate" : ""}`}></div>
      <span class='bodypart-label'>{props.label}</span>
    </div>
  );
}
