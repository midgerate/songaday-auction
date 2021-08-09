import { Button, Container, Divider, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
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
  if (selectedTraits) {
    selectedTraitTypes = selectedTraits.map((trait) => trait.traitType);
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
  return Array.from(new Set(allTraits.flat()));
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
  const indexTwo = Math.floor(Math.random() * maxNumber);

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

  console.log('traits', traits);
  console.log('selected traits', selectedTraits);
  console.log('available songs', availableSongs);

  return (
    <Container py="8">
      <Text mb="4">Selected Traits: </Text>
      {selectedTraits.map((selectedTrait) => {
        return (
          <Text key={selectedTrait.trait}>
            {selectedTrait.traitType} : {selectedTrait.traitHuman}
          </Text>
        );
      })}
      <Divider my="8" />
      {randomTraits.map((randomTrait: Trait, index) => {
        return (
          <Button
            key={index}
            mx="4"
            onClick={() => {
              selectTrait(randomTrait);
            }}
          >
            {randomTrait.traitHuman}
          </Button>
        );
      })}
    </Container>
  );
}

export default SongSuggestionIndex;
