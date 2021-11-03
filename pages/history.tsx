import NextLink from 'next/link';
import Head from 'next/head';
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';

import { LinkIcon } from '@chakra-ui/icons';

import Footer from '../components/Footer';

export default function History() {
  return (
    <>
      <Head>
        <title>History | Song a Day World</title>
        <meta title="description" content="Learn the story of how I arrived at Song a Day" />
      </Head>
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
        <Heading as="h1">History</Heading>
      </Box>

      <Container p={8} maxW="xl">
        <Text fontSize="lg">
          One of my rules about Song A Day is that I will never chase trends. I will only write
          songs about things I really, truly want to write about.
        </Text>
        <Text fontSize="lg" pt={4}>
          As it happens, occasionally my interests overlap with the zeitgeist, and that's when viral
          songs happen. What follows is a look at the viral songs and milestones of Song A Day.
        </Text>
        <Box py="8">
          <Box borderWidth="2px" rounded="md" p="4" maxW="sm">
            <Text
              size="sm"
              letterSpacing="wide"
              casing="uppercase"
              fontWeight="semibold"
              color="gray.500"
            >
              Quick Links
            </Text>
            <List spacing="2" pt="2">
              <ListItem>
                <NextLink href="#rachel-maddow">
                  <Link color="brand.teal">
                    <LinkIcon /> 2009 - The Rachel Maddow Show
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="#steve-jobs-danced">
                  <Link color="brand.teal" casing="capitalize">
                    <LinkIcon /> 2010 - Steve Jobs Danced to my Song
                  </Link>
                </NextLink>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box>
          <Tag size="lg" variant="outline">
            2009
          </Tag>
          <Stack direction="column" spacing={4} id="rachel-maddow" pt={2}>
            <Heading as="h2">The Rachel Maddow Show</Heading>
            <Box
              bgImage="url('/assets/history/illustrations/2009.png')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="32"
              rounded="md"
            ></Box>

            <Text>
              The very first Song A Day to go viral was about Paul Krugman, the Nobel Prize winning
              economist. I ended up singing the song live on MSNBC's Rachel Maddow show
            </Text>
            <Box>
              <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
                <iframe
                  src="https://www.youtube.com/embed/W4L6hEbRXP4"
                  title="THE RACHEL MADDOW SHOW"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            </Box>
          </Stack>
        </Box>

        <Box pt={16}>
          <Tag size="lg" variant="outline">
            2010
          </Tag>
          <Stack id="steve-jobs-danced" spacing={4} pt="2">
            <Heading as="h2">Steve Jobs Danced To My Song</Heading>
            <Box
              bgImage="url('/assets/history/illustrations/2010.png)"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="32"
              rounded="md"
            ></Box>
            <Text>
              During the first few years of Song A Day, I was making my living entering online video
              contests.
            </Text>

            <Text>
              One of the contests I entered was a jingle competition for Microsoft’s recently
              launched search engine, Bing. The Bingle contest was simple: Make the best jingle and
              video showcasing Bing and win a $500 American Express gift card. It wasn’t a lot of
              money but the due date was just around the corner, and the contest would be decided by
              judges, not votes (these were my two biggest requirements for entering a contest) so
              banged out a song in under an hour and in another 45 minutes had posted my video.
              Another day, another contest.
            </Text>

            <Text>
              About a week later, I found out that I won. On the one hand, this was surprising,
              because I thought that my song and video sucked, but on the other hand, my closest
              competition was a man staring into the camera singing, “You’ve got to Bing it Bing it,
              You’ve got to Bing it Bing it.”
            </Text>

            <Text>
              A few days later, a friend linked me to an article on TechCrunch. MG Siegler, a
              preeminent tech writer, had written a scathing article with the headline:
            </Text>

            <Image
              src="/assets/history/the worst jingle ever.png"
              alt="Online article claiming Bing has succeeded.. in finding tthe worst single ever."
            />

            <Text>
              Now, I’m quite used to being made fun of on the internet. It comes with the territory.
              The best thing you can do is ignore these types of comments. This was different
              though. TechCrunch was so high profile and{' '}
              <NextLink href="https://www.gv.com/team/mg-siegler/">
                <Link color="brand.teal">MG</Link>
              </NextLink>{' '}
              was such a well known commentator that I felt like it begged a response.
            </Text>

            <Text>
              <NextLink href="http://www.youtube.com/watch?v=ybsRCQy_3xQ">
                <Link color="brand.teal">So I wrote a song about him</Link>
              </NextLink>
              , using text from his post as lyrics: “Sure, the song will get stuck in your head/ but
              so does the sound of seals barking or cows dying.”
            </Text>

            <Text>
              I posted the song and sent it to him, and within minutes, my song-response was up on{' '}
              <NextLink href="https://techcrunch.com/2009/08/06/its-on-bing-jingle-guy-proves-he-sucks-less/">
                <Link color="brand.teal">TechCrunch</Link>
              </NextLink>
              . He loved it even though (or maybe because) it made fun of him. This led to a strange
              relationship between me and TechCrunch — I was unofficially their{' '}
              <NextLink href="http://techcrunch.com/search/jonathan+mann#stq=jonathan%20mann&stp=1">
                <Link color="brand.teal">official songwriter</Link>
              </NextLink>
              . Anytime I wrote about something tech related, I’d send it to MG and most of the
              time, he’d post it. I played at their annual{' '}
              <NextLink href="http://www.youtube.com/watch?v=IrGI8r-kxDE">
                <Link color="brand.teal">“Crunchies”</Link>
              </NextLink>{' '}
              award show. I even learned that TechCrunch’s founder, the controversial Michael
              Arrington, used my MG Siegler song as his ringtone for a few months.
            </Text>

            <Text>
              So. Fast forward to 2010. I had just learned that{' '}
              <NextLink href="http://www.youtube.com/watch?v=50R5qPDSXF0">
                <Link color="brand.teal">I lost a big video contest</Link>
              </NextLink>
              , and I was feeling pretty down. It also happened to be the eve of Apple’s
              “Antenna-Gate” press conference. The anti-Apple hype was at a fever pitch, and I
              thought the whole non-story was ridiculous. I decided to write a song defending Apple.
              I hoped that MG would post it, and maybe I’d get some decent traffic. I wrote the song
              in about 2 hours and spent another hour on{' '}
              <NextLink href="http://www.youtube.com/watch?v=VKIcaejkpD4">
                <Link color="brand.teal">the video</Link>
              </NextLink>
              . I posted the song, sent it to MG and went to bed.
            </Text>

            <Text>
              The next morning I woke to a flurry of activity in my inbox, including an email that
              appeared to be from Apple. I read the email and decided it was fake — someone was
              trolling me. I was in the shower when my phone rang. It was Apple PR. For real. Could
              they use my video to open the press conference, they wondered? Um, yes. Sure, uh, how
              should I send it to you? Jesus Christ.
            </Text>

            <Image
              src="/assets/history/email from apple.png"
              alt="An email from Apple about getting in touch by phone"
            />
            <Text>
              Later that morning, I watched online as the song and video I had made in 3 hours the
              night before played before an audience of journalists at Apple HQ. Then Steve Jobs
              came out on stage and said, “Thanks for coming. We found that on YouTube this morning
              and couldn’t help but want to share it.” It was one of the most surreal moments of my
              life. I heard later from the PR rep that Steve had been dancing off stage as the song
              played. If you watch the video of the event, there’s a few seconds, right as my song
              ends, that you can see him bopping his way on to the stage.
            </Text>

            <Heading color="tomato" autoSave="h2">
              INSERT BILL DANCING
            </Heading>

            <Text>Look closely. He’s dancing.</Text>

            <Text>
              A few days after the keynote, I got commissioned to write a{' '}
              <NextLink href="http://www.youtube.com/watch?v=3FzuZdZLt54">
                <Link color="brand.teal">birthday song for Steve Wozniak</Link>
              </NextLink>
              . I was invited to his 60th birthday party, where I met the cofounder of TEDMED, who
              commissioned me to write a birthday song for the founder of TED,{' '}
              <NextLink href="http://www.youtube.com/watch?v=tVgLKT242ws">
                <Link color="brand.teal">Richard Saul Wurman</Link>
              </NextLink>
              . The following year TEDMED had me back — this time performing{' '}
              <NextLink href="http://www.youtube.com/watch?v=Z-7lpggyqMA">
                <Link color="brand.teal">songs written on-the-fly</Link>
              </NextLink>{' '}
              about the conference.
            </Text>

            <Text>
              This practice, fun songs written on the spot for conferences, became the majority of
              my income, right up until the pandemic happened.
            </Text>
          </Stack>
        </Box>

        <Box pt={16}>
          <Tag size="lg" variant="outline">
            2011
          </Tag>
          <Stack id="hitting-song-1000" spacing={4} pt="2">
            <Heading as="h2">Hitting Song 1000</Heading>
            <Box
              bgImage="url('/assets/history/illustrations/2011.png')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="32"
              rounded="md"
            ></Box>
            <Text>In the lead up to song number 1,000, I launched a successful Kickstarter:</Text>
            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.kickstarter.com/projects/jonathanmann/song-a-day-the-album/widget/video.html"
                title="Song-A-Day: The Album Kickstarter"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </AspectRatio>
            <Text>
              I raised just over $10,000 so that I could hire a bunch of my friends to come and do
              nothing but make music with me for a whole month. We had a blast.
            </Text>
          </Stack>
        </Box>

        <Box pt={16}>
          <Tag size="lg" variant="outline">
            2012
          </Tag>
          <Stack id="hitting-song-1000" spacing={4} pt="2">
            <Heading as="h2">The Break Up Song (and Anderson Cooper)</Heading>
            <Box
              bgImage="url('/assets/history/illustrations/2012.png')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="32"
              rounded="md"
            ></Box>
            <Text>My ex and I had been together for five years.</Text>
            <Text>
              Eventually, we knew we had to break up, and it was really sad but amicable. At some
              point, when we were broken up by still living together, I suggested we make a song
              together, announcing to all our friends and loved ones that we were splitting up. I
              didn't want to have to explain it over and over to everyone. We'd just make the video,
              post it to Facebook, and then everyone would know.
            </Text>
            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.youtube.com/embed/JoXtkK9d33o"
                title="We've Got To Break Up (Song A Day #1435)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Text>
              The song instantly went insanely viral on Facebook. It was hilarious. Over 1 millions
              views in a few days.
            </Text>

            <Text>
              After we broke up for good, I finally moved out and got my own place. I couldn't
              afford a Brooklyn apartment on my own, and I was having a really hard time finding a
              roommate. So of course I wrote another song:
            </Text>
            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.youtube.com/embed/VZJqUyS5tvc"
                title="Come Live With Me In Brooklyn (Song A Day #1492)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Text>
              After this song, I appeared on Anderson Cooper's short lived daytime talk show.
            </Text>
            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.youtube.com/embed/cL937M2QCJM"
                title="Jonathan Mann on Anderson Cooper"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </Stack>
        </Box>

        <Box pt={16}>
          <Tag size="lg" variant="outline">
            2013-17
          </Tag>
          <Stack id="hitting-song-1000" spacing={4} pt="2">
            <Heading as="h2">My Grandma Died And My Kids Were Born</Heading>
            <Box
              bgImage="url('/assets/history/illustrations/2013.png')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="32"
              rounded="md"
            ></Box>
            <Text>These milestones speak for themselves...</Text>

            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.youtube.com/embed/rmPeW2VrU7E"
                title="Death, Death, Death (Song A Day #1512)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>

            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.youtube.com/embed/sNKNhlKplcA"
                title="My Little Jupiter Mann | Song A Day #1951"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>

            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.youtube.com/embed/CY5w96SwvV8"
                title="My Little Epiphany Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </Stack>
        </Box>

        <Box pt={16}>
          <Tag size="lg" variant="outline">
            2014
          </Tag>

          <Stack id="hitting-song-1000" spacing={4} pt="2">
            <Heading as="h2">Hitting Song 2000</Heading>
            <Box
              bgImage="url('/assets/history/illustrations/2014.png')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="32"
              rounded="md"
            ></Box>
            <Text>
              I got to Song A Day #2000 right around the time my first child was born. This is the
              closest I've ever come to quitting. It seemed like the right time: I had an infant
              son. I was about to hit 2000. It just felt almost cosmic, in a way.
            </Text>

            <Text>But then I woke up on day 2001 and just kept going.</Text>

            <Text>
              For Song #2000, I made a video out of all my previous videos. 2000 videos in one.
            </Text>

            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.youtube.com/embed/4pH-bEzMCZM"
                title="2000 Songs In 2000 Days"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </Stack>
        </Box>

        <Box pt={16}>
          <Tag size="lg" variant="outline">
            2016
          </Tag>

          <Stack id="hitting-song-1000" spacing={4} pt="2">
            <Heading as="h2">The Hillary Shimmy Song</Heading>
            <Box
              bgImage="url('/assets/history/illustrations/2016.png')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="32"
              rounded="md"
            ></Box>
            <Text>
              After the first debate between Hillary and Trump, I made this song that went
              incredibly viral - one of my fastest spreading songs ever. It got to 2 million views
              in a few hours.
            </Text>

            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.youtube.com/embed/Xs0AupRWyC0"
                title="The Hillary Shimmy Song"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Text>
              One of Hillary's dark money PACs even purchased the rights to the song, and they used
              it in a Snapchat filter they released the day of the election. John Legend posted a
              video of himself on Twitter using it. I'm pretty sure I cost her the election.
            </Text>
            <Image src="/assets/history/shimmy filter.png" alt="Shimmy filter" />
          </Stack>
        </Box>

        <Box pt={16}>
          <Tag size="lg" variant="outline">
            2016-17
          </Tag>
          <Stack id="hitting-song-1000" spacing={4} pt="2">
            <Heading as="h2">Songonauts!</Heading>
            <Box
              bgImage="url('/assets/history/illustrations/2016-2017.png')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="32"
              rounded="md"
            ></Box>
            <Text>
              In 2016, I hooked up with a really amazing fiction podcast called The Truth to make
              Songonauts, a podcast about a down-on-their-luck band that finds a magical drum
              machine that transports them *inside* their songs.
            </Text>

            <Text>
              To this day, it's one of the things I'm most proud of having made. It's 8 episodes,
              each about 20 minutes long. If you like 80s cartoons, fictional bands and fun, you
              should definitely{' '}
              <NextLink href="http://www.thetruthpodcast.com/songonauts">
                <Link color="brand.teal">give it a listen!</Link>
              </NextLink>
            </Text>

            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.youtube.com/embed/l2BjPPeE9f8"
                title="Songonauts Animation!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </Stack>
        </Box>

        <Box pt={16}>
          <Tag size="lg" variant="outline">
            2017-PRESENT
          </Tag>
          <Stack id="hitting-song-1000" spacing={4} pt="2">
            <Heading as="h2">Discovering Digital Scarcity</Heading>
            <Box
              bgImage="url('/assets/history/illustrations/2017.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="32"
              rounded="md"
            ></Box>
            <Text>
              I was playing at a conference in rural Ontario, when I saw a talk by{' '}
              <NextLink href="https://twitter.com/buchmanster">
                <Link color="brand.teal">Ethan Buchman</Link>
              </NextLink>{' '}
              that opened my eyes to the possibilities of art and the blockchain.
            </Text>

            <Text>As soon as I got home, I sent this tweet:</Text>
            <Heading>
              INSERT TWEET https://twitter.com/songadaymann/status/907349683999330306?s=21
            </Heading>
            <Text>
              The "weird project idea" I had way back then is the very project that you are thinking
              about becoming part of, today! As a result of this tweet, my friend Boris helped me
              set up Metamask and sent me my first bit of eth. Then, he told me about CryptoPunks
              and I wrote a song about it the very next week:
            </Text>
            <Heading>
              INSERT TWEET https://twitter.com/songadaymann/status/909437173824442368?s=21
            </Heading>
            {/* <Text>
              To this day, it's one of the things I'm most proud of having made. It's 8 episodes,
              each about 20 minutes long. If you like 80s cartoons, fictional bands and fun, you
              should definitely{' '}
              <NextLink href="http://www.thetruthpodcast.com/songonauts">
                <Link color="brand.teal">give it a listen!</Link>
              </NextLink>
            </Text> */}

            <Text>(note: this song will be among those available during the Big S.A.D Drop)</Text>

            <Text>
              It was obvious to me from the moment I saw CryptoPunks that I needed to build
              something similar with my songs. Music, maybe more than any other medium, has become
              so devalued in our culture that even bands that "make it" can still struggle to make
              ends meet through their music alone. You have to hustle from 1000 different angles
              just to cobble together a living. That's where I've been for the entirety of my
              career.
            </Text>

            <Text>Enter NFTs.</Text>

            <Text>
              I didn't know all the details, but I knew, right from the very beginning, that digital
              scarcity could unlock a whole new avenue for musicians.
            </Text>

            <Text>
              In late 2017 I launched something called{' '}
              <NextLink href="https://www.jonathanmann.net/iso">
                <Link color="brand.teal">The Initial Song Offering</Link>
              </NextLink>{' '}
              in an ill fated attempt to raise the funds to hire solidity developers. I gave talks
              all around NYC and beyond about NFTs, pitching this project to different people, with
              varying degrees of success.
            </Text>
            <Box textAlign="center">
              <Image src="/assets/history/jmann-talk.png" alt="Jonathan talks about SongADay" />
              <Text fontSize="sm" lineHeight="1.25" pt="2" color="gray.500">
                October 2017, giving my very first talk about Song A Day NFT - showing people
                CryptoPunks
              </Text>
            </Box>

            <Text>
              Throughout this process, I also became part of a small cohort of folks obsessed with
              the idea that would become NFTs.
            </Text>

            <Text>
              Along with Matt Condon, I started the very first{' '}
              <NextLink href="https://anchor.fm/digitallyrare">
                <Link color="brand.teal">NFT focused podcast</Link>
              </NextLink>{' '}
              in June of 2018. In October of that year, I performed at Devcon in Prague, the largest
              Ethereum gathering in the world. I even got Vitalik Buterin to sing:
            </Text>

            <AspectRatio maxW="xl" ratio={16 / 9} justifyContent="center">
              <iframe
                src="https://www.youtube.com/embed/D6_d5NODsdQ"
                title="BUIDL!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>

            <Text>
              Then I did some hosting duties and performed at ETH Denver in February of 2019:
            </Text>

            <Heading>
              INSERT TWEET https://twitter.com/christine_dkim/status/1096614870370283520?s=21
            </Heading>
            <Text>
              Once the long crypto winter began, and especially once COVID hit, I almost abandoned
              the idea entirely. My income took a huge hit, I was home with my 2 small children, and
              I had no extra time to devote to it. Everything stalled.
            </Text>

            <Text>
              But then things started to pick up again, and I decided to launch the pre-sale,
              minimum viable version of the project on OpenSea's shared storefront contract. No
              solidity devs needed!
            </Text>

            <Text>
              Year 1 sold out in 30 min. The funds from that sale (as well as my side project{' '}
              <NextLink href="https://fuckintrolls.lol/">
                <Link color="brand.teal">The Fuckin Trolls</Link>
              </NextLink>
              ) have given me the means to finally bring this project to life, exactly as I
              envisioned it all those years ago.
            </Text>
          </Stack>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
