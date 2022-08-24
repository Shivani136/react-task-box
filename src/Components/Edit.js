import React from "react";
import {useState} from 'react';


 function Edit() {
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
          backgroundColor: isActive ? 'red' : '',
          color: isActive ? 'white' : '',
        }}
        onClick={handleClick}
      >
        this is edit
      </div>
    </div>
  );
}

export default Edit;