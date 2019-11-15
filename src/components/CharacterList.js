import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  font-size: 20px;
  background-color: #fb6467ff;
`;
const Title = styled.h1`
  color: #fafd7cff;
  font-size: 30px;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchData, updateData] = useState([]);

  const search = char => {
    updateData(char);
  };
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
        updateData(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="character-list">
      <Title>Character List!</Title>
      <Button>
        <Link className="links" to="/">
          Home
        </Link>
      </Button>

      <SearchForm search={search} characters={characters} />

      {searchData.map(char => (
        <CharacterCard key={char.id} item={char} />
      ))}
    </section>
  );
}
