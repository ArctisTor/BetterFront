import React from "react";
import logo from "../../assets/logo.png";

const Picture = () => {

 const handleClick = (event) => {
    event.target.style.display = 'none';
    console.log('OUCH!')
 }

  return (
    <>
      <img src={logo} onClick={handleClick}/>
    </>
  );
};

export default Picture;
