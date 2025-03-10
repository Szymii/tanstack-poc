import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../components/AuthProvider";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate({
    from: Route.fullPath,
  });

  return (
    <Container py={6}>
      <Heading>This is public page</Heading>
      {isLoggedIn && (
        <Stack mt={4} align="flex-start">
          <Text>Hi, you are logged in now, go to dashboard</Text>
          <Button
            onClick={() =>
              // assume this is async
              // or if is sync use link
              navigate({
                to: "/dashboard",
              })
            }
          >
            Go to dashboard
          </Button>
        </Stack>
      )}
    </Container>
  );
}
