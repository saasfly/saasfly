import type { NextRequest } from "next/server";
import { initTRPC } from "@trpc/server";
import { getToken, type JWT } from "next-auth/jwt";
import { ZodError } from "zod";

import { transformer } from "./transformer";

interface CreateContextOptions {
  req?: NextRequest;
}

export const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    ...opts,
  };
};

export const createTRPCContext = (opts: { req: NextRequest }) => {
  return createInnerTRPCContext({
    req: opts.req,
  });
};

export const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;
export const procedure = t.procedure;
export const mergeRouters = t.mergeRouters;

export const protectedProcedure = procedure.use(async (opts) => {
  const { req } = opts.ctx;
  const nreq = req!;
  const jwt = await handler(nreq);
  return opts.next({ ctx: { req, userId: jwt?.id } });
});

async function handler(req: NextRequest): Promise<JWT | null> {
  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  return await getToken({ req });
}
