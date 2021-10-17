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
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

function QuickLinks() {
  const quickLinks = [
    { title: 'What is Song A Day?', link: '#songadao' },
    { title: 'Who is Jonathan Mann?', link: '#who-is-mann' },
    { title: 'Who does the art?', link: '#who-does-art' },
  ];

  return (
    <Container maxW="container.sm">
      <UnorderedList marginInlineStart="0px" my="32px">
        {quickLinks.map((item, idx) => {
          return (
            <ListItem listStyleType="none" my="16px" key={idx}>
              <Link color="teal.500" href={item.link}>
                <LinkIcon mr="4px" /> {item.title}
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Container>
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
      >
        <Center h="265px">
          <Heading as="h1" maxW="container.md" fontSize="4xl">
            About
          </Heading>
        </Center>
      </Box>

      <QuickLinks />

      <Center bgColor="hsla(176, 36%, 92%, 1)" h="148px" id="songadao">
        <Stack>
          <Heading as="h3" fontSize="2xl">
            What is Song A Day?
          </Heading>
          <Text fontSize="lg">A new song, every day. Forever.</Text>
        </Stack>
      </Center>

      <Container maxW="sm" p="16px">
        <VStack spacing="16px" px="16px">
          <Text lineHeight="1.8" fontSize="md" pt="8px">
            Song A Day is different from other NFT projects. It did not grow directly out of the
            blockchain. I had written 2000 songs before Ethereum was even invented. I wrote another
            1500 before I learned about digital scarcity. But from the moment I saw CryptoPunks, I
            knew that Song A Day was a perfect fit.
          </Text>
          <Text lineHeight="1.8" fontSize="md">
            Song A Day is many things. It's about *time.* I measure the days by songs.
          </Text>
          <Text lineHeight="1.8" fontSize="md">
            Song A Day is a journal. It is quite literally a record of my creative life.
          </Text>
          <Text lineHeight="1.8" fontSize="md">
            Song A Day can be a burden, a joy, a challenge, a bore - all at the same time.{' '}
          </Text>
          <Text lineHeight="1.8" fontSize="md">
            Above all, Song A Day is an invitation to make stuff. Sometimes it's good stuff,
            sometimes it's bad stuff, but the making is the most important part.
          </Text>
        </VStack>

        <Box p="16px">
          <Heading as="h3" fontSize="2xl" py="8px">
            History
          </Heading>
          <VStack spacing="16px">
            <Text lineHeight="1.8" fontSize="md">
              At the height of the 2008 financial crash. I was unemployed. I decided to try to write
              a song every day in January. By the end of the month, I was having so much fun (and I
              was still unemployed), I aimed for a year. At the end of 2009, I made the project
              indefinite. As of now, on the cusp of Year 14, I hold the Guinness World Record for
              “Most Consecutive Days Writing a Song.”
            </Text>
            <Text lineHeight="1.8" fontSize="md">
              For the first few years of the project, I made my living entering online video
              contests. I'd enter 12 contests in 12 days, win one or two of them, and that would be
              my income for the month. As time went on, I started cobbling together a living from
              many different sources: Patreon, YouTube ads, streaming revenue, commissions, playing
              at conferences, writing themes songs and much more.
            </Text>
            <Text lineHeight="1.8" fontSize="md">
              It's always been my dream to make Song A Day itself my sole source of income. Now,
              thanks to you, and this DAO, that's finally a possibility.
            </Text>
          </VStack>
        </Box>
      </Container>

      <Center bgColor="hsla(176, 36%, 92%, 1)" h="148px" id="who-is-mann">
        <Stack>
          <Heading as="h3" fontSize="2xl">
            Who is Jonathan Mann?
          </Heading>
          <Text fontSize="lg">I write a song a day.</Text>
        </Stack>
      </Center>

      <Container maxW="sm" p="16px">
        <VStack spacing="16px" px="16px">
          <Text lineHeight="1.8" fontSize="md" pt="8px">
            I started writing songs when I was 12. I wrote my first song on the back of a pizza box.
            It wasn't a very good song.
          </Text>
          <Text lineHeight="1.8" fontSize="md">
            I feel really lucky though, because from that age onwards, I had a singular focus in my
            life: I wanted to write songs. I couldn't really sing, and I barely played guitar. It
            took me a long time before I made anything good. But none of that mattered: Writings
            songs is the only thing I have ever wanted to do.
          </Text>
          <Text lineHeight="1.8" fontSize="md">
            I went to college at Bennington where I started learning how to record myself. My friend
            Will and I stayed up all night and wrote and recorded 40 songs, each forty seconds long.
            My friend Thomas and I staged a giant rock opera called The Last Nympho Leprechaun. From
            2003-6 I wrote a song almost every week for the online songwriting competition,
            SongFight.org.
          </Text>
          <Text lineHeight="1.8" fontSize="md">
            In grad school at CalArts I made the world's first rock opera based on Super Mario. It
            was featured on G4, the premiere gaming channel of the aughts (iykyk).
          </Text>
          <Text lineHeight="1.8" fontSize="md">
            Subsequently, I got an internship at G4, and ended up writing a bunch of songs for
            different shows on the channel, culminating in the musical episode of their flagship
            review show, X-Play.
          </Text>
        </VStack>
      </Container>
    </>
  );
}
