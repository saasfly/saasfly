// import {
//     httpBatchLink,
//     type HTTPBatchLinkOptions,
//     type HTTPHeaders,
//     type TRPCLink,
// } from "@trpc/client";
//
// import type {AppRouter} from "@saasfly/api";

import { env } from "~/env.mjs";

// import fetchPonyfill from "fetch-ponyfill";

export { transformer } from "@saasfly/api/transformer";

function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  const vc = env.NEXT_PUBLIC_APP_URL;
  if (vc) return vc;
  return `http://127.0.0.1:3000`;
}

export function getUrl() {
  return getBaseUrl() + "/api/trpc/edge";
}
// const lambdas = [""];
//
// export const endingLink = (opts?: {
//     headers?: HTTPHeaders | (() => HTTPHeaders);
// }) =>
//     ((runtime) => {
//         const sharedOpts = {
//             headers: opts?.headers,
//         } satisfies Partial<HTTPBatchLinkOptions>;
//
//         const edgeLink = httpBatchLink({
//             ...sharedOpts,
//             url: `${getBaseUrl()}/api/trpc/edge`,
//             fetch: fetchPonyfill().fetch,
//         })(runtime);
//         const lambdaLink = httpBatchLink({
//             ...sharedOpts,
//             url: `${getBaseUrl()}/api/trpc/lambda`,
//             fetch: fetchPonyfill().fetch,
//         })(runtime);
//
//         return (ctx) => {
//             const path = ctx.op.path.split(".") as [string, ...string[]];
//             const endpoint = lambdas.includes(path[0]) ? "lambda" : "edge";
//
//             const newCtx = {
//                 ...ctx,
//                 op: {...ctx.op, path: path.join(".")},
//             };
//             return endpoint === "edge" ? edgeLink(newCtx) : lambdaLink(newCtx);
//         };
//     }) satisfies TRPCLink<AppRouter>;
