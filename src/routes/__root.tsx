import { Link as ChakraLink, Flex } from "@chakra-ui/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Flex justifyContent="flex-end" gap={4} px={4} py={2} boxShadow={"sm"}>
        <ChakraLink asChild>
          <Link to="/">Home</Link>
        </ChakraLink>
        <ChakraLink>
          <Link to="/about">About</Link>
        </ChakraLink>
      </Flex>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
