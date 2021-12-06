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

interface IProps {
  modalReqs: {
    totalUserVouchers: number;
    mintTxnLink: string;
    isOpen: boolean;
    onClose: () => void;
  };
}

const MintingSongModal: React.FC<IProps['modalReqs']> = ({
  totalUserVouchers,
  mintTxnLink,
  isOpen,
  onClose,
}) => {
  const isSingleVoucher: boolean = totalUserVouchers === 1;
  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside" motionPreset="scale" size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody textAlign="center" py={8}>
          <Stack spacing="4" align="center">
            <Heading fontSize="xl">
              Okay! Getting Your {isSingleVoucher ? 'Song' : 'Songs'}...
            </Heading>

            <Spinner thickness="4px" speed="0.56s" emptyColor="teal.100" size="xl" color="teal" />

            <NextLink href={mintTxnLink} passHref>
              <Link isExternal color="brand.teal" textDecoration="underline">
                Watch the transaction on Etherscan
              </Link>
            </NextLink>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MintingSongModal;
