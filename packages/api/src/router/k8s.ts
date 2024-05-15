import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { getCurrentUser } from "@saasfly/auth";
import { auth } from "@saasfly/auth/";
import { db, SubscriptionPlan } from "@saasfly/db";

import { createTRPCRouter, protectedProcedure } from "../trpc";

const k8sClusterCreateSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  location: z.string(),
});

export const runtime = "edge";

const k8sClusterDeleteSchema = z.object({
  id: z.number(),
});

export const k8sRouter = createTRPCRouter({
  getClusters: protectedProcedure.query(async () => {
    const session = await auth();
    const userId = session!.user?.id;
    if (!session) {
      throw new Error("Unauthorized"); // 抛出一个未授权的错误,而不是直接返回
    }

    // const client = createClient({connectionString:getRequestContext().env.HYPERDRIVE.connectionString});
    // try {
    //     await client.connect();
    //     const result = await client.sql`
    //   SELECT *
    //   FROM K8sClusterConfig
    //   WHERE authUserId = ${userId}
    // `;
    //     console.log(JSON.stringify(result));
    //     return result;
    // } catch (err) {
    //     console.error('Error executing query', err);
    //     throw err; // 抛出错误,让TRPC处理并返回适当的错误响应
    // }

    return await db
      .selectFrom("K8sClusterConfig")
      .selectAll()
      .where("authUserId", "=", userId)
      .execute();

    // try {
    //     // Connect to your database
    //     // @ts-ignore
    //     // const sql = postgres(env.HYPERDRIVE.connectionString,{ prepare: false });
    //     // console.log(JSON.stringify(getRequestContext().env.HYPERDRIVE.connectionString));
    //     // const sql = neon(getRequestContext().env.HYPERDRIVE.connectionString);
    //     const sql = postgres(getRequestContext().env.HYPERDRIVE.connectionString);
    //     // 使用 sql 标签模板字符串执行查询
    //     const result = await sql`
    //             SELECT *
    //             FROM K8sClusterConfig
    //             WHERE authUserId = ${userId}
    //           `;
    //
    //     // 将查询结果以 JSON 格式返回
    //     return JSON.stringify(result);
    // } catch (err) {
    //     console.error('Error executing query', err);
    // } finally {
    // }
  }),
  createCluster: protectedProcedure
    .input(k8sClusterCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const session = await auth();
      if (!session) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You must be logged in to create a cluster",
        });
      }
      try {
        const newCluster = await db
          .insertInto("K8sClusterConfig") // @ts-ignore
          .values({
            name: input.name,
            location: input.location,
            network: "Default",
            plan: SubscriptionPlan.FREE,
            authUserId: session?.user?.id,
          })
          .returning("id")
          .executeTakeFirst();

        if (!newCluster) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to create the cluster",
          });
        }

        return {
          id: newCluster.id,
          clusterName: input.name,
          location: input.location,
          success: true,
        };
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new TRPCError({ code: "BAD_REQUEST", cause: error });
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", cause: error });
      }
    }),
  updateCluster: protectedProcedure
    .input(k8sClusterCreateSchema)
    .mutation(async (opts) => {
      const id = opts.input.id!;
      const user = await getCurrentUser();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const userId = user.id;
      const newName = opts.input.name;
      const newLocation = opts.input.location;

      const cluster = await db
        .selectFrom("K8sClusterConfig")
        .selectAll()
        .where("id", "=", id)
        .executeTakeFirst();
      if (!cluster) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Cluster not found",
        });
      }

      if (cluster.authUserId && cluster.authUserId !== userId) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You don't have access to this cluster",
        });
      }
      if (newName || newLocation) {
        const updateData: Record<string, string> = {};
        if (newName) updateData.name = newName;
        if (newLocation) updateData.location = newLocation;

        await db
          .updateTable("K8sClusterConfig")
          .where("id", "=", id)
          .set(updateData)
          .execute();
      }
      return {
        success: true,
      };
    }),
  deleteCluster: protectedProcedure
    .input(k8sClusterDeleteSchema)
    .mutation(async (opts) => {
      const id = opts.input.id;
      const userId = opts.ctx.userId!;
      const cluster = await db
        .selectFrom("K8sClusterConfig")
        .selectAll()
        .where("id", "=", id)
        .executeTakeFirst();
      if (!cluster) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Cluster not found",
        });
      }
      if (cluster.authUserId && cluster.authUserId !== userId) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You don't have access to this cluster",
        });
      }
      await db.deleteFrom("K8sClusterConfig").where("id", "=", id).execute();
      return { success: true };
    }),
});
