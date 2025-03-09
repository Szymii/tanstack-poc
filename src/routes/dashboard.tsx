import { Container, Heading } from "@chakra-ui/react";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  beforeLoad: ({ context, location }) => {
    if (!context.authenticated) {
      throw redirect({
        to: "/",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function Dashboard() {
  return (
    <Container py={6}>
      <Heading>Dashboard (authenticated)</Heading>
    </Container>
  );
}
