import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  color: #fafd7cff;
  font-size: 30px;
`;
const Button = styled.button`
  border-radius: 20px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin-left: 16%;
  background-color: #fb6467ff;
`;
const Img2 = styled.img`
  width: 20%;
  margin-left: 15%;
`;

export default function WelcomePage() {
  return (
    <Div className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>

        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Button>
          <Link className="links" to={"/characters"}>
            See Characters
          </Link>
        </Button>

        <Img2
          src="https://vignette.wikia.nocookie.net/rickandmorty/images/4/41/Morty_Smith.jpg/revision/latest?cb=20170217193441"
          alt="rick"
        />
      </header>
    </Div>
  );
}
