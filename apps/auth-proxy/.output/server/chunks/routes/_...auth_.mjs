import { Auth } from "@auth/core";
import GitHub from "@auth/core/providers/github";

import { e as eventHandler, t as toWebRequest } from "../runtime.mjs";

import "node:http";
import "node:https";
import "fs";
import "path";
import "node:fs";
import "node:url";

const ____auth_ = eventHandler(async (event) =>
  Auth(toWebRequest(event), {
    secret: process.env.AUTH_SECRET,
    trustHost: !!process.env.VERCEL,
    redirectProxyUrl: process.env.AUTH_REDIRECT_PROXY_URL,
    providers: [
      GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    ],
  }),
);

export { ____auth_ as default };
//# sourceMappingURL=_...auth_.mjs.map
