import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { PrismaContext, prismaContext } from "./lib/prisma";
import { z } from "zod";
import { hc } from "hono/client";
//import { PrefectureCreateInputSchema } from "../prisma/generated/zod";

const app = new Hono<PrismaContext>()
  .get("/", async (c) => {
    const prisma = prismaContext(c);

    const prefectures = await prisma.prefecture.findMany();
    return c.json(prefectures);
  })
  .post(
    "/",
    zValidator(
      "json",
      z.object({ name: z.string(), prefectureId: z.string() })
    ),
    async (c) => {
      const prisma = prismaContext(c);
      const { name, prefectureId } = c.req.valid("json");
      const prefecture = await prisma.prefecture.create({
        data: { name, prefectureId },
      });
      return c.json(prefecture, 201);
    }
  );

export type AppType = typeof app;

export const localClient = hc<AppType>("http://localhost:8787");
export default app;
