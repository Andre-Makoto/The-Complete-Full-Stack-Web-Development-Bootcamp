import React from "react";
import Login from "./Login";
import Register from "./Register";
import Button from "./Button";

function Form() {
  return (
    <form className="form">
      <Login />
      <Register />
      <Button />
    </form>
  );
}

export default Form;
