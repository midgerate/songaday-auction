import { ReactElement } from 'react';
import {
  Stack,
  Box,
  Flex,
  Button,
  Text,
  Image,
  Center,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Container,
  Link,
} from '@chakra-ui/react';

interface CountdownProps {
  title: string;
  stat: string;
}
interface FeatureProps {
  title: string;
  button: string;
  image: ReactElement;
}
interface TimelineProps {
  title: string;
  description: string;
  month: string;
  day: number;
  last?: boolean;
}
const Hero = () => {
  return (
    <Flex
      w="full"
      h={{ base: 'auto', sm: '530px' }}
      backgroundImage="/assets/transparent.banner.png"
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <Center w="sm" display={{ base: 'none', xl: 'block' }} pos="relative">
        <Image
          maxW="56"
          pos="absolute"
          top="20"
          left="16"
          src="/assets/eyeOpen-face.png"
          alt="Segun Adebayo"
        />
      </Center>
      <Box
        flex="1"
        display={{ base: 'block', sm: 'flex' }}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Box
          mt={{ base: 0, sm: 16 }}
          p={{ base: 4, sm: 8 }}
          bg="white"
          maxW="xl"
          boxShadow={{ base: 'none', sm: 'xl' }}
          rounded={{ base: 'none', sm: 'lg' }}
          textAlign="center"
        >
          <Center mt={{ base: 0, sm: -20 }}>
            <Image w={{ base: 72, sm: 56 }} src="/assets/songADAOLogo.png" alt="Segun Adebayo" />
          </Center>
          <Box px={{ base: 0, sm: 16 }}>
            <Text
              align="left"
              fontSize="xl"
              fontWeight="medium"
              pt={{ base: 10, sm: 2 }}
              pb={{ base: 6, sm: 1 }}
            >
              Presale Ends In:
            </Text>
            <SimpleGrid gap={{ base: 4, sm: 6 }} columns={3} spacing={{ base: 6, sm: 12 }}>
              <CountDownCard title="Days" stat="99" />
              <CountDownCard title="Hours" stat="23" />
              <CountDownCard title="Minutes" stat="59" />
            </SimpleGrid>
            <Box>
              <Text fontSize="xl" fontWeight="medium" pt="6" pb="3">
                -42 NFTs Remain-
              </Text>
              <Button bg="teal.300" fontSize="lg" variant="outline" mx="4" size="lg">
                Claim Your Spot
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Center display={{ base: 'none', xl: 'block' }} pos="relative" w="sm">
        <Image
          maxW="40"
          pos="absolute"
          top="10"
          left="14"
          src="/assets/eyeClose-face.png"
          alt="Segun Adebayo"
        />
      </Center>
    </Flex>
  );
};
const CountDownCard = ({ title, stat }: CountdownProps) => {
  return (
    <Stat px={{ base: 4, md: 3 }} py="2" bg="teal.50" shadow="md" rounded="lg">
      <StatNumber fontSize="5xl" color="teal.600" fontWeight="bold">
        {stat}
      </StatNumber>
      <StatLabel fontSize="md" color="teal.400" fontWeight="medium" isTruncated>
        {title}
      </StatLabel>
    </Stat>
  );
};
const Feature = ({ title, button, image }: FeatureProps) => {
  return (
    <Stack
      alignItems="center"
      px={{ base: 8, md: 12 }}
      py="8"
      bg="teal.50"
      rounded={{ base: 'none', sm: 'lg' }}
    >
      <Text fontWeight="medium" align="center" fontSize="2xl">
        {title}
      </Text>
      <Box py="4">{image}</Box>
      <Button
        bg="none"
        border="1px"
        borderColor="teal.600"
        color="teal.600"
        variant="outline"
        mx="4"
        size="md"
        fontSize="xl"
      >
        {button}
      </Button>
    </Stack>
  );
};
const Timeline = ({ title, day, month, description, last }: TimelineProps) => {
  return (
    <Stack
      pos="relative"
      flexDirection="row"
      px={{ base: 4, sm: 12 }}
      py="8"
      rounded="lg"
      _after={
        !last && {
          content: '""',
          w: { base: 4, md: 6, sm: 8 },
          h: 'full',
          bg: 'teal.50',
          left: { base: '54px', md: '120px', sm: '66px' },
          pos: 'absolute',
          zIndex: '-1',
          top: '40px',
        }
      }
    >
      <Box pos="relative">
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          w={{ base: 24, sm: 40 }}
          h={{ base: 24, sm: 40 }}
          rounded="full"
          borderWidth={{ base: 8, sm: 12 }}
          borderColor="teal.50"
          bg="white"
          pos="relative"
          zIndex={9}
        >
          <Text
            lineHeight="none"
            fontSize={{ base: 'xl', sm: '2xl' }}
            fontWeight="medium"
            align="center"
          >
            {month}
          </Text>
          <Text
            lineHeight="none"
            fontSize={{ base: '3xl', sm: '6xl' }}
            color="teal.600"
            fontWeight="bold"
            align="center"
          >
            {day}
          </Text>
        </Box>
      </Box>
      <Box
        pos="relative"
        zIndex={-10}
        top={-2}
        left={{ base: -10, sm: -20 }}
        justifyContent="flex-start"
        flex="1"
      >
        <Box
          pos="relative"
          zIndex={6}
          px={{ base: 14, md: 24, sm: 32 }}
          py={{ base: 4, sm: 8 }}
          bg="teal.100"
          rounded="lg"
        >
          <Text fontWeight="semibold" fontSize={{ base: 'lg', sm: '2xl' }}>
            {title}
          </Text>
        </Box>
        <Box
          w={{ base: 'full', sm: '90%' }}
          pos="relative"
          zIndex={5}
          top={-1}
          px={{ base: 14, md: 24, sm: 32 }}
          py={4}
          bg="teal.300"
          rounded="lg"
        >
          <Text fontWeight="semibold" fontSize={{ base: 'lg', sm: '2xl' }}>
            {description}
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};
const Footer = () => {
  return (
    <Box bg="teal.50" color="gray.700">
      <Container
        as={Stack}
        spacing={6}
        py={8}
        direction="column"
        align={{ base: 'flex-start', sm: 'center' }}
      >
        <Stack
          align={{ base: 'flex-start', sm: 'center' }}
          direction={{ base: 'column', sm: 'row' }}
          spacing={6}
        >
          <Link
            borderBottom="2px"
            _hover={{
              borderColor: 'teal.50',
            }}
            href="#"
          >
            Discord
          </Link>
          <Link
            borderBottom="2px"
            _hover={{
              borderColor: 'teal.50',
            }}
            href="#"
          >
            Twitter
          </Link>
          <Link
            borderBottom="2px"
            _hover={{
              borderColor: 'teal.50',
            }}
            href="#"
          >
            Youtube
          </Link>
          <Link
            borderBottom="2px"
            _hover={{
              borderColor: 'teal.50',
            }}
            href="#"
          >
            Soundcloud
          </Link>
          <Link
            borderBottom="2px"
            _hover={{
              borderColor: 'teal.50',
            }}
            href="#"
          >
            JonathanMann
          </Link>
        </Stack>
        <Text fontWeight="semibold" align="center">
          Song A Day World, Song A Day, and SongADAO ©Copyright 2021 Jonathan Mann & SongADAO LLC
        </Text>
      </Container>
    </Box>
  );
};
export default function Home() {
  return (
    <>
      <Hero />
      <Box py="16" px={{ base: '0', xl: '8', sm: '12' }}>
        <Box>
          <Text
            display={{ base: 'none', sm: 'block' }}
            align="center"
            py="12"
            fontSize="4xl"
            fontWeight="bold"
          >
            SongADAO is a group of humans who support one song a day, forever.
          </Text>
          <SimpleGrid gap={{ base: 12, sm: 20 }} columns={{ base: 1, lg: 3 }} spacing={10}>
            <Feature
              title="SongADAO owns the rights and revenue to all Song A Day songs."
              image={<Image w="20" h="20" src="/assets/contract.png" alt="Segun Adebayo" />}
              button="Explore the Songs"
            />
            <Feature
              title="Members vote to govern the DAO’s use of resources"
              image={<Image w="20" h="20" src="/assets/judge.png" alt="Segun Adebayo" />}
              button="Find Out More"
            />
            <Feature
              title="Each Song A Day NFT gets you 1 vote in SongADAO."
              image={<Image w="20" h="20" src="/assets/voting.png" alt="Segun Adebayo" />}
              button="Grab an NFT"
            />
          </SimpleGrid>
        </Box>
        <Box>
          <Text
            align="center"
            pt={{ base: 10, sm: 32 }}
            pb={{ base: 2, sm: 6 }}
            fontSize="4xl"
            fontWeight="bold"
          >
            SongADAO Timeline:
          </Text>
          <Flex flexDirection="column">
            <Timeline
              month="OCT"
              day={30}
              title="NFT PRESALE ENDS"
              description="The proto-DAO launches as soon as the presale ends. Pre-sale NFTs are Ξ0.12, the cheapest you’ll find them pre-auction!"
            />
            <Timeline
              month="NOV"
              day={1}
              title="DAILY RINKEBY TEST AUCTIONS BEGIN"
              description="Winners get a special mainnet NFT for the Testnet Album, a collection of community-suggested songs. Max 47 winners!"
            />
            <Timeline
              month="DEC"
              day={5}
              title="THE BIG S.A.D. DROP!"
              description="Years 4-13 will be sold for Ξ0.2 each. Proceeds go to me. Some of my best songs are in this batch, so each NFT will be minted with a unique, randomized song."
            />
            <Timeline
              month="DEC"
              day={6}
              title="DAILY SONG AUCTIONS BEGIN!"
              description="After the Big S.A.D Drop, I’ll be up-to-date on NFTs! Each new song I make will be minted and auctioned THAT VERY SAME DAY! And all the proceeds from the sale will go to SongADAO."
              last
            />
          </Flex>
        </Box>
        <Container display="flex" flexDirection="column" alignItems="center">
          <Text
            lineHeight="tall"
            align="center"
            pt={{ base: 10, sm: 32 }}
            pb={{ base: 2, sm: 6 }}
            fontSize={{ base: '2xl', sm: '4xl' }}
            fontWeight="bold"
          >
            There’s no better time to join this
            <Link
              mx={2}
              py={2}
              borderBottom="2px"
              _hover={{
                borderColor: 'teal.100',
                bg: 'teal.100',
              }}
              href="#"
            >
              grand experiment
            </Link>
            .
          </Text>
          <Text
            lineHeight="taller"
            align="center"
            pt="4"
            pb="6"
            fontSize={{ base: '2xl', sm: '4xl' }}
            fontWeight="bold"
          >
            And you can pick it up for a song!
          </Text>
          <Button
            bg="teal.300"
            border="0"
            color="teal.600"
            variant="outline"
            mx="4"
            size="md"
            fontSize="xl"
          >
            Get your NFT
          </Button>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
