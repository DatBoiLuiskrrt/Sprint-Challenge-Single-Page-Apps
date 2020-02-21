import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);
// console.log(response.results);
  useEffect(() => {
    axios
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log("this is my axios response", response);
      setChar(response.data.results);
     
    })
    .catch(error => {
      console.log("the data was not returned, sorry", error);
    });
  }, []);

  return (
    <section className="character-list">
      {char.map(data => {
        return <CharacterCard key={data.id} data={data}/>
      })}
    </section>
  );
}
