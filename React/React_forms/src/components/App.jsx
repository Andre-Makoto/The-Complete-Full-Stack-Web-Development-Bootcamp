import React from "react";
import { useState } from "react";



function App() {

  const [name, setName] = useState("")
  const [click, setClick] = useState("")
  function onChange(event){
    setName(event.target.value)
    console.log(event.target.value)
  } 

  function onClick(){
    setClick(name);
  }

  return(
    <div className="container">
      <h1>Hello {click} </h1>
      <input 
      type="text" 
      placeholder="What's your name?" 
      onChange={onChange}
      />
      <button onClick={onClick}> Submit</button>
    </div>
  );
}

export default App;
