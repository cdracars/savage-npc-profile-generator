import { useEffect, useState } from "react";
import usersData from "../data/users.ts";
import hindrancesData from "../data/hinderances.ts";
import edgesData from "../data/edges.ts";
import mottosData from "../data/mottos.ts";
import { Character } from "../components/CharacterCard.tsx";

/**
 * Custom hook to fetch and parse data from local JSON files.
 *
 * @returns {Object} The character data.
 */
const useCharacterData = () => {
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    // Destructure files array.
    const randomUser = usersData[Math.floor(Math.random() * usersData.length)];
    const randomHindrance =
      hindrancesData[Math.floor(Math.random() * hindrancesData.length)];
    const randomEdge = edgesData[Math.floor(Math.random() * edgesData.length)];
    const randomMotto =
      mottosData[Math.floor(Math.random() * mottosData.length)].motto;

    // Build the character object.
    const newCharacter = {
      name: randomUser.name,
      gender: randomUser.gender,
      hindrances: [randomHindrance],
      edges: [randomEdge],
      motto: randomMotto,
    };

    setCharacter(newCharacter);
  }, []);

  return character;
};

export default useCharacterData;
