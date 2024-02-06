import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const helloRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts: { input: { text: string } }) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
