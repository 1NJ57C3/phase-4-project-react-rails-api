import React from "react";
import { useState, useEffect } from "react";
import { Button, ButtonCharMenuLeft, BoxCharMenu, Box } from "../styles";

import { Link, useNavigate } from "react-router-dom";
// import uuid from "react-uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function CharMenu({ setCharacterScreen }) {
  const [charHolder, setCharHolder] = useState([]);

  let navigate = useNavigate();

  function handleDelete(char) {
    setCharHolder(charHolder.filter((c) => c.id !== char.id));
  }

  function clickDelete(char) {
    fetch(`/characters/${char.id}`, {
      method: "DELETE",
    }).then(() => handleDelete(char));
  }

  function clickSelect(char) {
    navigate(`/characters/${char.id}`);
  }

  useEffect(() => {
    fetch("http://localhost:4000/characters")
      .then((r) => r.json())
      .then((charList) => setCharHolder(charList));
  }, []);

  // const displayCharList = charHolder.map((char, index) => {
  //   return (
  //     <CharCard
  //       key={uuid()}
  //       char={char}
  //       handleDelete={handleDelete}
  //       setCharacterScreen={setCharacterScreen}
  //     />
  //   );
  // });

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(charHolder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCharHolder(items);
  }

  return (
    <div>
      <div>
        <Link to={"/char_create"}>
          <Button primary> New Character </Button>
        </Link>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {charHolder.map((char, index) => {
                return (
                  <Draggable
                    key={char.id}
                    draggableId={char.char_name}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        className="grow"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <BoxCharMenu>
                          <div>
                            <ButtonCharMenuLeft
                              onClick={() => {
                                clickSelect(char);
                              }}
                            >
                              Choose
                            </ButtonCharMenuLeft>
                            <BoxCharMenu
                              onClick={() => {
                                clickSelect(char);
                              }}
                            >
                              {char.char_name} the {char.job}
                            </BoxCharMenu>
                            <ButtonCharMenuLeft
                              onClick={() => {
                                clickDelete(char);
                              }}
                            >
                              {" "}
                              Delete
                            </ButtonCharMenuLeft>
                          </div>
                        </BoxCharMenu>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default CharMenu;
