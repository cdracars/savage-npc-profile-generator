import { Badge, Box, HStack, Text, VStack } from "@chakra-ui/react";

interface Hindrance {
  type: string;
  name: string;
  description: string;
}

interface Edge {
  name: string;
  effect: string;
}

interface Character {
  id: string;
  name: string;
  gender: string;
  hindrances: Hindrance[];
  edges: Edge[];
  motto: string;
}

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      m={2}
      maxW="sm"
    >
      <Text fontSize="xl" fontWeight="bold">
        {character.name}
      </Text>
      <HStack>
        <Text>Gender:</Text>
        <Text fontWeight="bold">{character.gender}</Text>
      </HStack>
      <VStack align="start">
        <Text>Hindrances:</Text>
        {character.hindrances.map((hindrance, index) => (
          <HStack key={index}>
            <Badge colorScheme="orange">{hindrance.type}</Badge>
            <Text>{hindrance.description}</Text>
          </HStack>
        ))}
      </VStack>
      <VStack align="start">
        <Text>Edges:</Text>
        {character.edges.map((edge, index) => (
          <HStack key={index}>
            <Badge colorScheme="green">{edge.name}</Badge>
            <Text>{edge.effect}</Text>
          </HStack>
        ))}
      </VStack>
      <HStack>
        <Text>Motto:</Text>
        <Text fontWeight="bold">{character.motto}</Text>
      </HStack>
    </Box>
  );
};

export default CharacterCard;
