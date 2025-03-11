import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../components/AuthProvider";
import { Route } from "../routes";

export const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate({
    from: Route.fullPath,
  });

  const tag = ["orange", "cute", "box"].at(Math.floor(Math.random() * 3));

  return (
    <Container py={6}>
      <Heading>This is public page</Heading>
      {isLoggedIn ? (
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
      ) : (
        <Stack mt={4} align="flex-start">
          <Text>You are not logged in, but ...</Text>
          <Button asChild>
            <Link
              to="/cat/$catType"
              params={{
                catType: tag!,
              }}
            >
              Go watch cats
            </Link>
          </Button>
        </Stack>
      )}
    </Container>
  );
};
