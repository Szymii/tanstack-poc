import { Hono } from "hono";
import { cors } from "hono/cors";

import { describeRoute, openAPISpecs } from "hono-openapi";
import * as v from "valibot";
import { apiReference } from "@scalar/hono-api-reference";

import { resolver, validator } from "hono-openapi/valibot";
const app = new Hono();
app.use(
  "/*",
  cors({
    origin: "*",
  })
);

const querySchema = v.object({
  message: v.string(),
});

const responseSchema = v.string();

// Define a route with OpenAPI documentation
app.get(
  "/",
  describeRoute({
    description: "Say hello to the user",
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": { schema: resolver(responseSchema) },
        },
      },
    },
  }),
  validator("query", querySchema),
  (c) => {
    const query = c.req.valid("query");
    return c.json({
      message: `Hello ${query?.message ?? "Hono"}!`,
    });
  }
);

// Serve OpenAPI specs
app.get("/openapi", openAPISpecs(app));

// Scalar UI route
app.get(
  "/docs",
  apiReference({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore it's working
    spec: {
      url: "/openapi",
    },
    theme: "saturn",
  })
);

export default app;
