import {
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
  Stack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { SONG_CHAIN_ID } from '../../../utils/constants';
import { SUPPORTED_NETWORKS } from '../../../web3/constants';

interface IProps {
  modalReqs: {
    //   totalUserVouchers: number;
    bidTxnLink?: string;
    isOpen: boolean;
    onClose: () => void;
  };
}

const PlaceBidModal: React.FC<IProps['modalReqs']> = ({
  // totalUserVouchers,
  bidTxnLink,
  isOpen,
  onClose,
}) => {
  // const isSingleVoucher: boolean = totalUserVouchers === 1;
  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside" motionPreset="scale" size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody textAlign="center" py={8}>
          <Stack spacing="4" align="center">
            <Heading fontSize="xl">Placing bid...</Heading>

            <Spinner thickness="4px" speed="0.56s" emptyColor="teal.100" size="xl" color="teal" />

            {bidTxnLink && (
              <NextLink
                href={`${SUPPORTED_NETWORKS[SONG_CHAIN_ID].explorer}tx/${bidTxnLink}`}
                passHref
              >
                <Link isExternal color="brand.teal" textDecoration="underline">
                  Watch the transaction on Etherscan
                </Link>
              </NextLink>
            )}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PlaceBidModal;
