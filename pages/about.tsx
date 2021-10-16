import { Box, Container } from '@chakra-ui/layout';
import { Heading, Center, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

function QuickLinks() {
  const quickLinks = [
    { title: 'What is Song A Day?', link: '#song-a-dao' },
    { title: 'Who is Jonathan Mann?', link: '#who-is-mann' },
    { title: 'Who does the art?', link: '#who-does-art' },
  ];

  return (
    <UnorderedList marginInlineStart="0px" my="24px">
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
          <Heading as="h1" maxW="container.md">
            About
          </Heading>
        </Center>
      </Box>

      <Container maxW="container.sm" pt="16px">
        <QuickLinks />
      </Container>
    </>
  );
}
