import {
  Button,
  HStack,
  Img,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  IconButton,
  Box,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { Account } from '../containers/Account';
import { truncateHash } from '../lib/helpers';
import { useDidHydrate } from '../lib/useDidHydrate';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Navbar() {
  const { connect, disconnect, account, loading } = Account.useContainer();
  const didHydrate = useDidHydrate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = (
    <>
      <NextLink href="/about" passHref>
        <Link fontSize={['sm', 'sm', 'md']}>About</Link>
      </NextLink>
      <NextLink href="/songadao" passHref>
        <Link fontSize={['sm', 'sm', 'md']}>SongADAO</Link>
      </NextLink>
      <Link href="https://twitter.com/songadaymann" fontSize={['sm', 'sm', 'md']} isExternal>
        @songadaymann
      </Link>
    </>
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
          {didHydrate && account ? (
            <Menu>
              <MenuButton as={Button}>{truncateHash(account)}</MenuButton>
              <MenuList>
                <MenuItem as="div" p="0">
                  <NextLink href={`/a/${account}`} passHref>
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
            <Button onClick={connect} isLoading={loading}>
              Connect Wallet
            </Button>
          )}
        </HStack>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </HStack>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {links}
          </Stack>
        </Box>
      ) : null}
    </VStack>
  );
}

export default Navbar;
