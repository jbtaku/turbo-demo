import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { Context } from "hono";
import Stripe from "stripe";

let prisma
let stripe: Stripe;
let isAlreadyInited = false;

const init = new Hono().all("*", async (c: Context, next) => {
  if (!isAlreadyInited) {
    isAlreadyInited = true;
    const adapter = new PrismaD1(c.env.DB);
    prisma = new PrismaClient({ adapter });
    stripe = new Stripe(c.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-04-10",
    });
  }
  await next();
});

export {init, prisma, stripe}