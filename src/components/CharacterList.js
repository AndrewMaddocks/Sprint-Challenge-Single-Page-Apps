import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filteredData, updateData] = useState([]);

  const search = charArr => {
    updateData(charArr);
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
      <Link to="/">Home</Link>
      <SearchForm search={search} characters={characters} />
      <h2>Character List!</h2>
      {filteredData.map(char => (
        <CharacterCard key={char.id} item={char} />
      ))}
    </section>
  );
}
