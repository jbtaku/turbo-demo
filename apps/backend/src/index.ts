import { Hono } from "hono";
import { PrismaContext, prismaContext } from "./lib/prisma";

const app = new Hono<PrismaContext>()
  .get("/", async (c) => {
    const prisma = prismaContext(c);
  })

export type AppType = typeof app;
export default app;
