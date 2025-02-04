import React from "react";
import './UserGreetings.css'
import protoType from "prop-types"

const UserGreetings = ({ isLoggedIn = false, userName = "Guest" }) => {
  return (
    <>
      {isLoggedIn ? (
        <h2 className='welcome-message'>Welcome : {userName}</h2>
      ) : (
        <h2 className="login-prompt"> You need to login: {userName} </h2>
      )}
    </>
  );
};


UserGreetings.protoType = {
    isLoggedIn: protoType.bool,
    userName: protoType.string
}

export default UserGreetings;
