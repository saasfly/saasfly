import { loggerLink } from "@trpc/client";
import { experimental_createTRPCNextAppDirClient } from "@trpc/next/app-dir/client";
import { experimental_nextHttpLink } from "@trpc/next/app-dir/links/nextHttp";
import superjson from "superjson";

import type { AppRouter } from "@saasfly/api";

import { getUrl } from "./shared";

export const trpc = experimental_createTRPCNextAppDirClient<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: () => true,
        }),
        experimental_nextHttpLink({
          transformer: superjson,
          batch: true,
          url: getUrl(),
          headers() {
            return {
              "x-trpc-source": "client",
            };
          },
        }),
      ],
    };
  },
});
export { type RouterInputs, type RouterOutputs } from "@saasfly/api";
