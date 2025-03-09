import { Container, Heading } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Container py={6}>
      <Heading>This is public page</Heading>
    </Container>
  );
}
