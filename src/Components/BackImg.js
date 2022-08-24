import React from "react";
// import background from "./img/placeholder.png";
import line from '../img/line.png';
 
function BackImg() {
  return (
    <div style={{ backgroundImage: `url(${line})` }}>
      Hello Worldtyhhy
      { console.log("this is background image ")}
    </div>
  );
}
 
export default BackImg;


