import { Badge, Box, SimpleGrid } from '@chakra-ui/layout';
import {
  Heading,
  Center,
  UnorderedList,
  ListItem,
  Link,
  Text,
  Stack,
  AspectRatio,
  Image,
} from '@chakra-ui/react';
import { LinkIcon, ExternalLinkIcon } from '@chakra-ui/icons';
interface Illustrator {
  name: string;
  handle: string;
  year: string;
  imgURL: string;
}

const pageSpacing = {
  positive: [6, 8, 24, 32, 64, 80],
  negative: [-6, -8, -24, -32, -64, -80],
};

const QuickLinks = () => {
  const quickLinks = [
    { title: 'What is Song A Day?', link: '#songadao' },
    { title: 'Who is Jonathan Mann?', link: '#who-is-mann' },
    { title: 'Who does the art?', link: '#who-does-art' },
  ];

  return (
    <UnorderedList marginInlineStart="unset" my={8}>
      {quickLinks.map((item, idx) => {
        return (
          <ListItem listStyleType="none" my={5} key={idx}>
            <Link href={item.link} color="teal.500">
              <LinkIcon mr={1} /> {item.title}
            </Link>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

const IllustratorCardList = () => {
  const illustrators: Illustrator[] = [
    {
      name: 'Defaced Studio',
      handle: 'Defacedstudio',
      year: 'one',
      imgURL: '',
    },
    {
      name: 'Eclectic Method',
      handle: 'EclecticMethod',
      year: 'two',
      imgURL: '',
    },
    {
      name: 'Crypto Geisha',
      handle: 'CryptoGeisha',
      year: 'three',
      imgURL: '',
    },
    {
      name: 'Lucas Olivari',
      handle: 'luk.olivari',
      year: 'four',
      imgURL: '',
    },
    {
      name: 'Arzena Ersidyandhi',
      handle: 'Libraryfunction',
      year: 'five',
      imgURL: '',
    },
    {
      name: 'Lhean Storm',
      handle: 'StormNft',
      year: 'six',
      imgURL: '',
    },
    {
      name: 'Sam Jones',
      handle: 'SamuelArtson',
      year: 'seven',
      imgURL: '',
    },
    {
      name: 'Habiba Green',
      handle: 'Habibagreen',
      year: 'eight',
      imgURL: '',
    },
    {
      name: 'Clifford Elivert',
      handle: 'cliffBallin',
      year: 'nine',
      imgURL: '',
    },
    {
      name: 'Audrey Pina',
      handle: '_puppuppup_',
      year: 'ten',
      imgURL: '',
    },
    {
      name: 'PXZMARSO',
      handle: 'pxzmarso',
      year: 'eleven',
      imgURL: '',
    },
    {
      name: 'Nolan Pelletier',
      handle: 'NolanPPelletier',
      year: 'twelve',
      imgURL: '',
    },
    {
      name: 'Kirk Wallace',
      handle: 'bonehausinc',
      year: 'thirteen',
      imgURL: '',
    },
  ];
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} mb={2}>
      {illustrators.map(({ name, handle, year, imgURL }, idx) => {
        return <IllustratorCard key={idx} {...{ name, handle, year, imgURL }} />;
      })}
    </SimpleGrid>
  );
};

const IllustratorCard = ({ name, handle, year, imgURL }: Illustrator) => {
  return (
    <Box size="sm" rounded="lg" borderWidth="1px" overflow="hidden">
      <Badge colorScheme="blackAlpha" px={2} ml={2} mt={2} variant="subtle">
        Year {year}
      </Badge>
      <AspectRatio ratio={16 / 9}>
        <Image src={imgURL || 'assets/forest-tower.jpg'} alt={name} objectFit="cover" />
      </AspectRatio>
      <Box bg="grey.50" p={3} border={1}>
        <Text fontSize="lg" fontWeight="semibold" lineHeight={1} mt={2}>
          {name}
        </Text>
        <Link
          display="block"
          fontSize="sm"
          href={`https://twitter.com/${handle}`}
          color="teal.500"
          isExternal
        >
          @{handle} <ExternalLinkIcon />
        </Link>
      </Box>
    </Box>
  );
};

function FullWidthHeading(props: { heading: string; subHeading: string; anchorId: string }) {
  return (
    <Box
      bgColor="hsla(176, 36%, 92%, 1)"
      p={8}
      id={props.anchorId}
      mx={pageSpacing.negative}
      px={pageSpacing.positive}
      mt={8}
    >
      <Stack spacing={2}>
        <Heading as="h2" fontSize="3xl">
          {props.heading}
        </Heading>
        <Text fontSize="lg">{props.subHeading}</Text>
      </Stack>
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
      >
        <Center h={64}>
          <Heading as="h1" maxW="container.md" fontSize="5xl">
            About
          </Heading>
        </Center>
      </Box>

      <Box mx={pageSpacing.positive}>
        <QuickLinks />

        <FullWidthHeading
          heading="What is Song A Day?"
          subHeading="A new song, every day. Forever."
          anchorId="songadao"
        />

        <Stack spacing={4}>
          <Text pt={2}>
            Song A Day is different from other NFT projects. It did not grow directly out of the
            blockchain. I had written 2000 songs before Ethereum was even invented. I wrote another
            1500 before I learned about digital scarcity. But from the moment I saw CryptoPunks, I
            knew that Song A Day was a perfect fit.
          </Text>
          <Text>Song A Day is many things. It's about *time.* I measure the days by songs.</Text>
          <Text>Song A Day is a journal. It is quite literally a record of my creative life.</Text>
          <Text>
            Song A Day can be a burden, a joy, a challenge, a bore - all at the same time.
          </Text>
          <Text>
            Above all, Song A Day is an invitation to make stuff. Sometimes it's good stuff,
            sometimes it's bad stuff, but the making is the most important part.
          </Text>
        </Stack>

        <Heading as="h3" fontSize="2xl" mt={8} mb={3}>
          History
        </Heading>
        <Stack spacing={4}>
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
        </Stack>

        <FullWidthHeading
          heading="Who is Jonathan Mann?"
          subHeading="I write a song a day."
          anchorId="who-is-mann"
        />

        <Stack spacing={4}>
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
        </Stack>

        <Stack direction={['column', 'row']} spacing={10} mt={8}>
          <Box w={[80, 96]}>
            <AspectRatio ratio={16 / 9}>
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

          <Box w={[80, 96]}>
            <AspectRatio ratio={16 / 9}>
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
        </Stack>

        <FullWidthHeading
          heading="Who Draws The Art?"
          subHeading="Each year is illustrated by someone different!"
          anchorId="who-does-art"
        />

        <Stack spacing={4}>
          <Text pt={2}>Each Song A Day NFT is a 1/1.</Text>
          <Text>Each Song A Day has an accompanying illustration.</Text>

          <Text>Each illustration's attributes are derived from the song itself:</Text>
          <UnorderedList marginInlineStart="unset" my={8} px={4} py={2}>
            <ListItem>
              <strong>Topic</strong> – what the song is about.
            </ListItem>
            <ListItem>
              <strong>Mood</strong> – the feeling I had when making it.
            </ListItem>
            <ListItem>
              <strong>Instrument</strong> – the main instrument that's played.
            </ListItem>
            <ListItem>
              <strong>Location</strong> – where the song was recorded.
            </ListItem>
            <ListItem>
              <strong>Genre</strong> – the genre.
            </ListItem>
            <ListItem>
              <strong>Style</strong> – what the song sounds like.
            </ListItem>
            <ListItem>
              <strong>Noun/Proper noun</strong> – whether there's a specific person, place, thing or
              idea in the song.
            </ListItem>
            <ListItem>
              <strong>Beard</strong> – the state of my beard in the video for the song.
            </ListItem>
          </UnorderedList>
          <Text>These attributes become layers in the illustrations that represent each song.</Text>
        </Stack>

        <Heading as="h3" fontSize="2xl" mt={8} mb={4}>
          The illustrators
        </Heading>

        <IllustratorCardList />
      </Box>
    </>
  );
}
