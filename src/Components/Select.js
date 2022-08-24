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