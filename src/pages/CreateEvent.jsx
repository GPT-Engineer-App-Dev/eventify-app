import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Textarea } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const CreateEvent = ({ addEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: uuidv4(),
      title,
      description,
    };
    addEvent(newEvent);
    setTitle("");
    setDescription("");
  };

  return (
    <Container centerContent maxW="container.md" mt={10}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Create Event</Heading>
        <Input
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          isRequired
        />
        <Button type="submit" colorScheme="teal" size="lg">Create Event</Button>
      </VStack>
    </Container>
  );
};

export default CreateEvent;