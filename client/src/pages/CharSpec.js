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
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);  

  //Dark Knight:
  const dk0="https://img.itch.zone/aW1hZ2UvOTIzMjcxLzUyNzk2NzkuZ2lm/original/vg7s0I.gif"
  const dk1="https://img.itch.zone/aW1hZ2UvOTIzMjcxLzUyNzk2ODIuZ2lm/original/dZ3Eds.gif";
  const dk2="https://img.itch.zone/aW1hZ2UvOTIzMjcxLzUyNzk2ODEuZ2lm/original/fZZH6g.gif";
  const dk3="https://img.itch.zone/aW1hZ2UvOTIzMjcxLzUyNzk2ODAuZ2lm/original/7s%2BBV9.gif";
  const dk4="https://img.itch.zone/aW1hZ2UvOTIzMjcxLzUyNzk2NzcuZ2lm/original/qobOYO.gif";
  const dk5="https://img.itch.zone/aW1hZ2UvOTIzMjcxLzUyNzk2NzguZ2lm/original/nQPvxd.gif";

  //Dark Wizard:
  const wiz0="https://img.itch.zone/aW1hZ2UvNzMyODA0LzQxMzUxODIuZ2lm/original/tc%2FXFz.gif"
  const wiz1="https://img.itch.zone/aW1hZ2UvNzMyODA0LzQxMzUxODQuZ2lm/original/tb5mDO.gif"
  const wiz2="https://img.itch.zone/aW1hZ2UvNzMyODA0LzQxMzUxODYuZ2lm/original/G%2Fi0ln.gif"
  const wiz3="https://img.itch.zone/aW1hZ2UvNzMyODA0LzQxMzUxODMuZ2lm/original/tOUiJo.gif"
  const wiz4="https://img.itch.zone/aW1hZ2UvNzMyODA0LzQxMzUxODEuZ2lm/original/bDfFgM.gif"
  const wiz5="https://img.itch.zone/aW1hZ2UvNzMyODA0LzQxMzUxODUuZ2lm/original/YfhlgU.gif"

  //Warrior:
  const war0="https://img.itch.zone/aW1hZ2UvOTEyNjM2LzUxODA1MTAuZ2lm/original/9yC%2Fni.gif"
  const war1="https://img.itch.zone/aW1hZ2UvOTEyNjM2LzUxODA1MTIuZ2lm/original/XA0CiO.gif"
  const war2="https://img.itch.zone/aW1hZ2UvOTEyNjM2LzUxODA1MTEuZ2lm/original/dT4CMz.gif"
  const war3="https://img.itch.zone/aW1hZ2UvOTEyNjM2LzUxODA1MDguZ2lm/original/AYXOKe.gif"
  const war4="https://img.itch.zone/aW1hZ2UvOTEyNjM2LzUxODA1MDkuZ2lm/original/f0ujCr.gif"

  const dkImages = [dk0,dk1,dk2,dk3,dk4,dk5]
  const wizImages= [wiz0,wiz1,wiz2,wiz3,wiz4,wiz5]
  const warImages=[war0,war1,war2,war3,war4]
  const allImages =[dkImages,wizImages,warImages]
  let holderArray =[]

  
 

  //looping through our images array to create img elements
  function imageCards() {
    if (characterInfo.job === "warrior") {      
      return warImages.map((image) => (<img className="image-card invisible" onClick={() => showImage(image)} src={image} alt="Images" />))
    } else if (characterInfo.job === "wizard") {      
      return wizImages.map((image) => (<img className="image-card invisible" onClick={() => showImage(image)} src={image} alt="Images" />))
    } else if (characterInfo.job === "thief") {      
      return dkImages.map((image) => (<img className="image-card invisible" onClick={() => showImage(image)} src={image} alt="Images" />))
    }
  }
  // const imageCards = dkImages.map((image) => (
  //   <img className="image-card invisible" onClick={() => showImage(image)} src={image} alt="Images" />
  // ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

//show next image in lightbox
const showNext = (e) => {
  e.stopPropagation();
  let currentIndex = holderArray.indexOf(imageToShow);
  if (currentIndex >= holderArray.length - 1) {
    setLightBoxDisplay(false);
  } else {
    let nextImage = holderArray[currentIndex + 1];
    setImageToShow(nextImage);
  }
};
//show previous image in lightbox
const showPrev = (e) => {
  e.stopPropagation();
  let currentIndex = holderArray.indexOf(imageToShow);
  if (currentIndex <= 0) {
    setLightBoxDisplay(false);
  } else {
    let nextImage = holderArray[currentIndex - 1];
    setImageToShow(nextImage);
  }
};


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
      holderArray = allImages[2]
      return "https://img.itch.zone/aW1hZ2UvOTEyNjM2LzUxODA1MTAuZ2lm/original/9yC%2Fni.gif"; //This is Warrior Image
    } else if (characterInfo.job === "wizard") {
      holderArray = allImages[1]
      return "https://img.itch.zone/aW1hZ2UvNzMyODA0LzQxMzUxODIuZ2lm/original/tc%2FXFz.gif"; //This is Wizard Image
    } else
      holderArray = allImages[0]
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

<div>{imageCards}</div>
      
      {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow}></img>
          <button onClick={showNext}>⭢</button>
        </div>
       : ""
      }
  
  




      <CharacterHeader>
        {characterInfo.char_name} the {characterInfo.job}
      </CharacterHeader>
      <BigBox >
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
          className="charImage grow2"
          src={whichImage()}
          alt="First"
          onClick={() => showImage(whichImage())}
          
        ></ImageJob>
      </BigBox>
      <BigBox2 className="Gear">
        <div className="Weapon">
          <Box3 >
            {!!Object.keys(characterInfo).length
              ? renderGearSpecs("weapon")
              : "Loading... "}
          </Box3>
        </div>
        <div className="Armor">
          <Box3 >
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


