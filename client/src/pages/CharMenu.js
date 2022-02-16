import React from 'react'
import { useState,useEffect } from "react";
import { Button } from "../styles";

function CharMenu() {
  const [charHolder,setCharHolder]=useState([])

  // useEffect(() => {
  //   fetch("grab all user characters /characters")
  //   .then(r => r.json()).then(charList => )
  // },[])

  // useEffect fetch to grab all currently logged in users characters
  //set to state
  //map through charList and display, <Character props  /> 

  //dagger throwing animation, CSS bigger on mouseover of Character card








  return (
    <>
    <div><Button > New Character </Button> </div>
    </>
  )
}

export default CharMenu

