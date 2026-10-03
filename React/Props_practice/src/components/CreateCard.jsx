import React from "react";
import Card from "./Card";

function CreateCard (contact){
    return(
      < Card 
      key = {contact.id}
      nome = {contact.name}
      imagem = {contact.imgURL}
      tel = {contact.phone}
      email = {contact.email}
    />
    )
  }

  export default CreateCard;