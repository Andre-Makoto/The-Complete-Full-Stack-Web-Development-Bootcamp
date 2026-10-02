import React from "react";
import contacts from "../contacts"
import Card from "./card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card nome = {contacts[0].name} imagem = {contacts[0].imgURL} tel = {contacts[0].phone} email = {contacts[0].email}/>
      <Card nome = {contacts[1].name} imagem = {contacts[1].imgURL} tel = {contacts[1].phone} email = {contacts[1].email}/>
      <Card nome = {contacts[2].name} imagem = {contacts[2].imgURL} tel = {contacts[2].phone} email = {contacts[2].email}/>
    </div>
  );
}

export default App;
