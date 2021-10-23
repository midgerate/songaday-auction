import { ReactElement, useEffect, useState } from 'react';
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
  isPrimaryButton?: boolean;
}
interface TimelineProps {
  title: string;
  description: string;
  month: string;
  day: number;
  last?: boolean;
}
const Hero = () => {
  const COUNTDOWN_TO = 1635739199000;

  const [duration, setDuration] = useState<{ days?: string; hours?: string; minutes?: string }>({});
  function convertSecondsToDay(seconds: number) {
    const days = parseInt((seconds / (24 * 3600)).toString()).toString();

    seconds = seconds % (24 * 3600);
    const hours = parseInt((seconds / 3600).toString()).toString();

    seconds %= 3600;
    const minutes = parseInt((seconds / 60).toString()).toString();

    return {
      days,
      hours,
      minutes,
    };
  }

  useEffect(() => {
    const calculateDuration = () => {
      const now = new Date().getTime();
      const diffMilis = COUNTDOWN_TO - now;
      const duration = convertSecondsToDay(diffMilis / 1000);
      setDuration(duration);
    };

    // Calculate first time
    calculateDuration();

    const interval = setInterval(() => {
      calculateDuration();
    }, 1000 * 60);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Flex
      w="full"
      h={{ base: 'auto', md: '530px' }}
      backgroundImage="/assets/mirrored-bg.png"
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      {/* <Center w="sm" display={{ base: 'none', xl: 'block' }} pos="relative">
        <Image
          maxW="56"
          pos="absolute"
          top="20"
          left="16"
          src="/assets/eyeOpen-face.png"
          alt="Segun Adebayo"
        />
      </Center> */}
      <Box
        flex="1"
        display={{ base: 'block', sm: 'flex' }}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Box
          mt={{ base: 0, md: 16 }}
          p={{ base: 4, md: 8, sm: '20' }}
          bg="white"
          w={{ base: 'full', md: 'auto' }}
          boxShadow={{ base: 'none', md: 'xl' }}
          rounded={{ base: 'none', md: 'lg' }}
          textAlign="center"
        >
          <Center mt={{ base: 0, md: -20 }}>
            <Image w={{ base: 72, md: 56 }} src="/assets/songADAOLogo.png" alt="Segun Adebayo" />
          </Center>
          <Box px={{ base: 0, md: 16 }}>
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
              <CountDownCard title="Days" stat={duration?.days} />
              <CountDownCard title="Hours" stat={duration?.hours} />
              <CountDownCard title="Minutes" stat={duration?.minutes} />
            </SimpleGrid>
            <Box>
              <Text fontSize="xl" fontWeight="medium" pt="6" pb="3">
                -42 NFTs Remain-
              </Text>
              <Button size="lg">Claim Your Spot</Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Center display={{ base: 'none', xl: 'block' }} pos="relative" w="sm">
        <Image
          maxW="40"
          pos="absolute"
          top="10"
          left="14"
          src="/assets/eyeClose-face.png"
          alt="Segun Adebayo"
        />
      </Center> */}
    </Flex>
  );
};
const CountDownCard = ({ title, stat }: CountdownProps) => {
  return (
    <Stat px="4" py="2" bg="teal.50" shadow="md" rounded="lg">
      <StatNumber fontSize="5xl" lineHeight="normal" color="brand.darkTeal" fontWeight="bold">
        {stat}
      </StatNumber>
      <StatLabel fontSize="md" color="brand.darkTeal" fontWeight="medium" isTruncated>
        {title}
      </StatLabel>
    </Stat>
  );
};
const Feature = ({ title, button, image, isPrimaryButton }: FeatureProps) => {
  return (
    <Stack
      alignItems="center"
      justify="space-between"
      px={{ base: 8, md: 6, lg: 10 }}
      py="8"
      bg="brand.lightTeal"
      rounded={{ base: 'none', sm: 'lg' }}
    >
      <Text fontWeight="medium" align="center" fontSize="2xl">
        {title}
      </Text>
      <Box py="4">{image}</Box>
      <Button variant={isPrimaryButton ? 'solid' : 'outline'} size="lg">
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
      px={{ base: 4, sm: 0 }}
      py="8"
      rounded="lg"
      _after={
        !last && {
          content: '""',
          w: { base: 5, lg: 10 },
          h: 'full',
          bg: 'brand.lightTeal',
          left: { base: '44px', lg: '60px' },
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
          w={{ base: 32, lg: 44 }}
          h={{ base: 32, lg: 44 }}
          rounded="full"
          borderWidth={{ base: 16 }}
          borderColor="brand.lightTeal"
          bg="white"
          pos="relative"
          left={{ base: -2 }}
          zIndex={9}
        >
          <Text
            lineHeight="none"
            fontSize={{ base: 'lg', lg: '3xl' }}
            fontWeight="medium"
            align="center"
          >
            {month}
          </Text>
          <Text
            lineHeight="none"
            fontSize={{ base: '4xl', lg: '6xl' }}
            color="brand.teal"
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
        w="full"
        justifyContent="flex-start"
        flex="1"
      >
        <Box
          pos="relative"
          zIndex={6}
          pl={{ base: 20 }}
          pr={{ base: 10 }}
          py={{ base: 4 }}
          bg="brand.lightTeal"
          rounded="lg"
        >
          <Text fontWeight="semibold" fontSize={{ base: 'lg', sm: '2xl' }}>
            {title}
          </Text>
        </Box>
        <Box
          w={{ base: 'full' }}
          pos="relative"
          zIndex={5}
          top={-1}
          pl={{ base: 20 }}
          pr={{ base: 10 }}
          py={4}
          bg="brand.teal"
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
  const footerNav = [
    {
      key: '1',
      href: 'https://discord.gg/p3aW7F7J5h',
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
      <Container
        as={Stack}
        spacing={6}
        py={8}
        direction="column"
        align={{ base: 'flex-start', md: 'center' }}
      >
        <Stack
          align={{ base: 'flex-start', md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
          spacing={6}
        >
          {footerNav.map((link) => (
            // eslint-disable-next-line react/jsx-key

            <Link key={link.key} href={link.href} fontSize={{ base: 'xl', md: 'lg' }} isExternal>
              {link.name}
            </Link>
          ))}
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
      <Box py="16" px={{ base: '0', xl: '8', lg: '8', md: '16', sm: '8' }}>
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
          <SimpleGrid gap={[10, 10, 14, 12]} columns={[1, 1, 1, 3]}>
            <Feature
              title="SongADAO owns the rights and revenue to all Song A Day songs."
              image={<Image h="28" src="/assets/contract.png" alt="Segun Adebayo" />}
              button="Explore the Songs"
            />
            <Feature
              title="Members vote to govern the DAO’s use of resources"
              image={<Image h="28" src="/assets/judge.png" alt="Segun Adebayo" />}
              button="Find Out More"
            />
            <Feature
              title="Each Song A Day NFT gets you 1 vote in SongADAO."
              image={<Image h="28" src="/assets/voting.png" alt="Segun Adebayo" />}
              button="Grab an NFT"
              isPrimaryButton
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
            There’s no better time to join this{' '}
            <span style={{ textDecoration: 'underline', textUnderlineOffset: '7px' }}>
              grand experiment
            </span>
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
          <Button size="lg">Get your NFT</Button>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
