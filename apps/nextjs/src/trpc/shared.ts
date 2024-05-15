import { env } from "~/env.mjs";

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
