import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { PrismaContext, prismaContext } from "./lib/prisma";
import { PrefectureCreateInputSchema } from "../prisma/generated/zod";

const app = new Hono<PrismaContext>()
  .get("/", async (c) => {
    const prisma = prismaContext(c);

    const prefectures = await prisma.prefecture.findMany();
    return c.json(prefectures);
  })
  .post("/", zValidator("json", PrefectureCreateInputSchema), async (c) => {
    const prisma = prismaContext(c);
    const { name, prefectureId } = c.req.valid("json");
    const prefecture = await prisma.prefecture.create({
      data: { name, prefectureId },
    });
    return c.json(prefecture, 201);
  });

export * from "@hono/zod-validator";
export * from "../prisma/generated/zod";
export * from "./lib/prisma"
export type AppType = typeof app;
export default app;
