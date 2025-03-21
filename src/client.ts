import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "./openapi";

const fetchClient = createFetchClient<paths>({
  baseUrl: "http://localhost:3000",
});
export const $client = createClient(fetchClient);
