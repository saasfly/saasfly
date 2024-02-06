import { PostHog } from "posthog-node";

export const phConfig = new PostHog("", { host: "https://app.posthog.com" });
