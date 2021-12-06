import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface IProps {
  modalReqs: {
    voucherAmount: number;
    totalUserVouchers: number;
    voucherTxnLink: string;
    isOpen: boolean;
    estimatedGas: number;
    onClose: () => void;
  };
}

const ReadyForMintModal: React.FC<IProps['modalReqs']> = ({
  voucherAmount,
  totalUserVouchers,
  voucherTxnLink,
  estimatedGas,
  isOpen,
  onClose,
}) => {
  const isSingleVoucher: boolean = voucherAmount === 1;
  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside" motionPreset="scale" size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody textAlign="center" py={8}>
          <Flex direction="column" spacing="4" align="center">
            <Heading fontSize="2xl">Your {isSingleVoucher ? "Song's" : 'Songs Are'} Ready!</Heading>
            <HStack spacing={3} pt={6} pb={2}>
              <Image src="/assets/mint/SongADayVoucher.png" height="42" width="auto" />
              <Heading>×</Heading>
              <Heading>{voucherAmount}</Heading>
            </HStack>
            <Text fontSize="lg" fontWeight="semibold">
              You just got {voucherAmount} Song {isSingleVoucher ? 'Voucher' : 'Vouchers'}
            </Text>
            <Text opacity=".8">
              You have {totalUserVouchers} {totalUserVouchers === 1 ? 'Voucher' : 'Vouchers'} total
            </Text>
            <NextLink href="/vouchers-explained" passHref>
              <Link isExternal color="brand.teal" textDecoration="underline">
                What's this?
              </Link>
            </NextLink>

            <Stack spacing={1} py={4}>
              <NextLink href={voucherTxnLink} passHref>
                <Link
                  isExternal
                  textDecoration="none"
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  <Button color="white">Gimme my {isSingleVoucher ? 'Song' : 'Songs'}!</Button>
                </Link>
              </NextLink>
              <Text>Estimated Gas: Ξ{estimatedGas}</Text>
            </Stack>

            <Text lineHeight="short">
              If you want to wait until gas is cheaper, don’t worry! Reserved songs are locked in,
              and no one else can get them. To claim your songs later, just log back in{' '}
              <NextLink href="/mint" passHref>
                <Link isExternal color="brand.teal" textDecoration="underline">
                  here
                </Link>
              </NextLink>
              .
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ReadyForMintModal;
