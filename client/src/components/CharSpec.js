import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BigBox2,
  BigBox,
  Box2,
  Box3,
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

  console.log(characterInfo);

  function whichImage() {
    if (characterInfo.job === "warrior") {
      return "https://opengameart.org/sites/default/files/warrior_f_attack.gif"; //This is Warrior Image
    } else if (characterInfo.job === "wizard") {
      return "https://img.itch.zone/aW1hZ2UvNzMyODA0LzQxMzUxODIuZ2lm/original/tc%2FXFz.gif"; //This is Wizard Image
    } else
      return "https://opengameart.org/sites/default/files/gif_arrow_shot.gif"; //This is Thief Image
  }

  function renderGear(type) {
    const gear = characterInfo.equipment.filter((e) => {
      return e.item_type.includes(type);
    });
    console.log(gear);
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
              Attack: {characterInfo.u_atk} ({characterInfo.atk} +{" "}
              {characterInfo.equipment[0].mod}){" "}
            </p>
          ) : (
            "Loading... "
          )}
          <p>Accuracy: {characterInfo.acc}</p>
          <p>Health: {characterInfo.vit}</p>
          <p>Luck: {characterInfo.luk}</p>
          {!!Object.keys(characterInfo).length ? (
            <p>
              Armor: {characterInfo.u_arm} (+{characterInfo.equipment[1].mod}){" "}
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
              ? renderGear("weapon")
              : "Loading... "}
          </Box3>
        </div>
        <div className="Armor">
          <Box3>
            {!!Object.keys(characterInfo).length
              ? renderGear("armor")
              : "Loading... "}
          </Box3>
        </div>
      </BigBox2>
    </div>
  );
}

export default CharSpec;
