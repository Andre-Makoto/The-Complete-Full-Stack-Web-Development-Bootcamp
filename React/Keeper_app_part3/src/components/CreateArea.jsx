import React from "react";
import { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleNote(event){
    const {name, value} = event.target

    setNote((prevValue) => {
      return{
        ...prevValue,
        [name]: value
      }
    })
  }

  function submitNote(event){
    props.addNote(note);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleNote} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleNote} value={note.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
