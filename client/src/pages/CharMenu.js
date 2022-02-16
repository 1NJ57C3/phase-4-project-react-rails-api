import React from "react";
import { useState, useEffect } from "react";
import { Button } from "../styles";
import CharCard from "../components/CharCard";

function CharMenu() {
  const [charHolder, setCharHolder] = useState([]);

  function handleDelete(char) {
    setCharHolder(charHolder.filter((c) => c.id !== char.id));
  }

  useEffect(() => {
    fetch("http://localhost:4000/characters")
      .then((r) => r.json())
      .then((charList) => setCharHolder(charList));
  }, []);

  const displayCharList = charHolder.map((char) => {
    return (
      <CharCard key={char.char_name} char={char} handleDelete={handleDelete} />
    );
  });

  // useEffect fetch to grab all currently logged in users characters
  //set to state
  //map through charList and display, <Character props  />

  //dagger throwing animation, CSS bigger on mouseover of Character card

  return (
    <>
      <div>
        <Button primary> New Character </Button>{" "}
      </div>
    </>
  );
}

export default CharMenu;
