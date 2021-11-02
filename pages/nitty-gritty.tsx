import NextLink from 'next/link';

import { Box, Heading, Container, Text, Stack, ListItem, Link, List } from '@chakra-ui/react';
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
          <Text>SongADAO is a legally registered coop LCA in the state of Colorado.</Text>

          <Text>
            The reason we went this route was mainly to make it so the DAO could legally own
            copyright (in the eyes of the law) and therefore collect the royalties from that
            copyright. However, being a coop LCA has other advantages, such as utilizing a concept
            called Patronage Activity. Let's get into it.
          </Text>

          <Text>
            First of all, you can read the DAO's bylaws{' '}
            <NextLink href="/bylaws">
              <Link color="brand.teal">here</Link>
            </NextLink>
            . It's a legal document. It's dense.
          </Text>

          <Text>
            Please note: Almost all aspects of this can (and will) change. Everything presented here
            is the beginning. The DAO is meant to be shaped and moulded by its members. There's many
            key questions that we've been saving in order to put them directly to the members.
          </Text>

          <Text>
            The DAO has 4 founders. There's Jonathan Mann, Boris Mann (no relation), Matt Condon and
            Sahil Mehta. These four guys also represent the initial board of directors. They will
            also initially be the four that sign the Gnosis Safe transactions.
          </Text>

          <Text>
            The basic membership requirement is simply that you hold a Song A Day PFP. The PFP also
            acts as the voting token. You get the PFP when you buy a Song A Day NFT.
          </Text>

          <Text>Beyond that, there are 3 classes of membership in the DAO:</Text>

          <List listStyleType="none" spacing={4}>
            <ListItem>
              <strong>Listeners</strong> — These are members that are completely anonymous. They can
              participate in discussions on Discord, and vote in the Snapshot polls. In Snapshot
              polls, one PFP = one vote, and there is no limit to the number of votes you can use.
              These polls are on a wide variety of topics. The one thing these polls <em>won't</em>{' '}
              be about is anything having to do with the treasury. The polls are also non-binding.
            </ListItem>
            <ListItem>
              <strong>Doers</strong> — These are members that have been verified through BrightID.
              In addition to being able to do everything Listeners can do, Doers can also
              participate in binding, on-chain votes on matters concerning the treasury.
            </ListItem>
            <ListItem>
              <strong>Builders</strong> — These members are also BrightID verified. In addition,
              they have given their name and address to the DAO (this information is not shared
              publicly in any way).
            </ListItem>
          </List>
          <Text>
            In return, Builders are able to take part in what's called Patronage Activity (PA). You
            can think of PA as anything a member does that furthers the cause of the coop DAO.
            Eventually, we'd like this to include everything from tweeting about Song A Day,
            commenting on the songs on YouTube and being active in the Discord. To begin with, we
            are including things that simpler to track. This includes buying a Song A Day NFT,
            getting a song place in a movie or TV show, collaborating with Jonathan on a song,
            remixing a song, doing a cover of a song, etc.
          </Text>

          <Text>
            For each bit of PA you do, you'll get a POAP. These POAPs will be worth a percentage of
            the surplus revenue of SongADAO. At the end of the year, your percentages are added up,
            and you're paid for all your hard work on behalf of the DAO.
          </Text>

          <Text>
            We believe this is more sustainable than the typical token model of most DAOs. Patronage
            Activity in a coop sidesteps the entire question of "is it a security?". It also has the
            added benefit of inviting less speculation into the DAO, which is good for the long term
            health of any community.
          </Text>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
