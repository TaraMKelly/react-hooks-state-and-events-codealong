import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleClick() {
    setIsOn(!isOn)
  }

  const color = isOn ? "red" : "blue"

  return <button style={{background : color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
} 

export default Toggle;
