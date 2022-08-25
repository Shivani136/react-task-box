import React from "react";
import { useState } from 'react';
import line from '../img/line.png';

function Select() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    //setIsActive(current => !current);

    // 👇️ or set to true
    setIsActive(true);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: isActive ? `url(${line})` : '',
          color: isActive ? 'white' : '',
        }}
        onClick={handleClick}
      >
        Hello world
      </div>
    </div>
  );
}

export default Select;

// const problem = document.querySelector("#myBtn");
    // const problem1 = document.querySelector("#myBtn");

    // if (problem) {
    //     problem.addEventListener('keypress', (key) => {
    //         if (key.key === 'click') {
    //             let calculate = problem.value * problem1.value;
    //             //  problem.value = eval(problem.value);
    //         }
    //         // console.log(calculate,">>>>>>>>>>>>>")
    //     })
    // }
