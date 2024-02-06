import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@saasfly/api";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "@saasfly/api";
