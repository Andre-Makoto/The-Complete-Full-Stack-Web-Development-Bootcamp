import React from "react";
import { useState } from "react";

function App() {

  setInterval(showTime,1000)
  const now = new Date().toLocaleTimeString();
  let [time, setTime] = useState(now)

  function showTime(){
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
