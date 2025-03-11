import { Container, Heading, Image } from "@chakra-ui/react";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/cat/$catType")({
  component: RouteComponent,
  params: {
    parse: (params) => ({
      catType: z.string().parse(params.catType),
    }),
  },
});

function RouteComponent() {
  const { catType } = useParams({
    from: Route.fullPath,
  });

  return (
    <Container py={6}>
      <Heading>This is cat</Heading>
      <Image height={300} src={`https://cataas.com/cat/${catType}`} />
    </Container>
  );
}
// https://cataas.com/cat/orange,cute
