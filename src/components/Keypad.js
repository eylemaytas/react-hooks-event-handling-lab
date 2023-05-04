// Code Keypad Component Here
import react from "react";

function Keypad() {
  function onChangee() {
    console.log("Entering password...");
  }

  return <input type="password" onChange={onChangee} />;
}

export default Keypad;
