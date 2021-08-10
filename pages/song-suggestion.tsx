import { Box, Button, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import SongCard from '../components/SongCard';
import allAvailableSongs from '../generated/availableSongs';
import { Song } from '../lib/types';
import {
  HumanBeard,
  HumanInstrument,
  HumanLocation,
  HumanMood,
  HumanTopic,
} from '../lib/utils/constants';

interface Trait {
  trait: string;
  traitType: string;
  traitHuman: string;
}

function getAvailableTraits(songs: Song[], selectedTraits?: Trait[]): string[] {
  let selectedTraitTypes = [];
  let selectedTraitValues = [];
  if (selectedTraits) {
    selectedTraitTypes = selectedTraits.map((trait) => trait.traitType);
    selectedTraitValues = selectedTraits.map((trait) => trait.trait);
  }
  const allTraits = songs.reduce((acc, song) => {
    if (!selectedTraitTypes.includes('topic')) {
      acc.push(song.topic);
    }
    if (!selectedTraitTypes.includes('mood')) {
      acc.push(song.mood);
    }
    if (!selectedTraitTypes.includes('beard')) {
      acc.push(song.beard);
    }
    if (!selectedTraitTypes.includes('location')) {
      acc.push(song.location);
    }
    if (!selectedTraitTypes.includes('instrument')) {
      acc.push(song.instrument);
    }
    acc.push(song.tags);
    return acc;
  }, []);
  const flatArray = Array.from(new Set(allTraits.flat()));
  return flatArray.filter((trait) => !selectedTraitValues.includes(trait));
}

function processTrait(trait): Trait {
  let traitType = 'tag';
  let traitHuman = trait;
  if (HumanLocation[trait]) {
    traitType = 'location';
    traitHuman = HumanLocation[trait];
  }
  if (HumanTopic[trait]) {
    traitType = 'topic';
    traitHuman = HumanTopic[trait];
  }
  if (HumanMood[trait]) {
    traitType = 'mood';
    traitHuman = HumanMood[trait];
  }
  if (HumanBeard[trait]) {
    traitType = 'beard';
    traitHuman = HumanBeard[trait];
  }
  if (HumanInstrument[trait]) {
    traitType = 'instrument';
    traitHuman = HumanInstrument[trait];
  }
  return {
    trait,
    traitType,
    traitHuman,
  };
}

function getRandomTraits(traits: string[]) {
  const maxNumber = traits.length;
  const indexOne = Math.floor(Math.random() * maxNumber);
  let indexTwo = Math.floor(Math.random() * maxNumber);
  // Make sure we get different index
  if (indexOne === indexTwo) {
    if (indexTwo === 0) {
      indexTwo += 1;
    } else {
      indexTwo -= 1;
    }
  }
  const traitOne = processTrait(traits[indexOne]);
  const traitTwo = processTrait(traits[indexTwo]);
  return [traitOne, traitTwo];
}

function SongSuggestionIndex(): JSX.Element {
  const [traits, setTraits] = useState<string[]>([]);
  const [selectedTraits, setSelectedTraits] = useState<Trait[]>([]);
  const [availableSongs, setAvailableSongs] = useState(allAvailableSongs);

  useEffect(() => {
    setTraits(getAvailableTraits(allAvailableSongs as Song[], null));
  }, []);

  const randomTraits = getRandomTraits(traits);

  const selectTrait = (trait: Trait) => {
    const newAvailableSongs = availableSongs.filter(
      (song) =>
        song.location === trait.trait ||
        song.topic === trait.trait ||
        song.mood === trait.trait ||
        song.beard === trait.trait ||
        song.instrument === trait.trait ||
        song.tags.includes(trait.trait),
    );
    setAvailableSongs(newAvailableSongs);
    setSelectedTraits((prev) => {
      const newSelectedTraits = [trait, ...prev];
      setTraits(getAvailableTraits(newAvailableSongs as Song[], newSelectedTraits));
      return newSelectedTraits;
    });
  };

  const onReset = () => {
    setTraits(getAvailableTraits(allAvailableSongs as Song[], null));
    setSelectedTraits([]);
    setAvailableSongs(allAvailableSongs);
  };

  const hideSelection = selectedTraits.length === 3 || randomTraits.length === 0;

  return (
    <Container py="8">
      <Heading as="h1" mb="12" textAlign="center">
        Pick Three Random Traits
      </Heading>

      {!hideSelection ? (
        <Flex justifyContent="center">
          {randomTraits.map((randomTrait: Trait, index) => {
            return (
              <Button
                key={index}
                mx="4"
                size="lg"
                colorScheme="blue"
                variant="outline"
                onClick={() => {
                  selectTrait(randomTrait);
                }}
              >
                {randomTrait.traitHuman}
              </Button>
            );
          })}
        </Flex>
      ) : (
        <Box textAlign="center">
          <Button onClick={onReset}>Reset Traits</Button>
        </Box>
      )}
      {selectedTraits.length > 0 && (
        <Box p="12" my="12" bg="gray.50" border="1px" borderColor="gray.300" borderRadius="md">
          <SimpleGrid gap="8" columns={[1, 1, 3]}>
            {selectedTraits.map((selectedTrait) => {
              return (
                <Button
                  key={selectedTrait.trait}
                  size="lg"
                  width="100%"
                  colorScheme="blue"
                  cursor="inherit"
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  {selectedTrait.traitHuman}
                </Button>
              );
            })}
          </SimpleGrid>
        </Box>
      )}
      {hideSelection && (
        <>
          {availableSongs.map((song: Song) => {
            return <SongCard key={song.id} mb="8" cursor="pointer" h="full" song={song} card />;
          })}
        </>
      )}
    </Container>
  );
}

export default SongSuggestionIndex;
