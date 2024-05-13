// "use server";
//
// import "server-only";
//
// import { cookies, headers } from "next/headers";
// import { loggerLink } from "@trpc/client";
// import { experimental_createTRPCNextAppDirServer } from "@trpc/next/app-dir/server";
//
import type {AppRouter} from "@saasfly/api";
import {cookies} from 'next/headers';
import superjson from 'superjson';
//
// import { endingLink, transformer } from "./shared";
//
// export const trpc = experimental_createTRPCNextAppDirServer<AppRouter>({
//   config() {
//     return {
//       ssr: true,
//       transformer,
//       links: [
//         // loggerLink({
//         //   enabled: (opts) =>
//         //     process.env.NODE_ENV === "development" ||
//         //     (opts.direction === "down" && opts.result instanceof Error),
//         // }),
//         loggerLink({
//           enabled: () => true,
//         }),
//         endingLink({
//           headers: () => {
//             const h = new Map(headers());
//             h.delete("connection");
//             h.delete("transfer-encoding");
//             h.set("x-trpc-source", "server");
//             h.set("cookie", cookies().toString());
//             return Object.fromEntries(h.entries());
//           },
//         }),
//       ],
//     };
//   },
// });
//
import {loggerLink} from '@trpc/client';
import {experimental_createTRPCNextAppDirServer} from '@trpc/next/app-dir/server';
import {experimental_nextHttpLink} from "@trpc/next/app-dir/links/nextHttp";
import {getUrl} from "~/trpc/shared";

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
          // batch: true,
          url: getUrl(),
          transformer: superjson,
          headers() {
            return {
              cookie: cookies().toString(),
              'x-trpc-source': 'rsc-http',
            };
          },
        })
      ],
    };
  },
});
export { type RouterInputs, type RouterOutputs } from "@saasfly/api";
