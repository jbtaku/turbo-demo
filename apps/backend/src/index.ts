import { stripeCheckout } from "./entrypoints/stripe/checkout";
import { stripePrices } from "./entrypoints/stripe/prices";
import { init } from "./lib/sdk";

const app = init
  //.route("/stripe/prices", stripePrices)
  //.route("/stripe/checkout", stripeCheckout);

export type AppType = typeof app;

export default app;
