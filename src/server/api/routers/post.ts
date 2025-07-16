
import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

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

export const postRouter = createTRPCRouter({
  getProducts: publicProcedure
    .query(async () => {
      try {
        const response = await fetch("https://fakestoreapi.in/api/products?limit=20s");
        if (!response.ok) {
         throw new TRPCError({code:"NOT_FOUND"})
        }

        const data = await response.json() as { products: Product[] };
        return data.products  ;
      } catch (error) {
        console.error("Failed to fetch products:", error);
        return [] ;
      }
    }),

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
