import { Container, VStack, Heading, Box, Text, Button, Flex } from "@chakra-ui/react";

const ViewEvents = ({ events, deleteEvent, editEvent }) => {
  return (
    <Container centerContent maxW="container.md" mt={10}>
      <VStack spacing={4}>
        <Heading as="h2" size="xl">View Events</Heading>
        {events.length === 0 ? (
          <Text>No events available.</Text>
        ) : (
          events.map((event) => (
            <Box key={event.id} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{event.title}</Heading>
              <Text mt={4}>{event.description}</Text>
              <Flex mt={4} justifyContent="space-between">
                <Button colorScheme="blue" onClick={() => editEvent(event.id)}>Edit</Button>
                <Button colorScheme="red" onClick={() => deleteEvent(event.id)}>Delete</Button>
              </Flex>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default ViewEvents;