import React from "react";
import Login from "./Login";
import Register from "./Register";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      {props.userIsRegistered ? <Login /> : <Register />}
      {props.userIsRegistered ? <Button text = "Login" /> : <Button text = "Register"/>}
    </form>
  );
}

export default Form;
