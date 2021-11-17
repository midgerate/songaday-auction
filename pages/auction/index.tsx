import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import SongCard from '../../components/SongCard';
import Footer from '../../components/Footer';

const Auction: React.FC = () => {
  return (
    <>
      <Grid
        templateRows={{ base: 'repeat(2, 1fr)', md: '1fr' }}
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={{ base: '4', sm: '8', lg: '32' }}
        px={{ base: '4', sm: '16', lg: '32', xl: '56' }}
        py={8}
        bgColor="brand.lightTeal"
      >
        <Box>
          <SongCard song={undefined} card />
        </Box>

        <Box>
          <Text fontSize="md" fontWeight="medium">
            December 15, 2021
          </Text>
          <Flex alignItems="center">
            <Heading as="h1" fontSize="4xl">
              Song 4,051
            </Heading>
            <Flex pl="6">
              <Text fontSize="4xl">←</Text>
              <Text fontSize="4xl" opacity="0.4" pl="2.5">
                →
              </Text>
            </Flex>
          </Flex>

          <Stack spacing={{ base: '8', lg: '12' }} pt="6" direction={['column', 'row']}>
            <Flex flexDir="column">
              <Text>Current Bid</Text>
              <Heading as="h2" fontSize="3xl" fontWeight="bold">
                Ξ125.00
              </Heading>
            </Flex>
            <Flex flexDir="column">
              <Text>Ends In</Text>
              <Heading as="h2" fontSize="3xl" fontWeight="bold">
                24h 56m 42s
              </Heading>
            </Flex>
          </Stack>

          <Flex pt="8">
            <InputGroup>
              <Input size="lg" variant="outline" placeholder="ETH Amount" bgColor="white" />

              <NextLink href="/">
                <Button ml="3" size="lg">
                  Place bid
                </Button>
              </NextLink>
            </InputGroup>
          </Flex>

          <Stack spacing={2} pt="6">
            <Flex justify="space-between" px="3" py="2" bgColor="white" rounded="sm">
              <Flex align="center">
                <Image
                  borderRadius="full"
                  boxSize="24px"
                  src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                  alt="Segun Adebayo"
                />
                <Text pl="4">0x987...3m0k</Text>
              </Flex>
              <Flex align="center">
                <Text pr="3" fontWeight="semibold">
                  Ξ 125.00
                </Text>
                <ExternalLinkIcon />
              </Flex>
            </Flex>
            <Flex justify="space-between" px="3" py="2" bgColor="white" rounded="sm">
              <Flex align="center">
                <Image
                  borderRadius="full"
                  boxSize="24px"
                  src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                  alt="Segun Adebayo"
                />
                <Text pl="4">0x987...3m0k</Text>
              </Flex>
              <Flex align="center">
                <Text pr="3" fontWeight="semibold">
                  Ξ 125.00
                </Text>
                <ExternalLinkIcon />
              </Flex>
            </Flex>
            <Flex justify="space-between" px="3" py="2" bgColor="white" rounded="sm">
              <Flex align="center">
                <Image
                  borderRadius="full"
                  boxSize="24px"
                  src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                  alt="Segun Adebayo"
                />
                <Text pl="4">hazmatsuit.eth</Text>
              </Flex>
              <Flex align="center">
                <Text pr="3" fontWeight="semibold">
                  Ξ 125.00
                </Text>
                <ExternalLinkIcon />
              </Flex>
            </Flex>
          </Stack>

          <Box pt={4}>
            <NextLink href="/" passHref>
              <Link pt="3" fontWeight="medium">
                See full bid history →
              </Link>
            </NextLink>
          </Box>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default Auction;
