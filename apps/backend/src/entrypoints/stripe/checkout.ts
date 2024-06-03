import { Hono } from "hono";
import { stripe } from "../../lib/sdk";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const stripeCheckout = new Hono().post(
  "/",
  zValidator("json", z.object({ price: z.string() })),
  async (c) => {
    const { price } = c.req.valid("json");
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000",
    });
    return c.json(
      {
        checkout_url: session.url,
      },
      200
    );
  }
);
