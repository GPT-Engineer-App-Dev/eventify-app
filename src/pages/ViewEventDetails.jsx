import { useParams } from "react-router-dom";
import { Container, Heading, Text, Box } from "@chakra-ui/react";

const ViewEventDetails = ({ events }) => {
  const { id } = useParams();
  const event = events.find((event) => event.id === id);

  if (!event) {
    return (
      <Container centerContent maxW="container.md" mt={10}>
        <Heading as="h2" size="xl">Event not found</Heading>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" mt={10}>
      <Box p={5} shadow="md" borderWidth="1px" width="100%">
        <Heading fontSize="xl">{event.title}</Heading>
        <Text mt={4}>{event.description}</Text>
      </Box>
    </Container>
  );
};

export default ViewEventDetails;