import React from "react";

// props are spin, label, signature, rhythm
export function Circle(props) {

  const twoByFour = [0, 1, 2, 3, 4, 5, 6, 7]
    .map(item => `deg${item * 45}`); 

  const threeByFour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    .map(item => `deg${item * 30}`);

  const fourByFour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    .map(item => `deg${item * 22.5}`)
    .map(item => item.replace(/\./gi, '-'));

  const signatures = {
    "2": twoByFour,
    "3": threeByFour,
    "4": fourByFour
  }

  const signature = props.signature;
  const rhythm = props.rhythm;

  return (
    <div className='wrapper'>
      <div className='circle-container'>
        {signatures[props.signature]
          .map(
            i => <span className={`${i}${rhythm[signatures[signature].indexOf(i)] ? " hit":""}`}><div className="marker"></div></span>
          )
          // .map(
          //   i => props.rhythm[signatures[props.signature].indexOf(i)] ?
          // )
        };
      </div>
      <div className={`circle ${props.spin ? "circle-rotate" : ""}`}></div>
      <span className='bodypart-label'>{props.label}</span>
    </div>
  );
}
