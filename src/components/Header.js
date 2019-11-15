import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: #fafd7cff;
`;
export default function Header() {
  return (
    <header className="ui centered">
      <H1 className="ui center">Rick &amp; Morty Fan Page</H1>
    </header>
  );
}
