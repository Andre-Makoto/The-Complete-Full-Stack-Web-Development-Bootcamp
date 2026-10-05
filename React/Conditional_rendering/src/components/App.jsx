import React from "react";
import Login from "./Login";

let isLogged = true;

function App() {
  return (
    <div className="container">
      {isLogged ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
