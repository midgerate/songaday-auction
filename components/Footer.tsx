import React from 'react';
import { Stack, Box, Text, Container, Link } from '@chakra-ui/react';

const Footer = () => {
  const footerNav = [
    {
      key: '1',
      href: 'http://enter.songaday.world/',
      name: 'Discord',
    },
    {
      key: '2',
      href: 'https://twitter.com/songadaymann',
      name: 'Twitter',
    },
    {
      key: '3',
      href: 'https://www.youtube.com/c/JonathanMann',
      name: 'Youtube',
    },
    {
      key: '4',
      href: 'https://soundcloud.com/jonathanmann',
      name: 'Soundcloud',
    },
    {
      key: '5',
      href: 'https://www.jonathanmann.net/',
      name: 'JonathanMann',
    },
  ];
  return (
    <Box bg="teal.50" color="gray.700">
      <Container as={Stack} spacing={6} py={8} direction="column" align="center">
        <Stack align="center" direction={{ base: 'column', md: 'row' }} spacing={6}>
          {footerNav.map((link) => (
            // eslint-disable-next-line react/jsx-key

            <Link key={link.key} href={link.href} isExternal>
              {link.name}
            </Link>
          ))}
        </Stack>
        <Text fontWeight="semibold" align="center">
          Song A Day World, Song A Day, and SongADAO © Copyright {new Date().getFullYear()} Jonathan
          Mann & SongADAO LCA
        </Text>
        <Text align="center">
          Content on this site is licensed under a Creative Commons Attribution license.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
