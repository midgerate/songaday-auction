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
  button: ReactElement;
  image: ReactElement;
}
interface TimelineProps {
  title: string;
  description: string;
  month: string;
  day: number;
}

function CountDownCard(props: CountdownProps) {
  const { title, stat } = props;
  return (
    <Stat px={{ base: 8, md: 3 }} py={'2'} bg={'teal.50'} shadow={'md'} rounded={'lg'}>
      <StatNumber fontSize={'5xl'} color={'teal.600'} fontWeight={'bold'}>
        {stat}
      </StatNumber>
      <StatLabel fontSize={'md'} color={'teal.400'} fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
    </Stat>
  );
}

const Feature = ({ title, button, image }: FeatureProps) => {
  return (
    <Stack alignItems={'center'} px={{ base: 8, md: 12 }} py={'8'} bg={'teal.50'} rounded={'lg'}>
      <Text fontWeight={'medium'} align={'center'} fontSize={'2xl'}>
        {title}
      </Text>
      <Box py={'4'}>{image}</Box>
      {button}
    </Stack>
  );
};

const Timeline = ({ title, day, month, description }: TimelineProps) => {
  return (
    <Stack pos={'relative'} flexDirection={'row'} px={{ base: 8, md: 12 }} py={'8'} rounded={'lg'}>
      <Box
        pos={'relative'}
        _after={{
          content: '""',
          w: 8,
          h: '300px',
          bg: 'teal.50',
          right: '66px',
          pos: 'absolute',
          zIndex: '-1',
          top: '20px',
        }}
      >
        <Box
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          flexDirection={'column'}
          w={40}
          h={40}
          rounded={'full'}
          borderWidth={12}
          borderColor={'teal.50'}
          bg={'white'}
          pos={'relative'}
          zIndex={9}
        >
          <Text lineHeight={'none'} fontSize={'2xl'} fontWeight={'medium'} align={'center'}>
            {month}
          </Text>
          <Text
            lineHeight={'none'}
            fontSize={'6xl'}
            color={'teal.600'}
            fontWeight={'bold'}
            align={'center'}
          >
            {day}
          </Text>
        </Box>
      </Box>
      <Box pos={'relative'} zIndex={-10} top={-2} left={-20} justifyContent={'flex-start'} flex="1">
        <Box pos={'relative'} zIndex={6} px={32} py={8} bg={'teal.100'} rounded={'lg'}>
          <Text fontWeight={'semibold'} fontSize={'2xl'}>
            {title}
          </Text>
        </Box>
        <Box
          w={'90%'}
          pos={'relative'}
          zIndex={5}
          top={-1}
          px={32}
          py={4}
          bg={'teal.300'}
          rounded={'lg'}
        >
          <Text fontWeight={'semibold'} fontSize={'2xl'}>
            {description}
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

const Footer = () => {
  return (
    <Box bg={'teal.50'} color={'gray.700'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={8}
        direction={{ base: 'row', md: 'column' }}
        spacing={6}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Link
            borderBottom={'2px'}
            _hover={{
              borderColor: 'teal.50',
            }}
            href={'#'}
          >
            Discord
          </Link>
          <Link
            borderBottom={'2px'}
            _hover={{
              borderColor: 'teal.50',
            }}
            href={'#'}
          >
            Twitter
          </Link>
          <Link
            borderBottom={'2px'}
            _hover={{
              borderColor: 'teal.50',
            }}
            href={'#'}
          >
            Youtube
          </Link>
          <Link
            borderBottom={'2px'}
            _hover={{
              borderColor: 'teal.50',
            }}
            href={'#'}
          >
            Soundcloud
          </Link>
          <Link
            borderBottom={'2px'}
            _hover={{
              borderColor: 'teal.50',
            }}
            href={'#'}
          >
            JonathanMann
          </Link>
        </Stack>
        <Text fontWeight={'semibold'}>
          Song A Day World, Song A Day, and SongADAO ©Copyright 2021 Jonathan Mann & SongADAO LLC
        </Text>
      </Container>
    </Box>
  );
};

export default function About() {
  return (
    <>
      <Flex
        w={'full'}
        h={'530px'}
        backgroundImage={`/assets/transparent.banner.png`}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <Center w={'sm'} pos="relative">
          <Image
            maxW="56"
            pos="absolute"
            top="20"
            left="16"
            src="/assets/eyeOpen-face.png"
            alt="Segun Adebayo"
          />
        </Center>
        <Box flex="1" display="flex" alignItems="flex-start" justifyContent="center">
          <Box
            mt="16"
            p="8"
            bg={'white'}
            maxW="xl"
            boxShadow={'xl'}
            rounded={'lg'}
            textAlign={'center'}
          >
            <Center mt="-20">
              <Image w="56" src={`/assets/songADAOLogo.png`} alt="Segun Adebayo" />
            </Center>
            <Box px="16">
              <Text align="left" fontSize="xl" fontWeight="medium" pt="2" pb="1">
                Presale Ends In:
              </Text>
              <SimpleGrid gap={'4'} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <CountDownCard title={'Days'} stat={'99'} />
                <CountDownCard title={'Hours'} stat={'23'} />
                <CountDownCard title={'Minutes'} stat={'59'} />
              </SimpleGrid>
              <Box>
                <Text fontSize="xl" fontWeight="medium" pt="6" pb="3">
                  -42 NFTs Remain-
                </Text>
                <Button bg={'teal.300'} fontSize={'lg'} variant="outline" mx="4" size="lg">
                  Claim Your Spot
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Center pos="relative" w={'sm'}>
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
      <Box py={'16'} px={{ base: '2', xl: '8' }}>
        <Box>
          <Text align="center" py={'12'} fontSize="4xl" fontWeight="bold">
            SongADAO is a group of humans who support one song a day, forever.
          </Text>
          <SimpleGrid gap={'20'} columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              title={'SongADAO owns the rights and revenue to all Song A Day songs.'}
              image={<Image w={'20'} h={'20'} src="/assets/contract.png" alt="Segun Adebayo" />}
              button={
                <Button
                  bg="none"
                  border="1px"
                  borderColor="teal.600"
                  color="teal.600"
                  variant="outline"
                  mx="4"
                  size="md"
                  fontSize={'xl'}
                >
                  Explore the Songs
                </Button>
              }
            />
            <Feature
              title={'Members vote to govern the DAO’s use of resources'}
              image={<Image w={'20'} h={'20'} src="/assets/judge.png" alt="Segun Adebayo" />}
              button={
                <Button
                  bg="none"
                  border="1px"
                  borderColor="teal.600"
                  color="teal.600"
                  variant="outline"
                  mx="4"
                  size="md"
                  fontSize={'xl'}
                >
                  Find Out More
                </Button>
              }
            />
            <Feature
              title={'Each Song A Day NFT gets you 1 vote in SongADAO.'}
              image={<Image w={'20'} h={'20'} src="/assets/voting.png" alt="Segun Adebayo" />}
              button={
                <Button
                  bg="teal.300"
                  border="0"
                  color="teal.600"
                  variant="outline"
                  mx="4"
                  size="md"
                  fontSize={'xl'}
                >
                  Grab an NFT
                </Button>
              }
            />
          </SimpleGrid>
        </Box>
        <Box>
          <Text align="center" pt={'32'} pb={'6'} fontSize="4xl" fontWeight="bold">
            SongADAO Timeline:
          </Text>
          <Flex flexDirection="column">
            <Timeline
              month="OCT"
              day={30}
              title={'NFT PRESALE ENDS'}
              description="The proto-DAO launches as soon as the presale ends. Pre-sale NFTs are Ξ0.12, the cheapest you’ll find them pre-auction!"
            />
            <Timeline
              month="NOV"
              day={1}
              title={'DAILY RINKEBY TEST AUCTIONS BEGIN'}
              description="Winners get a special mainnet NFT for the Testnet Album, a collection of community-suggested songs. Max 47 winners!"
            />
            <Timeline
              month="DEC"
              day={5}
              title={'THE BIG S.A.D. DROP!'}
              description="Years 4-13 will be sold for Ξ0.2 each. Proceeds go to me. Some of my best songs are in this batch, so each NFT will be minted with a unique, randomized song."
            />
            <Timeline
              month="DEC"
              day={6}
              title={'DAILY SONG AUCTIONS BEGIN!'}
              description="After the Big S.A.D Drop, I’ll be up-to-date on NFTs! Each new song I make will be minted and auctioned THAT VERY SAME DAY! And all the proceeds from the sale will go to SongADAO."
            />
          </Flex>
        </Box>
        <Container display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Text
            lineHeight={'taller'}
            align="center"
            pt={'32'}
            pb={'6'}
            fontSize="4xl"
            fontWeight="bold"
          >
            There’s no better time to join this
            <Link
              mx={2}
              py={2}
              borderBottom={'2px'}
              _hover={{
                borderColor: 'teal.100',
                bg: 'teal.100',
              }}
              href={'#'}
            >
              grand experiment
            </Link>
            . And you can pick it up for a song!
          </Text>
          <Button
            bg="teal.300"
            border="0"
            color="teal.600"
            variant="outline"
            mx="4"
            size="md"
            fontSize={'xl'}
          >
            Get your NFT
          </Button>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
