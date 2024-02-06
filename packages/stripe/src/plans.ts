import { SubscriptionPlan } from "@saasfly/db";

import { env } from "./env.mjs";

export const PLANS: Record<
  string,
  (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]
> = {
  [env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID]: SubscriptionPlan.PRO,
  [env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID]: SubscriptionPlan.PRO,
  [env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID]: SubscriptionPlan.BUSINESS,
  [env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID]: SubscriptionPlan.BUSINESS,
};

type PlanType = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan];

export function getSubscriptionPlan(priceId: string | undefined): PlanType {
  return priceId && PLANS[priceId] ? PLANS[priceId]! : SubscriptionPlan.FREE;
}
