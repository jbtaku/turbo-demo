import { Hono } from "hono";
import { stripe } from "../../lib/sdk";

export const stripePrices = new Hono().get("/", async (c) => {
  const prices = await stripe.prices.list({ expand: ["data.product"] });
  return c.json({ data: prices.data });
});
