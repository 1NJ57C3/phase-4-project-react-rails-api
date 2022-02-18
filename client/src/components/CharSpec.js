import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BigBox2,
  BigBox,
  Box2,
  Box3,
  Button,
  ImageJob,
  CharacterHeader,
} from "../styles";

function CharSpec() {
  let params = useParams();

  const [characterInfo, setCharacterInfo] = useState({});

  useEffect(() => {
    fetch(`/characters/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setCharacterInfo(data);
      });
  }, [params.id]);

  function whichImage() {
    if (characterInfo.job === "warrior") {
      return "https://img.itch.zone/aW1hZ2UvOTEyNjM2LzUxODA1MTAuZ2lm/original/9yC%2Fni.gif"; //This is Warrior Image
    } else if (characterInfo.job === "wizard") {
      return "https://img.itch.zone/aW1hZ2UvNzMyODA0LzQxMzUxODIuZ2lm/original/tc%2FXFz.gif"; //This is Wizard Image
    } else
      return "https://img.itch.zone/aW1hZ2UvOTIzMjcxLzUyNzk2NzkuZ2lm/original/vg7s0I.gif"; //This is Thief Image
  }

  function renderGearSpecs(type) {
    const gear = characterInfo.equipment.filter((e) => {
      return e.item_type.includes(type);
    });
    return (
      <>
        Equipped {type}
        <br />
        Item Name: {gear[0].item_name}
        <br />
        Modifier(s): {gear[0].stat} {gear[0].is_positive ? "+" : "-"}
        {gear[0].mod}
      </>
    );
  }
  
  function rerollGear() {
    fetch(`/characters/${params.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type":"application/json"
      }, body: JSON.stringify({characterInfo})
    })
    .then(r => r.json())
    .then(d => {
      setCharacterInfo(d)
    })
  }

  const renderGearMod = (type) => characterInfo.equipment.filter(e => e.stat === type)[0].mod;

  return (
    <div>
      <CharacterHeader>
        {characterInfo.char_name} the {characterInfo.job}
      </CharacterHeader>
      <BigBox>
        <Box2>
          <p>Class: {characterInfo.job}</p>
          {!!Object.keys(characterInfo).length ? (
            <p>
              Attack: {characterInfo.u_atk} ({characterInfo.atk} + {renderGearMod('atk')})
            </p>
          ) : (
            "Loading... "
          )}
          <p>Accuracy: {characterInfo.acc}</p>
          <p>Health: {characterInfo.vit}</p>
          <p>Luck: {characterInfo.luk}</p>
          {!!Object.keys(characterInfo).length ? (
            <p>
              Armor: {characterInfo.u_arm} (+ {renderGearMod('arm')})
            </p>
          ) : (
            "Loading..."
          )}
        </Box2>
        <ImageJob
          className="charImage"
          src={whichImage()}
          alt="First"
        ></ImageJob>
      </BigBox>
      <BigBox2 className="Gear">
        <div className="Weapon">
          <Box3>
            {!!Object.keys(characterInfo).length
              ? renderGearSpecs("weapon")
              : "Loading... "}
          </Box3>
        </div>
        <div className="Armor">
          <Box3>
            {!!Object.keys(characterInfo).length
              ? renderGearSpecs("armor")
              : "Loading... "}
          </Box3>
        </div>
      </BigBox2>
      <div>
        <Button onClick={rerollGear}>Randomize Gear</Button>
      </div>
    </div>
  );
}

export default CharSpec;
