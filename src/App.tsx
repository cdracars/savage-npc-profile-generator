import CharacterCard from "./components/CharacterCard.tsx";
import useCharacterData from "./hooks/useCharacterData.ts";

function App() {
  const character = useCharacterData();

  // If character hasn't been set yet, don't render anything
  if (!character) return null;

  return (
    <>
      <CharacterCard character={character} />
    </>
  );
}

export default App;
