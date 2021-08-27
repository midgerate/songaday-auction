import { Box, Button, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { BuySongModal } from '../components/BuySongModal';
import SongCard from '../components/SongCard';
// import allAvailableSongs from '../generated/availableSongs';
import allSongs from '../generated/db';
import { Song } from '../lib/types';
import { useOpenSeaPort } from '../lib/useOpenSeaPort';
import { useYoutubeData } from '../lib/useYoutubeData';
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

function getSongId(data): string[] {
  return data.map((song) => {
    if (song.name && song.name.includes('#')) {
      const splitSong = song.name.split('Song A Day #');
      const number = splitSong[1];
      return number;
    } else {
      return null;
    }
  });
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

interface SongSuggestionIndexProps {
  allAvailableSongs: Song[];
}

function SongSuggestionIndex({ allAvailableSongs }: SongSuggestionIndexProps): JSX.Element {
  const [traits, setTraits] = useState<string[]>([]);
  const [selectedTraits, setSelectedTraits] = useState<Trait[]>([]);
  const [availableSongs, setAvailableSongs] = useState(allAvailableSongs);

  useEffect(() => {
    setTraits(getAvailableTraits(allAvailableSongs, null));
  }, [allAvailableSongs]);

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
      setTraits(getAvailableTraits(newAvailableSongs, newSelectedTraits));
      return newSelectedTraits;
    });
  };

  const onReset = () => {
    setTraits(getAvailableTraits(allAvailableSongs, null));
    setSelectedTraits([]);
    setAvailableSongs(allAvailableSongs);
  };

  const hideSelection = selectedTraits.length === 3 || randomTraits.length === 0;

  let youtubeId;
  if (availableSongs.length === 1 && hideSelection) {
    youtubeId = availableSongs[0].youtubeId;
  }

  const { videoViews, publishedTime } = useYoutubeData(youtubeId);

  const {
    openSeaPort,
    transactionStarted,
    isModalOpen,
    setIsModalOpen,
    onModalClose,
  } = useOpenSeaPort();

  return (
    <Container py="8">
      <Heading as="h1" mt="4" mb="12" textAlign="center">
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
            return (
              <Box key={song.id} p="4" mb="8" border="1px" borderRadius="md" borderColor="gray.300">
                <SongCard
                  mb="8"
                  song={song}
                  openSeaPort={openSeaPort}
                  videoViews={videoViews}
                  publishedTime={publishedTime}
                  setIsModalOpen={setIsModalOpen}
                  embed
                />
              </Box>
            );
          })}
        </>
      )}
      <BuySongModal
        isOpen={isModalOpen}
        onClose={onModalClose}
        transactionStarted={transactionStarted}
      />
    </Container>
  );
}

const ONE_DAY = 60 * 60 * 24;

export const getStaticProps: GetStaticProps = async () => {
  async function getAllAvailableSongs() {
    const availableSongs = [];

    let loop = true;
    let offset = 0;

    async function fetchAllSongs() {
      try {
        const response = await fetch(
          `https://api.opensea.io/api/v1/assets?${new URLSearchParams({
            collection: 'song-a-day',
            limit: '50', // API is capped to 50
            order_by: 'visitor_count',
            owner: '0x3d9456ad6463a77bd77123cb4836e463030bfab4', // Jonathan's address
            offset: offset.toString(),
          })}`,
        );
        const data = await response.json();
        return data.assets;
      } catch (error) {
        console.log(error);
      }
    }

    while (loop === true) {
      const assets = await fetchAllSongs();
      availableSongs.push(assets);
      if (assets.length === 50) {
        offset += 50;
      } else {
        loop = false;
      }
    }
    const availableSongsFlat = availableSongs.flat();
    const availableSongIds = getSongId(availableSongsFlat).filter((id) => id !== null);

    return allSongs.filter((song) => availableSongIds.includes(song.id));
  }

  const availableSongsData = await getAllAvailableSongs();

  return { props: { allAvailableSongs: availableSongsData }, revalidate: ONE_DAY };
};

export default SongSuggestionIndex;
