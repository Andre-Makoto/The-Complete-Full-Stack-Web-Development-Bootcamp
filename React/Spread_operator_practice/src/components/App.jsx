import React from "react";
import { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([])

  function handleChange(event){
    const newValue = event.target.value
    setInputText(newValue)
  }

  function addItem(){
    setItems(prevValue => {
      console.log(prevValue)
      return[
        ...prevValue, inputText
      ]
    })
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange}></input>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => {
            return(
            <li>{item}</li>
          )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
