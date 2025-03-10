import { Link as ChakraLink, Flex } from "@chakra-ui/react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
  useRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ColorModeButton } from "../components/ui/color-mode";
import { Select } from "../components/Select";
import { useAuth } from "../components/AuthProvider";
import { useEffect } from "react";

interface RouteContext {
  authenticated: boolean;
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: Layout,
});

function Layout() {
  const { context, setContext } = useAuth();
  const router = useRouter();

  useEffect(() => {
    router.invalidate();
  }, [context, router]);

  return (
    <>
      <Flex justifyContent="flex-end" gap={4} px={4} py={2} boxShadow={"sm"}>
        <ChakraLink asChild>
          <Link to="/">Home</Link>
        </ChakraLink>
        <ChakraLink asChild>
          <Link to="/dashboard">Dashboard</Link>
        </ChakraLink>
        <Select
          value={context}
          onValueChange={setContext}
          options={[
            { label: "Logged in", value: "logged-in" },
            { label: "Unauthenticated", value: "unauthenticated" },
          ]}
          size="sm"
          maxW={200}
        />
        <ColorModeButton />
      </Flex>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
