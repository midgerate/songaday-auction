import { Badge, Box, SimpleGrid, Container } from '@chakra-ui/layout';
import {
  Button,
  Center,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Text,
  Stack,
  AspectRatio,
  Image,
} from '@chakra-ui/react';

import { HomeBanner } from '../components/HomeBanner';

function FullWidthHeading(props: { heading: string; subHeading: string; anchorId: string }) {
  return (
    <Box
      bgColor="brand.lightTeal"
      p={8}
      id={props.anchorId}
      mx={pageSpacing.negative}
      px={pageSpacing.positive}
      my={3}
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

const pageSpacing = {
  positive: [6, 8, 20, 32, 64, 80],
  negative: [-6, -8, -20, -32, -64, -80],
};
export default function AboutSongADAO() {
  return (
    <>
      <Box mx={pageSpacing.positive}>
        <Box textAlign="center">
          <Heading
            as="h1"
            fontSize={['3xl', '4xl']}
            textAlign="center"
            letterSpacing="tight"
            mt={16}
          >
            Hi!
            <br /> I’m Jonathan Mann.
          </Heading>
          <Text lineHeight="short" textAlign="center" fontSize="lg">
            I've been writing a song a day for 12 years and 267 days. That's 4,647 songs!
          </Text>

          <Text textAlign="center" fontSize="lg" mt={8} fontWeight="semibold">
            What do I do with all these songs?
          </Text>
          <Text textAlign="center" fontSize="xl">
            The question is, what will <strong>YOU</strong> do?
          </Text>

          <Button size="lg" w={['full', 48]} mt={4}>
            Buy a song
          </Button>
        </Box>

        <Text
          textAlign="center"
          mt={16}
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          Introducing
        </Text>

        {/* <FullWidthHeading
          heading="What is Song A Day?"
          subHeading="A new song, every day. Forever."
          anchorId="songadao"
        /> */}

        <Box
          bgColor="brand.lightTeal"
          mx={pageSpacing.negative}
          px={pageSpacing.positive}
          h={32}
          mt={16}
        >
          <Center>
            <Box>
              <Image src="/assets/songADAOLogo.png" alt="SongADao Logo" mt={-12} w="sm"></Image>
            </Box>
          </Center>
        </Box>

        <Text as="h4" fontWeight="bold" fontSize="2xl" mt={[24, 32]}>
          SongADAO is a group of humans who support one song a day, forever.
        </Text>
        <Text mt={4}>
          Most artists are stuck with a very convoluted business model if they want to earn a living
          making music. Using decentralized technology, I think we can do better. By empowering the
          people who support music, we can make sure that the people who make, promote, and consume
          music directly benefit from it.
        </Text>

        <SimpleGrid mb={16} mt={24} spacing={[20, 18]} columns={[1, null, 3]}>
          <Box bgColor="brand.lightTeal" px={3} h={56} rounded="md">
            <Center>
              <Container mt={-12} centerContent>
                <Image src="/assets/agreement-hands.png" alt="Agreement Hands" h={24}></Image>
                <Text fontSize="lg" mt={3}>
                  SongADAO owns 100% of the rights to — and revenue from — all Song A Day songs.
                </Text>
              </Container>
            </Center>
          </Box>
          <Box bgColor="brand.lightTeal" px={3} h={56} rounded="md">
            <Center>
              <Container mt={-12} centerContent>
                <Image src="/assets/bullhorn-hands.png" alt="Agreement Hands" h={24}></Image>
                <Text fontSize="lg" mt={3}>
                  Members decide how to use those rights and revenue to grow the value of Song A
                  Day.
                </Text>
              </Container>
            </Center>
          </Box>
          <Box bgColor="brand.lightTeal" px={3} h={56} rounded="md">
            <Center>
              <Container mt={[-12, -20]} centerContent>
                <Image src="/assets/smiling-award-cup.png" alt="Agreement Hands" h={32}></Image>
                <Text fontSize="lg" mt={3}>
                  As Song A Day gets more successful, so does the DAO!
                </Text>
              </Container>
            </Center>
          </Box>
        </SimpleGrid>

        <Stack alignItems="center" textAlign="center">
          <Heading as="h2" mb={3} fontSize="3xl">
            Why a DAO?
          </Heading>
          <Text>
            Because I believe that people genuinely love art, and want it to thrive. But the economy
            around music has been screwed up for hundreds of years. That’s a deeply entrenched
            system.
          </Text>
          <Text mt={6}>
            SongADAO is a new twist; it’s a registered co-op LCA, so legally, it’s a company. But it
            runs like a collective, so that everyone who supports Song A Day benefits from its
            success. The goal is equity; everyone gets their fair share.
          </Text>
          <Link href="#" textDecoration="none">
            <Button variant="outline" size="lg" w={['full', 52]} mt={4}>
              The Future of Music
            </Button>
          </Link>
        </Stack>

        <Box
          bgColor="brand.lightTeal"
          p={8}
          mx={pageSpacing.negative}
          px={pageSpacing.positive}
          my={6}
          textAlign="center"
        >
          <Stack spacing={2}>
            <Heading as="h2" fontSize="2xl">
              How do I join?
            </Heading>
            <Text>Joining is as easy as owning a Song A Day NFT.</Text>
            <Text>As long as you own at least one, you’re eligible to be a member.</Text>
            <Button size="lg" w={['full', 52]} mt={4} alignSelf="center">
              Get your NFT
            </Button>
          </Stack>
        </Box>

        <Box
          bgImage="/assets/location_lakewelch.png"
          p={8}
          mx={pageSpacing.negative}
          px={pageSpacing.positive}
          my={6}
          textAlign="center"
        >
          <Stack spacing={2} textAlign="center">
            <Heading as="h2" fontSize="2xl" mb={4}>
              What do members do?
            </Heading>
            <SimpleGrid columns={[1, null, 3]} spacing={[4, 8]}>
              <Box bgColor="white" p={4} rounded="md" bg="brand.lightTeal">
                <Stack spacing={2} textAlign="center">
                  <Heading as="h2" fontSize="lg">
                    Community
                  </Heading>
                  <Text>
                    This project is not about flipping for a quick buck. It’s about hodling and
                    building something, together. We’re dedicated to all acts of creation, big and
                    small.
                  </Text>
                </Stack>
              </Box>
              <Box bgColor="white" p={4} rounded="md" bg="brand.lightTeal">
                <Stack spacing={2} textAlign="center">
                  <Heading as="h2" fontSize="lg">
                    Patronage Activity
                  </Heading>
                  <Text>
                    Just buying an NFT is a big help. But you can also get paid working for the DAO!
                    Members pick what kinds of work gets rewarded, so proactive members can have a
                    big impact.
                  </Text>
                </Stack>
              </Box>
              <Box bg="white" p={4} rounded="md" bg="brand.lightTeal">
                <Stack spacing={2}>
                  <Heading as="h2" fontSize="lg">
                    Scalability
                  </Heading>
                  <Text>
                    This is an experiment that’s meant to be replicated. If this model works, other
                    creators will be able to adopt it too, and they’ll need our help to do it.
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Stack>
          <Button size="lg" w={['full', 52]} mt={4}>
            Our Constitution
          </Button>
        </Box>

        <Box my={16} textAlign="center">
          <Heading as="h2" fontSize="2xl" my={4}>
            How do I learn more?
          </Heading>
          <Stack fontSize="lg" alignItems="center">
            <Text>
              You can <Link color="teal.500">join us on Discord</Link> (DAO members get VIP access),
              or <Link color="teal.500">read the nitty gritty</Link> about how SongADAO works.
            </Text>
            <Text fontWeight="semibold">
              Or if you learn by doing, just try it! Buy a song and you’re in.
            </Text>
          </Stack>
          <Button size="lg" w={['full', 52]} mt={8}>
            Buy an NFT
          </Button>
        </Box>
      </Box>
    </>
  );
}
