import React from "react";
import { useState, useEffect } from "react";
import { Button } from "../styles";
import CharCard from "../components/CharCard";
import { Link } from "react-router-dom";
import uuid from 'react-uuid'


function CharMenu({setCharacterScreen}) {
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
      <CharCard key={uuid()} char={char} handleDelete={handleDelete} setCharacterScreen={setCharacterScreen} />
    );
  });



  //dagger throwing animation, CSS bigger on mouseover of Character card
  //need a link to connect to Alayra's Attributes page

  return (
    <>
      <div>
        <Link to={"/char_create"} > 
        <Button primary> New Character </Button>{" "}
        </Link>
        <div>{displayCharList}</div>

      </div>
    </>
  );
}

export default CharMenu;
