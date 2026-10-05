import React from "react";
import Login from "./Login";
import Input from "./Input";
function Register(){
    return(
        <>
        <Login />
        <Input 
        type = "password"
        placeholder = "Confirm Password"
        />
        </>        
    )
}

export default Register;