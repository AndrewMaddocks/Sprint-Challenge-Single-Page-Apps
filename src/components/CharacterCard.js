import React from "react";

export default function CharacterCard(props) {
  return (
    <>
      <div>
        <div>
          <h1>{props.item.name}</h1>
          <h3>Species: {props.item.species}</h3>
          <h3>Gender: {props.item.gender}</h3>
          <h3>Status: {props.item.status}</h3>
        </div>
      </div>
    </>
  );
}
