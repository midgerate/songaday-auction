import { Box, Container } from '@chakra-ui/layout';
import { Heading, Center, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';

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
        <UnorderedList marginInlineStart="0px">
          <ListItem listStyleType="none" my="16px">
            <Link color="teal.500" href="#">
              <LinkIcon mr="4px" /> What is Song A Day?
            </Link>
          </ListItem>
          <ListItem listStyleType="none" my="16px">
            <Link color="teal.500" href="#">
              <LinkIcon mr="4px" /> Who is Jonathan Mann?
            </Link>
          </ListItem>
          <ListItem listStyleType="none" my="16px">
            <Link color="teal.500" href="#">
              <LinkIcon mr="4px" /> Who does the art?
            </Link>
          </ListItem>
        </UnorderedList>
      </Container>
    </>
  );
}
