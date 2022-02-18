import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BigBox2, BigBox, Box2, Box3, ButtonNewCharacter, ImageJob, CharacterHeader, } from "../styles";

function CharSpec() {
  const [charInfo, setCharInfo] = useState({});
  const stateLoaded = !!Object.keys(charInfo).length;
  let params = useParams();
  
  useEffect(() => {
    fetch(`/characters/${params.id}`)
    .then((r) => r.json())
    .then((data) => {
      setCharInfo(data);
    });
  }, [params.id]);
  
  function onRerollGear() {
    fetch(`/characters/${params.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type":"application/json"
      }, body: JSON.stringify({charInfo})
    })
    .then(r => r.json())
    .then(d => {
      setCharInfo(d)
    })
  }
  
  function whichImage() {
    if (charInfo.job === "warrior") {
      return "https://img.itch.zone/aW1hZ2UvOTEyNjM2LzUxODA1MTAuZ2lm/original/9yC%2Fni.gif"; //This is Warrior Image
    } else if (charInfo.job === "wizard") {
      return "https://img.itch.zone/aW1hZ2UvNzMyODA0LzQxMzUxODIuZ2lm/original/tc%2FXFz.gif"; //This is Wizard Image
    } else if (charInfo.job === 'thief') {
      return "https://img.itch.zone/aW1hZ2UvOTIzMjcxLzUyNzk2NzkuZ2lm/original/vg7s0I.gif"; //This is Thief Image
    }
  }
  
  function renderGearSpecs(type) {
    const gear = charInfo.equipment.filter((e) => {
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
  
  const renderGearMod = (type) => charInfo.equipment.filter(e => e.stat === type)[0].mod;
  
  return (
    <div>
      <CharacterHeader>
        {charInfo.char_name} the {charInfo.job}
      </CharacterHeader>
      <BigBox>
        <Box2>
          <p>Class: {charInfo.job}</p>
          {stateLoaded ? ( <p>Attack: {charInfo.u_atk} ({charInfo.atk} + {renderGearMod('atk')})</p> ) : ( "Loading... " )}
          <p>Accuracy: {charInfo.acc}</p>
          <p>Health: {charInfo.vit}</p>
          <p>Luck: {charInfo.luk}</p>
          {stateLoaded ? ( <p>Armor: {charInfo.u_arm} (+ {renderGearMod('arm')})</p> ) : ( "Loading..." )}
        </Box2>
        <ImageJob className="charImage" src={whichImage()} alt="First" />
      </BigBox>
      <BigBox2 className="Gear">
        <div className="Weapon">
          <Box3>
            {stateLoaded ? renderGearSpecs("weapon") : "Loading... "}
          </Box3>
        </div>
        <div className="Armor">
          <Box3>
            {stateLoaded ? renderGearSpecs("armor") : "Loading... "}
          </Box3>
        </div>
      </BigBox2>
      <div className='cspec'>
        <ButtonNewCharacter onClick={onRerollGear}>Randomize Gear</ButtonNewCharacter>
      </div>
    </div>
  );
}

export default CharSpec;
