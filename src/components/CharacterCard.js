import React from "react";
import styled from "styled-components";

const Div1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #b7e4f9ff;
  background-color: #4d9041;
  width: 20%;
  margin-bottom: 2%;
`;
const H1 = styled.h1`
  color: #e762d7ff;
`;

export default function CharacterCard(props) {
  return (
    <>
      <Div1>
        <div>
          <H1>{props.item.name}</H1>
          <h3>Species: {props.item.species}</h3>
          <h3>Gender: {props.item.gender}</h3>
          <h3>Status: {props.item.status}</h3>
        </div>
      </Div1>
    </>
  );
}
