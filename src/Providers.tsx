import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { system } from "./system.ts";

import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ColorModeProvider } from "./components/ui/color-mode";
import { AuthProvider, useAuth } from "./components/AuthProvider.tsx";

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  context: {
    authenticated: false,
  },
});

const queryClient = new QueryClient();

const WithAuth = () => {
  const { isLoggedIn } = useAuth();
  return (
    <RouterProvider router={router} context={{ authenticated: isLoggedIn }} />
  );
};

export const Providers = () => {
  return (
    <ChakraProvider value={system}>
      <QueryClientProvider client={queryClient}>
        <ColorModeProvider>
          <AuthProvider>
            <WithAuth />
          </AuthProvider>
        </ColorModeProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
