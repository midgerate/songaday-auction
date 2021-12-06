import {
  Heading,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

interface IProps {
  modalReqs: {
    songs: SongsProps['songs'];
    collectionLink: string;
    isOpen: boolean;
    onClose: () => void;
  };
}

interface SongsProps {
  songs: {
    title: string;
    number: number;
  }[];
}

const MintedSongModal: React.FC<IProps['modalReqs']> = ({
  songs,
  collectionLink,
  isOpen,
  onClose,
}) => {
  const isSingleSong: boolean = songs.length === 1;
  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside" motionPreset="scale" size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize="xl">
            Your {isSingleSong ? 'Song Has' : 'Songs Have'} Arrived! 🎉
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing="4" align="center">
            <SongList songs={songs} />
          </Stack>
        </ModalBody>
        <ModalFooter alignItems="center">
          <NextLink href={collectionLink} passHref>
            <Link isExternal color="brand.teal" textDecoration="underline">
              See {isSingleSong ? 'it' : 'them'} in your collection
            </Link>
          </NextLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const SongList: React.FC<SongsProps> = ({ songs }) => {
  const renderList = (): JSX.Element[] => {
    return songs.map((song, index) => {
      return (
        <HStack key={index} spacing={6} px="3" py="2" bgColor="teal.50" rounded="sm">
          <Text>#{song.number}</Text>
          <Text fontWeight="semibold" isTruncated>
            {song.title}
          </Text>
        </HStack>
      );
    });
  };
  return (
    <Stack spacing={2} pt="3" direction="column" width="full">
      {renderList()}
    </Stack>
  );
};

export default MintedSongModal;
