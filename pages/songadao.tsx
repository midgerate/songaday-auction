import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
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

        <Text mt="12" fontSize="x-large" fontWeight="semibold" lineHeight="tall">
          A DAO is a living, breathing collection of humans. Humans are messy. This is all up for
          debate and subject to change.
        </Text>
        <Heading as="h3" mt="14" fontSize="xx-large">
          The Purpose of SongADAO is
        </Heading>
        <UnorderedList mt="6" ml="0" spacing={3} sx={{ listStyle: 'none' }}>
          <ListItem>To promote daily acts of creation, big and small.</ListItem>
          <ListItem>To help steer the future of the Song A Day project.</ListItem>
          <ListItem>To make cool stuff together.</ListItem>
        </UnorderedList>
        <Heading as="h3" mt="14" fontSize="xx-large">
          Structure of the DAO
        </Heading>
        <Text mt="6">
          <strong>Song A Day NFTs are for governance.</strong>
        </Text>
        <UnorderedList mt="4" spacing={3}>
          <ListItem>If you hold a Song A Day NFT, you are in the DAO.</ListItem>
          <ListItem>1 Song A Day NFT = 1 vote in the DAO.</ListItem>
          <ListItem>
            The DAO is a legal entity that owns the copyright to every Song A Day.
          </ListItem>
          <ListItem>
            All of Song A Day's revenue, both on chain and off, flows into the DAO's treasury.
          </ListItem>
          <ListItem>50% of that revenue is mine to claim, 50% is the DAO's.</ListItem>
        </UnorderedList>

        <Text mt="8">
          <strong>$SONG tokens</strong>
        </Text>
        <UnorderedList mt="4" spacing={3}>
          <ListItem>How the token will be used is up to the DAO.</ListItem>
          <ListItem>Total supply is 360,184,196</ListItem>
          <ListItem>
            That is the number of days if I do song a day for 100 years (36,889) multiplied by the
            number of days I was alive before starting song a day (9,764).
          </ListItem>
        </UnorderedList>

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
          I often think about how, someday, I'll spend my last Hanukkah with my parents. How many
          more do we have left? How many more nights will I put my kids to bed? How many more times
          can I tuck them in and give them hugs and kisses and sing to them?
        </Text>

        <Text mt="6" fontSize="x-large" fontWeight="semibold">
          4
        </Text>
        <Text mt="1">
          I can't tell you how many Song A Day NFTs there will be because I'm missing one crucial
          detail: I don't know how long I will live.
        </Text>

        <Heading as="h3" mt="14" fontSize="xx-large">
          Story Time
        </Heading>
        <Text mt="6">
          I was living in Berkeley, CA. My work on the{' '}
          <Link color="blue.500" href="https://www.youtube.com/watch?v=oozLnk1BZ5g" isExternal>
            Mario Opera
          </Link>{' '}
          had ended, and my time as{' '}
          <Link color="blue.500" href="https://whereisgamejew.tumblr.com/" isExternal>
            GameJew
          </Link>{' '}
          was coming to a close. I was making a living doing{' '}
          <Link color="blue.500" href="https://www.airbnb.com/obamaos" isExternal>
            odd
          </Link>{' '}
          <Link color="blue.500" href="https://www.youtube.com/watch?v=mXsksVB9rMk" isExternal>
            songwriting
          </Link>{' '}
          <Link
            color="blue.500"
            href="https://www.destructoid.com/i-gamejew-the-mushroom-singdom-9-24-07/"
            isExternal
          >
            gigs
          </Link>
          , and I was looking for something new to throw myself into.
        </Text>

        <SimpleGrid my="8" columns={[1, 1, 2]} gap={8}>
          <Box>
            <AspectRatio ratio={4 / 3}>
              <Image src="/assets/songadao-opera.jpg" objectFit="cover" />
            </AspectRatio>
            <Text color="gray.500" fontSize="medium">
              the mario opera
            </Text>
          </Box>
          <Box>
            <AspectRatio ratio={4 / 3}>
              <Image src="/assets/songadao-jewmiya.jpg" objectFit="cover" />
            </AspectRatio>
            <Text color="gray.500" fontSize="medium">
              me, as gamejew, singing to miyamoto
            </Text>
          </Box>
        </SimpleGrid>
        <Text mt="4">
          On January 1st of 2009, I set out to write a song a day for a month. 31 days went by and I
          decided to try for a year. Since January 1st of 2010, it's been indefinite.
        </Text>

        <Text mt="4">
          I've kept this project going through everything life has thrown at me, the good and the
          horrible: Through the death of my grandmother, through my marriage to the woman of my
          dreams, the birth of my two kids, hospital stays, health scares and more sick days than I
          can count (including 4 awful bouts of food poisoning).
        </Text>

        <Text mt="4">
          Song A Day is a creative outlet, it's a diary, and it's the basis of how I've made my
          living for almost a decade and a half.
        </Text>

        <Text mt="4">
          The goal of SongADAO &amp; Song A Day NFT is to finally, after 14 years, make Song A Day
          self sustaining financially.
        </Text>
      </Box>
    </Container>
  );
}

export default SongADAOIndex;
