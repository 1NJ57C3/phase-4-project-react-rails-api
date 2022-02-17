import React from "react";
import { Button, Box } from "../styles";

function CharCard({ char, handleDelete }) {
  function clickHandler() {
    fetch(`/characters/${char.id}`,{
      method: "DELETE",
    })    
      .then(() => handleDelete(char));
  }
  return (
    
    <div>
         <Box>
      <Button onClick={clickHandler}>Delete</Button>
    {char.char_name} the {char.job} </Box> 
    </div>
  );
}

export default CharCard;
