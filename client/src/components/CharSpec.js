import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      CharSpec
      <h1>{characterInfo.char_name} the {characterInfo.job}</h1>
    </div>
  );
}

export default CharSpec;
