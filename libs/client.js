import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "refuse",
  apiKey: process.env.API_KEY,
});
