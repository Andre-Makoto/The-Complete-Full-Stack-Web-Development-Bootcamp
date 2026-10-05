import React from "react";
import Input from "./Input"
function Login(){
    return(
        <>
            <Input 
            type = "text"
            placeholder = "Username" 
            />
            <Input 
            type = "password"
            placeholder = "Password" 
            />
        </>
    )
}

export default Login;