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
    voucherAmount: number;
    isOpen: boolean;
    reserveTxnLink: string;
    onClose: () => void;
  };
}

const ReservingSongModal: React.FC<IProps['modalReqs']> = ({
  voucherAmount,
  isOpen,
  reserveTxnLink,
  onClose,
}) => {
  const isSingleVoucher: boolean = voucherAmount === 1;
  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside" motionPreset="scale" size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody textAlign="center" py={8}>
          <Stack spacing="4" align="center">
            <Heading fontSize="xl">
              Just a sec, we’re reserving your {isSingleVoucher ? 'song' : 'songs'}!
            </Heading>
            <NextLink href="/voucher-explained" passHref>
              <Link isExternal color="brand.teal" textDecoration="underline">
                Here’s a relevant song while you wait!
              </Link>
            </NextLink>
            <Spinner thickness="4px" speed="0.56s" emptyColor="teal.100" size="xl" color="teal" />

            <NextLink href={reserveTxnLink} passHref>
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

export default ReservingSongModal;
