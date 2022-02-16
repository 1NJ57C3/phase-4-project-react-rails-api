import React from "react";
import { Button } from "../styles";

function CharCard({ char, handleDelete }) {
  function clickHandler() {
    fetch(`http://localhost:4000/characters/${char.id}`,{
      method: "DELETE",
    })
    //   .then((r) => r.json())
      .then(() => handleDelete(char));
  }

  return (
    <div>
      <Button onClick={clickHandler}>Delete</Button>
      {char.char_name} the {char.job}
    </div>
  );
}

export default CharCard;
