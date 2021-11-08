import NextLink from 'next/link';

import {
  Box,
  Heading,
  Container,
  Image,
  Text,
  Stack,
  ListItem,
  Link,
  List,
  SimpleGrid,
  AspectRatio,
} from '@chakra-ui/react';
import Footer from '../components/Footer';

export default function NittyGritty() {
  return (
    <>
      <Box
        bgImage="url('/assets/location_misquomicutri.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="xs"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1">DAO Nitty Gritty</Heading>
      </Box>

      <Container p={8} maxW="xl">
        <Stack direction="column" fontSize="lg" spacing={6}>
          <Text>
            SongADAO is a legally registered co-op LCA (Limited Cooperative Association) in the
            state of Colorado.
          </Text>

          <Text>
            The initial reason we went this route was mainly to make it so the DAO could legally own
            Song A Day's copyright and collect royalties. While any legal format could work for
            this, the advantage of a co-op is the ability for members to co-own those rights,{' '}
            <em>and</em> receive distributions in an equitable manner based on their collaboration
            with the DAO.
          </Text>

          <Text>
            You can read the DAO's bylaws{' '}
            <NextLink href="/assets/nitty-gritty/SongDAO LCA bylaws.pdf">
              <Link color="brand.teal">here</Link>
            </NextLink>
            . It's a legal document. It's dense.
          </Text>

          <Text>
            Please note: Almost all aspects of this can (and will) change. Everything presented here
            is the beginning. The DAO is meant to be shaped and moulded by its members. There's many
            key questions that we've been saving in order to put them directly to the members!
          </Text>

          <Text>
            The DAO has 5 founders. There's{' '}
            <NextLink href="https://twitter.com/songadaymann" passHref>
              <Link color="brand.teal">Jonathan Mann</Link>
            </NextLink>
            ,{' '}
            <NextLink href="https://twitter.com/juliana_mae" passHref>
              <Link color="brand.teal">Juliana Mann</Link>
            </NextLink>{' '}
            (Jonathan's wife),{' '}
            <NextLink href="https://twitter.com/bmann" passHref>
              <Link color="brand.teal">Boris Mann</Link>
            </NextLink>{' '}
            (no relation), Matt Condon{' '}
            <NextLink href="https://twitter.com/1ofthemanymatts" passHref>
              <Link color="brand.teal">(1ofthemanyMatts)</Link>
            </NextLink>{' '}
            and{' '}
            <NextLink href="https://twitter.com/NFTyHussle" passHref>
              <Link color="brand.teal">Sahil Mehta</Link>
            </NextLink>
            . These 5 people also represent the initial board of directors. They will also initially
            be the five that sign the Gnosis Safe transactions.
          </Text>

          <Text>
            To be eligible to become a member of SongADAO, you must hold a Song A Day NFT.
          </Text>

          <Text>
            Once you own a S.A.D NFT, you become a "<strong>Listener</strong>".
          </Text>
          <List listStyleType="none" spacing={4}>
            <ListItem>
              <Text>
                <strong>Listeners</strong> are not yet members. As a Listener, you get full access
                to the gated Discord, and vote in the Snapshot polls. In Snapshot polls, one S.A.D
                NFT represents one vote. The snapshot polls are non-binding. You can weigh in on a
                wide variety of topics having to do with the creative direction of Song A Day and
                the DAO.
              </Text>
              <Text>
                The one thing these polls{' '}
                <strong>
                  <em>won't</em>
                </strong>{' '}
                be about is the DAO's treasury.{' '}
              </Text>
            </ListItem>
          </List>

          <Text>
            If you want to take the next step and become a full, legal member of the co-op, you'll
            have to get verified through{' '}
            <NextLink href="https://www.brightid.org/about-us" passHref>
              <Link color="brand.teal">BrightID</Link>
            </NextLink>
            . Once you've done that, you'll be able to mint your very own SongADAO PFP, which is
            your membership token in the DAO.
          </Text>

          <SimpleGrid columns={[1, 2]} spacing={8}>
            <Box>
              <AspectRatio ratio={4 / 3} maxW="md">
                <Image
                  src="/assets/nitty-gritty/dave-1.png"
                  alt="illustration of a man showing confusion"
                />
              </AspectRatio>
              <Text fontSize="sm" lineHeight="1.25" pt="2" color="gray.500">
                pfp example 1
              </Text>
            </Box>
            <Box>
              <AspectRatio ratio={4 / 3} maxW="md">
                <Image
                  src="/assets/nitty-gritty/dave-2.png"
                  alt="illustration of a man showing irritation"
                />
              </AspectRatio>
              <Text fontSize="sm" lineHeight="1.25" pt="2" color="gray.500">
                pfp example 2
              </Text>
            </Box>
            <Box>
              <AspectRatio ratio={4 / 3} maxW="md">
                <Image
                  src="/assets/nitty-gritty/dave-3.png"
                  alt="illustration of a man showing a goofy face"
                />
              </AspectRatio>
              <Text fontSize="sm" lineHeight="1.25" pt="2" color="gray.500">
                pfp example 3
              </Text>
            </Box>
            <Box>
              <AspectRatio ratio={4 / 3} maxW="md">
                <Image
                  src="/assets/nitty-gritty/dave-4.png"
                  alt="illustration of a man showing anger"
                />
              </AspectRatio>
              <Text fontSize="sm" lineHeight="1.25" pt="2" color="gray.500">
                pfp example 4
              </Text>
            </Box>
          </SimpleGrid>

          <Text>
            Now that you're verified and have your PFP, you are officially a "<strong>Voter</strong>
            ".
          </Text>
          <List listStyleType="none" spacing={4}>
            <ListItem>
              <Text>
                <strong>Voters</strong> are members that have been verified through BrightID. They
                can do all the things that Listeners do, but voters can also participate in binding,
                on-chain votes on matters concerning the treasury.
              </Text>
              <Text>
                How do we deploy these funds? That's the question a voter can answer. In these
                votes, it's one person, one vote.
              </Text>
            </ListItem>
          </List>

          <Text>
            Finally, if you want to take the final step to become a "<strong>Builder</strong>",
            here's what you've got to do.
          </Text>
          <List listStyleType="none" spacing={4}>
            <ListItem>
              <Text>
                <strong>Builders</strong> are verified with BrightID AND they have given their name
                and address to the board of the DAO (this information is not shared publicly in any
                way).
              </Text>
              <Text>
                In return, Builders are able to take part in what's called Patronage Activity (PA).
                You can think of PA as anything a member does that furthers the cause of SongADAO.
                Eventually, we'd like this to include everything from tweeting about Song A Day,
                commenting on the songs on YouTube and being active in the Discord. To begin with,
                we are including things that simpler to track. This includes buying a Song A Day
                NFT, getting a song place in a movie or TV show, collaborating with Jonathan on a
                song, remixing a song, doing a cover of a song, etc.
              </Text>
              <Text>
                We believe this is more sustainable than the typical token model of most DAOs.
                Patronage Activity in a co-op sidesteps the entire question of "is it a security?".
                It also has the added benefit of inviting less speculation into the DAO, which is
                good for the long term health of any community.
              </Text>
            </ListItem>
          </List>
          <Box>
            <AspectRatio ratio={4 / 3} maxW="md">
              <Image
                src="/assets/nitty-gritty/circles-of-song-a-day.png"
                alt="The circles of song a day"
              />
            </AspectRatio>
          </Box>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
