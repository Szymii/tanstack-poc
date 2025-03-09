import {
  Container,
  Grid,
  GridItem,
  Heading,
  Link as ChakraLink,
  Flex,
} from "@chakra-ui/react";
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
} from "@tanstack/react-router";

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
      <Heading>Dashboard Layout (authenticated)</Heading>
      <Grid templateColumns="1fr 300px" gap={4}>
        <GridItem colSpan={1} p={4}>
          <Outlet />
        </GridItem>
        <GridItem>
          <Flex flexDir="column" gap={4}>
            <ChakraLink asChild>
              <Link to="/dashboard">Colors</Link>
            </ChakraLink>
            <ChakraLink asChild>
              <Link to="/dashboard/forms">Forms</Link>
            </ChakraLink>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}
