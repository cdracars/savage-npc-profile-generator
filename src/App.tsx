import CharacterCard from "./components/CharacterCard.tsx";

function App() {
  const character = {
    id: "0",
    name: "John Doe",
    gender: "Male",
    hindrances: [
      {
        type: "Minor",
        name: "Driven",
        description:
          "The hero’s actions are driven by some important goal or belief.",
      },
      {
        type: "Minor",
        name: "Bad Eyes",
        description:
          "-2 to all Trait rolls dependent on vision, Eyewear negates penalty but have a 50% chance of breaking when the hero suffers trauma.",
      },
      {
        type: "Major",
        name: "Phobia",
        description:
          "The character is afraid of something, and subtracts –0/–2 from all Trait rolls in its presence.",
      },
    ],
    edges: [
      {
        name: "Mr. Fix It",
        effect: "+1 to Repair rolls, half the time required with a raise.",
      },
    ],
    motto: "Celebrate diversity.",
  };

  return (
    <>
      <CharacterCard character={character} />
    </>
  );
}

export default App;
