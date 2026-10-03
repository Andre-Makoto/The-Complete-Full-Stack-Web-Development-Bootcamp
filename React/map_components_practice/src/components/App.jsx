import React from "react";
import Card from "./Card"
import emojipedia from "../emojipedia"
import CreateCard from "./CreateCard";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(CreateCard)}
      </dl>
    </div>
  );
}

export default App;
