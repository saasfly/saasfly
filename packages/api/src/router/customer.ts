import { getServerSession } from "next-auth/next";
import { z } from "zod";

import { authOptions } from "@saasfly/auth";
import { db, SubscriptionPlan } from "@saasfly/db";

import { createTRPCRouter, protectedProcedure } from "../trpc";

const updateUserNameSchema = z.object({
  name: z.string(),
  userId: z.string(),
});
const insertCustomerSchema = z.object({
  userId: z.string(),
});
z.object({
  userId: z.string(),
});
export const customerRouter = createTRPCRouter({
  updateUserName: protectedProcedure
    .input(updateUserNameSchema)
    .mutation(async ({ input }) => {
      const { userId } = input;
      const session = await getServerSession(authOptions);
      if (!session?.user || userId !== session?.user.id) {
        return { success: false, reason: "no auth" };
      }
      await db
        .updateTable("User")
        .set({
          name: input.name,
        })
        .where("id", "=", userId)
        .execute();
      return { success: true, reason: "" };
    }),

  insertCustomer: protectedProcedure
    .input(insertCustomerSchema)
    .mutation(async ({ input }) => {
      const { userId } = input;
      await db
        .insertInto("Customer")
        .values({
          authUserId: userId,
          plan: SubscriptionPlan.FREE,
        })
        .executeTakeFirst();
    }),

  queryCustomer: protectedProcedure
    .input(insertCustomerSchema)
    .query(async ({ input }) => {
      const { userId } = input;
      console.log("userId:", userId);
      try {
        console.log(
          "result:",
          await db
            .selectFrom("Customer")
            .where("authUserId", "=", userId)
            .executeTakeFirst(),
        );
      } catch (e) {
        console.error("e:", e);
      }

      return await db
        .selectFrom("Customer")
        .where("authUserId", "=", userId)
        .executeTakeFirst();
    }),
});
