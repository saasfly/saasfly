import type Stripe from "stripe";

import { db, SubscriptionPlan } from "@saasfly/db";

import { stripe } from ".";
import { getSubscriptionPlan } from "./plans";

export async function handleEvent(event: Stripe.DiscriminatedEvent) {
  const session = event.data.object as Stripe.Checkout.Session;
  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );
    const customerId =
      typeof subscription.customer === "string"
        ? subscription.customer
        : subscription.customer.id;
    const { userId } = subscription.metadata;
    if (!userId) {
      throw new Error("Missing user id");
    }
    const customer = await db
      .selectFrom("Customer")
      .selectAll()
      .where("authUserId", "=", userId)
      .executeTakeFirst();

    if (customer) {
      return await db
        .updateTable("Customer")
        .where("id", "=", customer.id)
        .set({
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscription.id,
          stripePriceId: subscription.items.data[0]?.price.id,
        })
        .execute();
    }
  }

  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );
    const customerId =
      typeof subscription.customer === "string"
        ? subscription.customer
        : subscription.customer.id;
    const { userId } = subscription.metadata;
    if (!userId) {
      throw new Error("Missing user id");
    }
    const customer = await db
      .selectFrom("Customer")
      .selectAll()
      .where("authUserId", "=", userId)
      .executeTakeFirst();

    /**
     * User is already subscribed, update their info
     */
    if (customer) {
      const priceId = subscription.items.data[0]?.price.id;
      if (!priceId) {
        return;
      }

      const plan = getSubscriptionPlan(priceId);
      return await db
        .updateTable("Customer")
        .where("id", "=", customer.id)
        .set({
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscription.id,
          stripePriceId: priceId,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000,
          ),
          plan: plan || SubscriptionPlan.FREE,
        })
        .execute();
    }
  }
  if (event.type === "customer.subscription.updated") {
    //add customer logic
    console.log("event.type: ", event.type);
  }
  console.log("✅ Stripe Webhook Processed");
}
