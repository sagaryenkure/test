
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import postController from "../controllers/post.controller";

// Type-only Product definition (no Zod)
export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
};

// Zod schema for Product
const userLimitSchema = z.object({
  limit: z.number().optional().default(20),
});


export const postRouter = createTRPCRouter({
  getProducts: publicProcedure.input(userLimitSchema)
    .query(async ({input}) => postController.getProducts(input)),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: {
            connect: { id: ctx.session.user.id },
          },
        },
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      where: { createdBy: { id: ctx.session.user.id } },
      orderBy: { createdAt: "desc" },
    });

    return post ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
