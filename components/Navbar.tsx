import {
  Button,
  HStack,
  Image,
  Img,
  Link,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Stack,
  useDisclosure,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
// import { Account } from '../containers/Account';
import { truncateHash } from '../lib/helpers';
import { useDidHydrate } from '../lib/useDidHydrate';
import { useWallet } from '../web3/WalletContext';

function Navbar() {
  // const { connect, disconnect, account, loading } = Account.useContainer();
  const { connectWallet, disconnect, address, isConnecting } = useWallet();
  const didHydrate = useDidHydrate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = (
    <Stack
      spacing="4"
      align={{ base: 'flex-start', md: 'center' }}
      justify="center"
      direction={{ base: 'column', md: 'row' }}
    >
      <NextLink href="/about" passHref>
        <Link pt={{ base: 8, md: 0 }} fontSize={{ base: 'xl', md: 'lg' }}>
          About
        </Link>
      </NextLink>
      <NextLink href="/explore" passHref>
        <Link pt={{ base: 8, md: 0 }} fontSize={{ base: 'xl', md: 'lg' }}>
          Explore Songs
        </Link>
      </NextLink>
      <NextLink href="/songadao" passHref>
        <Link fontSize={{ base: 'xl', md: 'lg' }}>SongADAO</Link>
      </NextLink>
    </Stack>
  );

  return (
    <VStack align="stretch" as="header" px="4" py="2">
      <HStack justifyContent="space-between">
        <NextLink href="/" passHref>
          <Link h={[20, 20, 24]}>
            <Img h="full" cursor="pointer" src="/assets/logo.png" alt="the Song a Day World logo" />
          </Link>
        </NextLink>
        <HStack spacing="4">
          <HStack spacing="4" display={{ base: 'none', md: 'inherit' }} justifyContent="end">
            {links}
          </HStack>
          <Box display={{ base: 'none', md: 'block' }}>
            {didHydrate && address ? (
              <Menu>
                <MenuButton as={Button}>{truncateHash(address)}</MenuButton>
                <MenuList>
                  <MenuItem as="div" p="0">
                    <NextLink href={`/a/${address}`} passHref>
                      <Link
                        px="3"
                        py="2"
                        display="block"
                        width="100%"
                        _hover={{ textDecoration: 'none' }}
                      >
                        My Songs
                      </Link>
                    </NextLink>
                  </MenuItem>
                  <MenuItem px="3" py="2" onClick={disconnect}>
                    Disconnect
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button onClick={connectWallet} isLoading={isConnecting}>
                Connect Wallet
              </Button>
            )}
          </Box>
        </HStack>
        <Image
          w="12"
          h="10"
          src="/assets/menuOpen.png"
          alt="Open Menu"
          onClick={onOpen}
          aria-label="Open Menu"
          display={{ md: 'none' }}
        />
      </HStack>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Image
              w="10"
              h="10"
              src="/assets/menuClose.png"
              alt="Close Menu"
              onClick={onClose}
              display={{ md: 'none' }}
            />
          </DrawerHeader>
          <DrawerBody>
            <Box display={{ md: 'none' }}>
              {didHydrate && address ? (
                <Menu>
                  <MenuButton as={Button}>{truncateHash(address)}</MenuButton>
                  <MenuList>
                    <MenuItem as="div" p="0">
                      <NextLink href={`/a/${address}`} passHref>
                        <Link
                          px="3"
                          py="2"
                          display="block"
                          width="100%"
                          _hover={{ textDecoration: 'none' }}
                        >
                          My Songs
                        </Link>
                      </NextLink>
                    </MenuItem>
                    <MenuItem px="3" py="2" onClick={disconnect}>
                      Disconnect
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Button onClick={connectWallet} isLoading={isConnecting}>
                  Connect Wallet
                </Button>
              )}
            </Box>
            {links}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  );
}

export default Navbar;
