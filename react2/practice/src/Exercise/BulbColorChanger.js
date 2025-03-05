import React, { useState } from "react";
import "./BulbColorChanger.css";


export default function BulbColorChanger() {
  const [color, setColor] = useState("off")

  const colorChange = {
   
    on: "./bulb-on.png",
    off: "./bulb-off.png",
  };
  const onchangeColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <div  className="div">

      <img src={colorChange[color]} />

      <div className="button">
        <div >
          <button onClick={() => setColor("on")}>On</button>
        </div>
        <div className="div">
          <  button onClick={() => setColor("off")}>Off</button>
        </div>
      </div>


    </div>
  )
}




