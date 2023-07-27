import { useEffect, useState } from "react";

/**
 * Custom hook to fetch and parse data from local JSON files.
 *
 * @param {Array} files - The JSON files.
 * @returns {Object} The character data.
 */
const useCharacterData = (files) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Destructure files array.
    const [hindrancesData, edgesData, mottosData, usersData] = files;

    // Build the character object.
    const newCharacter = {
      name: usersData.name,
      gender: usersData.gender,
      hindrances: hindrancesData,
      edges: edgesData,
      motto: mottosData,
    };

    setCharacter(newCharacter);
  }, [files]);

  return character;
};

export default useCharacterData;
