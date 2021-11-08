import {
  Box,
  Container,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  Link,
} from '@chakra-ui/react';
import RouterLink from 'next/link';
import NextImage from 'next/image';

function SongADAOIndex() {
  return (
    <Container maxWidth="container.lg">
      <Box py={10} mb="12" color="gray.800" lineHeight="tall">
        <Heading as="h1">SongADAO Founding Document</Heading>
        <Box mt="8" mb="8" p="8" bg="gray.100" borderRadius="lg" fontSize="large">
          <Box as="blockquote">
            “There is a vitality, a life force, a quickening that is translated through you into
            action, and there is only one of you in all time, this expression is unique, and if you
            block it, it will never exist through any other medium; and be lost. The world will not
            have it. It is not your business to determine how good it is, not how it compares with
            other expression. It is your business to keep it yours clearly and directly, to keep the
            channel open. You do not even have to believe in yourself or your work. You have to keep
            open and aware directly to the urges that motivate you. Keep the channel open. No artist
            is pleased. There is no satisfaction whatever at any time. There is only a queer, divine
            dissatisfaction, a blessed unrest that keeps us marching and makes us more alive than
            the others.”
          </Box>
          <Text mt="3" fontWeight="semibold" fontStyle="italic">
            - Martha Graham, godmother of modern dance
          </Text>
        </Box>
        {/* <Box textAlign="center">
          <NextImage src="/assets/songadao-dog.gif" width={498} height={278} />
          <Text color="gray.500">jake the dog, coolest dude.</Text>
        </Box> */}
        <Heading mt="14" fontSize="xx-large">
          Core Song A Day Beliefs:
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          <Box mt="6">
            <UnorderedList spacing={3}>
              <ListItem>
                Sucking at something is the first step to being sort of good at something.
              </ListItem>
              <ListItem>You do not have to be good.</ListItem>
              <ListItem>Music is good. Songs are awesome.</ListItem>
              <ListItem>You do not even have to believe in yourself!</ListItem>
              <ListItem>No artist is pleased. Just keep the channel open.</ListItem>
              <ListItem>It’s all about owning the means of production.</ListItem>
              <ListItem>Anti - racism, sexism, homophobia transphobia, fascism.</ListItem>
              <ListItem>No jerks. No hype.</ListItem>
              <ListItem>It’s work.</ListItem>
              <ListItem>We’re in it for the long haul.</ListItem>
              <ListItem>Time is weird.</ListItem>
              <ListItem>Life is suffering.</ListItem>
            </UnorderedList>
          </Box>
          <Box mt="6">
            <NextImage src="/assets/songadao-dog.gif" width={498} height={278} />
            <Text color="gray.500" textAlign="center">
              jake the dog, coolest dude.
            </Text>
          </Box>
        </SimpleGrid>
        <Heading as="h3" mt="14" fontSize="xx-large">
          The Purpose of SongADAO is
        </Heading>
        <UnorderedList mt="6" ml="0" spacing={3} sx={{ listStyle: 'none' }}>
          <ListItem>to promote daily acts of creation, big and small.</ListItem>

          <ListItem>to help Song A Day be heard far and wide</ListItem>

          <ListItem>to steer the future of the Song A Day project.</ListItem>

          <ListItem>to make cool stuff together.</ListItem>

          <ListItem>to help other musicians make a living from their music.</ListItem>
        </UnorderedList>
        <Heading as="h3" mt="14" fontSize="xx-large">
          Structure of the DAO
        </Heading>
        <UnorderedList mt="4" spacing={3}>
          <ListItem>If you hold a Song A Day NFT, you are eligible to be in the DAO.</ListItem>
          <ListItem>
            The DAO is a a co-op LCA registered in Colorado. The DAO owns the copyright to every
            Song A Day.
          </ListItem>
          <ListItem>
            All of Song A Day's revenue, both on chain and off, flows into the DAO's treasury.
          </ListItem>
        </UnorderedList>
        <Box mt="3">
          <Link
            as={RouterLink}
            href="/nitty-gritty"
            borderColor="brand.teal"
            borderBottom="2px"
            _hover={{
              textDecoration: 'none',
              borderBottom: '0px',
            }}
            color="brand.teal"
          >
            Get into the nitty gritty details of the DAO
          </Link>
        </Box>
        <Heading as="h3" mt="14" fontSize="xx-large">
          On Scarcity
        </Heading>
        <Text mt="6" fontSize="x-large" fontWeight="semibold">
          1
        </Text>
        <Text mt="1">
          Since 2015, artists of all kinds have been experimenting with various ways of expressing
          digital scarcity. We have things like 1 of 1s, open editions, 10,000 PFP projects, and
          limited runs of generative art.
        </Text>
        <Text mt="4">
          The common element is that digital scarcity is something that we impose on our work; it's
          not a naturally occurring thing.
        </Text>
        <Text mt="6" fontSize="x-large" fontWeight="semibold">
          2
        </Text>
        <Text mt="1">
          I often think about how, someday, I'll spend my last Hanukkah with my parents. How many
          more do we have left? How many more nights will I put my kids to bed? How many more times
          can I tuck them in and give them hugs and kisses and sing to them?
        </Text>
        <Text mt="6" fontSize="x-large" fontWeight="semibold">
          3
        </Text>
        <Text mt="1">
          Song A Day NFT achieves digital scarcity through <em>time</em>. I will only ever write one
          song a day. I wrote 2000 songs before Ethereum was invented. I wrote another 1500 before I
          learned about digital scarcity. All of these songs will soon be NFTs, and starting in late
          fall/early winter of 2022, as I enter my 14th year of Song A Day, I will be releasing each
          new song as an NFT, every single day.
        </Text>
        <Text mt="6" fontSize="x-large" fontWeight="semibold">
          4
        </Text>
        <Text mt="1">
          I can't tell you how many Song A Day NFTs there will be because I'm missing one crucial
          detail: I don't know how long I will live.
        </Text>
      </Box>
    </Container>
  );
}

export default SongADAOIndex;
