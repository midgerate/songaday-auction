import { Box, Container } from '@chakra-ui/layout';
import {
  Heading,
  Center,
  UnorderedList,
  ListItem,
  Link,
  Text,
  Stack,
  VStack,
  AspectRatio,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

function QuickLinks() {
  const quickLinks = [
    { title: 'What is Song A Day?', link: '#songadao' },
    { title: 'Who is Jonathan Mann?', link: '#who-is-mann' },
    { title: 'Who does the art?', link: '#who-does-art' },
  ];

  return (
    <Box mx={8}>
      <UnorderedList marginInlineStart="unset" my={8}>
        {quickLinks.map((item, idx) => {
          return (
            <ListItem listStyleType="none" my={5} key={idx}>
              <Link href={item.link}>
                <LinkIcon mr={1} /> {item.title}
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
}

export default function About() {
  return (
    <>
      <Box
        bgImage="url('assets/forest-tower.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={64}
      >
        <Heading as="h1" maxW="container.md" fontSize="5xl" ml={8} pt={32}>
          About
        </Heading>
      </Box>

      <QuickLinks />

      <Box bgColor="hsla(176, 36%, 92%, 1)" h={32} p={8} id="songadao">
        <Stack>
          <Heading as="h3" fontSize="2xl">
            What is Song A Day?
          </Heading>
          <Text fontSize="lg">A new song, every day. Forever.</Text>
        </Stack>
      </Box>

      <Box mx={8}>
        <VStack spacing={4}>
          <Text fontSize="md" pt={2}>
            Song A Day is different from other NFT projects. It did not grow directly out of the
            blockchain. I had written 2000 songs before Ethereum was even invented. I wrote another
            1500 before I learned about digital scarcity. But from the moment I saw CryptoPunks, I
            knew that Song A Day was a perfect fit.
          </Text>
          <Text>Song A Day is many things. It's about *time.* I measure the days by songs.</Text>
          <Text>Song A Day is a journal. It is quite literally a record of my creative life.</Text>
          <Text>
            Song A Day can be a burden, a joy, a challenge, a bore - all at the same time.{' '}
          </Text>
          <Text>
            Above all, Song A Day is an invitation to make stuff. Sometimes it's good stuff,
            sometimes it's bad stuff, but the making is the most important part.
          </Text>
        </VStack>

        <Heading as="h3" fontSize="xl" mt={8} mb={3}>
          History
        </Heading>
        <VStack spacing={4}>
          <Text>
            At the height of the 2008 financial crash. I was unemployed. I decided to try to write a
            song every day in January. By the end of the month, I was having so much fun (and I was
            still unemployed), I aimed for a year. At the end of 2009, I made the project
            indefinite. As of now, on the cusp of Year 14, I hold the Guinness World Record for
            “Most Consecutive Days Writing a Song.”
          </Text>
          <Text>
            For the first few years of the project, I made my living entering online video contests.
            I'd enter 12 contests in 12 days, win one or two of them, and that would be my income
            for the month. As time went on, I started cobbling together a living from many different
            sources: Patreon, YouTube ads, streaming revenue, commissions, playing at conferences,
            writing themes songs and much more.
          </Text>
          <Text>
            It's always been my dream to make Song A Day itself my sole source of income. Now,
            thanks to you, and this DAO, that's finally a possibility.
          </Text>
        </VStack>

        <Center bgColor="hsla(176, 36%, 92%, 1)" h={32} id="who-is-mann" mx={-8} mt={12}>
          <Stack>
            <Heading as="h3" fontSize="2xl">
              Who is Jonathan Mann?
            </Heading>
            <Text fontSize="lg">I write a song a day.</Text>
          </Stack>
        </Center>

        <VStack spacing={4}>
          <Text pt={2}>
            I started writing songs when I was 12. I wrote my first song on the back of a pizza box.
            It wasn't a very good song.
          </Text>
          <Text>
            I feel really lucky though, because from that age onwards, I had a singular focus in my
            life: I wanted to write songs. I couldn't really sing, and I barely played guitar. It
            took me a long time before I made anything good. But none of that mattered: Writings
            songs is the only thing I have ever wanted to do.
          </Text>
          <Text>
            I went to college at Bennington where I started learning how to record myself. My friend
            Will and I stayed up all night and wrote and recorded 40 songs, each forty seconds long.
            My friend Thomas and I staged a giant rock opera called The Last Nympho Leprechaun. From
            2003-6 I wrote a song almost every week for the online songwriting competition,
            <Link to="http://songfight.org/" color="teal.500">
              {' '}
              SongFight.org
            </Link>
            .
          </Text>
          <Text>
            In grad school at CalArts I made the world's first rock opera based on Super Mario. It
            was featured on G4, the premiere gaming channel of the aughts (iykyk).
          </Text>
          <Text>
            Subsequently, I got an internship at G4, and ended up writing a bunch of songs for
            different shows on the channel, culminating in the musical episode of their flagship
            review show, X-Play.
          </Text>
        </VStack>
        <Box my={8} mx={-4}>
          <AspectRatio maxW="lg" ratio={16 / 9}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/4m-JvGyxo0A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
          <Text fontSize="sm" color="gray.500" mt={1}>
            The Mario Opera on G4
          </Text>
        </Box>

        <Box my={8} mx={-4}>
          <AspectRatio maxW="lg" ratio={16 / 9}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/J59Ck0xgDyw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
          <Text fontSize="sm" color="gray.500" mt={1}>
            X-Play (The Musical) on G4
          </Text>
        </Box>
      </Box>
    </>
  );
}
