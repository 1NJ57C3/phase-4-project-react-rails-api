import React from "react";
import { Button, Box } from "../styles";
import { Link, useNavigate } from "react-router-dom";

function CharCard({ char, handleDelete, setCharacterScreen }) {
  let navigate = useNavigate();

  function clickDelete() {
    fetch(`/characters/${char.id}`, {
      method: "DELETE",
    }).then(() => handleDelete(char));
  }
  function clickSelect() {
    navigate(`/characters/${char.id}`);
  }

  return (
    <div>
      <Box>
        <Button onClick={clickDelete}>Delete</Button>
        {char.char_name} the {char.job}
        <Button onClick={clickSelect}> Choose</Button>
      </Box>
    </div>
  );
}

export default CharCard;
