import { edgeRouter } from "./edge";
import { mergeRouters } from "./trpc";

export const appRouter = mergeRouters(edgeRouter);
// export type definition of API
export type AppRouter = typeof appRouter;
