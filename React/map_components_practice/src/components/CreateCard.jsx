import React from "react";
import Card from "./Card";

function CreateCard(emojipedia){
    return(
        < Card 
        key = {emojipedia.id}
        emoji = {emojipedia.emoji}
        name = {emojipedia.name}
        meaning = {emojipedia.meaning}
        />
    )
}

export default CreateCard;