import React from "react";
import styles from "./Button.module.css";

// click event = An interaction when a user clicks on a specific element
//              We can respond to clicks by passing
//              a callback to the onClick event handler

function Button() {
  const inLineStyles = {
    backgroundColor: "hsl(250, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  const handleClick = (event) => {
    event.target.textContent = "OUCH ! 😥"
  };

  const handleClick2 = (name = "user") => {
    console.log(`OUCH! ${name} stop clicking me!`);
  };

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        First button
      </button>
      <button className={styles.button} onClick={() => handleClick2("Bro")}>
        Click me!
      </button>
      <button style={inLineStyles}> InLine </button>
    </>
  );
}

export default Button;
