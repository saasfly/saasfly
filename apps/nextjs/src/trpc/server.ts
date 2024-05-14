import { cookies } from "next/headers";
import { loggerLink } from "@trpc/client";
import { experimental_nextHttpLink } from "@trpc/next/app-dir/links/nextHttp";
import { experimental_createTRPCNextAppDirServer } from "@trpc/next/app-dir/server";
import superjson from "superjson";

import type { AppRouter } from "@saasfly/api";

import { getUrl } from "~/trpc/shared";

/**
 * This client invokes procedures directly on the server without fetching over HTTP.
 */
export const trpc = experimental_createTRPCNextAppDirServer<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: () => true,
        }),
        experimental_nextHttpLink({
          batch: true,
          url: getUrl(),
          transformer: superjson,
          headers() {
            return {
              cookie: cookies().toString(),
              "x-trpc-source": "rsc-http",
            };
          },
        }),
      ],
    };
  },
});
export { type RouterInputs, type RouterOutputs } from "@saasfly/api";
