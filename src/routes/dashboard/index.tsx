import { Heading, Stack } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Input } from "@chakra-ui/react";
import { useState } from "react";

interface DashboardSearchParams {
  color?: string; // Optional property
}

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): DashboardSearchParams => ({
    color: (search?.color as string) || "",
  }),
});

function RouteComponent() {
  const navigate = useNavigate({ from: Route.fullPath });
  const { color } = Route.useSearch();
  const [inputValue, setInputValue] = useState(color);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    navigate({ search: (prev) => ({ ...prev, color: value }) });
  };

  return (
    <Stack>
      <Heading>Type your color</Heading>
      <Input
        placeholder="Color"
        maxW={300}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <Heading color={color}>Hello {color}</Heading>
    </Stack>
  );
}
